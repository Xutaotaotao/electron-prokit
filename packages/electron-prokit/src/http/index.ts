import axios from "axios";
interface Options {
  url: string;
  method: string;
  log?:boolean;
  data?: any;
  params?: any;
  headers?: any;
  timeout?: number;
  cancelToken?: any;
  handleError?: (error: any) => void;
}

// 请求拦截器类型
type RequestInterceptor = (config: Options) => Options;

// 响应拦截器类型
type ResponseInterceptor<T> = (response: T) => T;

// 创建请求和响应拦截器管理器
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

// 创建请求和响应拦截器管理器实例
const requestInterceptors = new InterceptorManager<RequestInterceptor>();
const responseInterceptors = new InterceptorManager<ResponseInterceptor<any>>();

// 添加请求拦截器
function addRequestInterceptor(
  onFulfilled: RequestInterceptor,
  onRejected?: RequestInterceptor
): number {
  return requestInterceptors.use(onFulfilled);
}

// 添加响应拦截器
function addResponseInterceptor(
  onFulfilled: ResponseInterceptor<any>,
  onRejected?: ResponseInterceptor<any>
): number {
  return responseInterceptors.use(onFulfilled);
}

// 移除请求拦截器
function removeRequestInterceptor(id: number): void {
  requestInterceptors.eject(id);
}

// 移除响应拦截器
function removeResponseInterceptor(id: number): void {
  responseInterceptors.eject(id);
}


const electronRequest = (electronAdaptedOptions:Options) => {
  const { net } = require("electron");
  return new Promise((resolve, reject) => {
    const request = net.request(electronAdaptedOptions);

    request.on('response', (response) => {
      let responseData = '';

      response.on('data', (chunk) => {
        responseData += chunk;
      });

      response.on('end', () => {
        const result = {
          data: responseData,
          status: response.statusCode,
          headers: response.headers,
        };
        if (electronAdaptedOptions.log) {
          console.log(result)
        }
        resolve(result);
      });

      response.on('error', (error) => {
        reject(error);
      });
    });

    request.on('error', (error) => {
      reject(error);
    });

    // 发送请求
    if (electronAdaptedOptions.data) {
      request.write(electronAdaptedOptions.data);
    }
    request.end();
  });
};

const axiosRequest = (axiosAdaptedOptions:Options) => {
  // 实现 Axios 请求逻辑
  return axios(axiosAdaptedOptions);
};

export async function http<T>(options: Options): Promise<T> {
  try {
    // 执行请求拦截器
    requestInterceptors.forEach((interceptor) => {
      if (interceptor) {
        options = interceptor(options);
      }
    });

    let result;
    if (import.meta.env.VITE_CURRENT_RUN_MODE === "main") {
      result = await electronRequest(options);
    } else {
      result = await  axiosRequest(options);
    }

    // 执行响应拦截器
    responseInterceptors.forEach((interceptor) => {
      if (interceptor) {
        result = interceptor(result);
      }
    });

    return result;
  } catch (error) {
    if (options.handleError) {
      options.handleError(error);
    } else {
      console.error(error);
    }
    throw error;
  }
}

// 导出添加和移除拦截器的函数
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
