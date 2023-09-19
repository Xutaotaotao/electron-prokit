import axios from "axios";
interface Options {
  url: string;
  method: string;
  data?: any;
  params?: any;
  headers?: any;
  timeout?: number;
  handleError?: (error: any) => void;
  log?: boolean | ((data: any) => void)
}

type RequestInterceptor = (config: Options) => Options;

type ResponseInterceptor<T> = (response: T) => T;

class InterceptorManager<T> {
  private interceptors: Array<T | null> = [];

  use(interceptor: T): number {
    this.interceptors.push(interceptor);
    return this.interceptors.length - 1;
  }

  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }

  forEach(callback: (interceptor: T) => void): void {
    this.interceptors.forEach((interceptor) => {
      if (interceptor) {
        callback(interceptor);
      }
    });
  }
}

const requestInterceptors = new InterceptorManager<RequestInterceptor>();
const responseInterceptors = new InterceptorManager<ResponseInterceptor<any>>();

function addRequestInterceptor(
  onFulfilled: RequestInterceptor,
  onRejected?: RequestInterceptor
): number {
  return requestInterceptors.use(onFulfilled);
}

function addResponseInterceptor(
  onFulfilled: ResponseInterceptor<any>,
  onRejected?: ResponseInterceptor<any>
): number {
  return responseInterceptors.use(onFulfilled);
}

function removeRequestInterceptor(id: number): void {
  requestInterceptors.eject(id);
}

function removeResponseInterceptor(id: number): void {
  responseInterceptors.eject(id);
}

const timeoutPromise = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error('Timeout!'))
    }, ms);

    promise.then((res) => {
      clearTimeout(timeoutId);
      resolve(res);
    })
    .catch((err) => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}

const electronRequest = (electronAdaptedOptions: Options) => {
  const { net } = require("electron");
  const netPromise = new Promise((resolve, reject) => {
    const request = net.request(electronAdaptedOptions);

    // header 
    if (electronAdaptedOptions.headers && Object.keys(electronAdaptedOptions.headers).length) {
      Object.keys(electronAdaptedOptions.headers).map((key:string) => {
        request.setHeader(key,electronAdaptedOptions.headers[key])
      })
    }

    // timeout 

    request.on("response", (response) => {
      let responseData = "";

      response.on("data", (chunk) => {
        responseData += chunk;
      });

      response.on("end", () => {
        const result = {
          data: responseData,
          status: response.statusCode,
          headers: response.headers,
        };
        if (electronAdaptedOptions.log) {
          if (typeof electronAdaptedOptions.log === "function") {
            electronAdaptedOptions.log(result);
          } else {
            console.log(result);
          }
        }
        resolve(result);
      });

      response.on("error", (error) => {
        reject(error);
      });
    });

    request.on("error", (error) => {
      reject(error);
    });

    if (electronAdaptedOptions.data) {
      request.write(electronAdaptedOptions.data);
    }
    request.end();
  });
  if (electronAdaptedOptions.timeout) {
    return Promise.race([
      netPromise,
      timeoutPromise
    ])
  }
  return netPromise
};

const axiosRequest = (axiosAdaptedOptions: Options) => {
  return axios(axiosAdaptedOptions);
};

export async function http<T>(options: Options): Promise<T> {
  if (!options.method) {
    options.method = 'get'
  }
  try {
    requestInterceptors.forEach((interceptor) => {
      if (interceptor) {
        options = interceptor(options);
      }
    });

    let result;
    if (import.meta.env.VITE_CURRENT_RUN_MODE === "main") {
      result = await electronRequest(options);
    } else {
      result = await axiosRequest(options);
    }

    responseInterceptors.forEach((interceptor) => {
      if (interceptor) {
        result = interceptor(result);
      }
    });

    return result;
  } catch (error) {
    if (options.handleError) {
      options.handleError(error);
    }
    throw error;
  }
}

http.interceptors = {
  request: {
    use: addRequestInterceptor,
    eject: removeRequestInterceptor,
  },
  response: {
    use: addResponseInterceptor,
    eject: removeResponseInterceptor,
  },
};
