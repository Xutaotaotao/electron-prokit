import{_ as n,o as a,c as p,O as l}from"./chunks/framework.4a218191.js";const F=JSON.parse('{"title":"Http","description":"electron-prokit http api","frontmatter":{"outline":"deep","title":"Http","description":"electron-prokit http api"},"headers":[],"relativePath":"zh/api/electron-prokit/http.md","filePath":"zh/api/electron-prokit/http.md"}'),o={name:"zh/api/electron-prokit/http.md"};function e(c,s,t,r,E,y){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="http" tabindex="-1">Http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;Http&quot;">​</a></h1><p>网络通信相关的 API 接口。支持<code>渲染进程</code>、<code>主进程</code>、<code>preload</code>，可以随处调用。</p><h2 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h2><p>Http的主要作用是发起网络请求，实现与服务端接口的交互。</p><h2 id="用例" tabindex="-1">用例 <a class="header-anchor" href="#用例" aria-label="Permalink to &quot;用例&quot;">​</a></h2><p>发起一个 Get 请求</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;electron-prokit&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">http</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: </span><span style="color:#9ECBFF;">&quot;https://jsonplaceholder.typicode.com/posts/1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  method: </span><span style="color:#9ECBFF;">&quot;get&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理错误情况</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  .</span><span style="color:#B392F0;">finally</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 总是会执行</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { http } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;electron-prokit&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">http</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  url: </span><span style="color:#032F62;">&quot;https://jsonplaceholder.typicode.com/posts/1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  method: </span><span style="color:#032F62;">&quot;get&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理错误情况</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  .</span><span style="color:#6F42C1;">finally</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 总是会执行</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span></code></pre></div><h2 id="请求配置" tabindex="-1">请求配置 <a class="header-anchor" href="#请求配置" aria-label="Permalink to &quot;请求配置&quot;">​</a></h2><p>这些是创建请求时可以用的配置选项。只有 url 是必需的。如果没有指定 method，请求将默认使用 GET 方法。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`url\` 是用于请求的服务器 URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`method\` 是创建请求时使用的方法</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 自定义请求头</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">headers</span><span style="color:#E1E4E8;">: {</span><span style="color:#9ECBFF;">&#39;X-Requested-With&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XMLHttpRequest&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`params\` 是与请求一起发送的 URL 参数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 必须是一个简单对象或 URLSearchParams 对象</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">params</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ID</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12345</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`data\` 是作为请求体被发送的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">firstName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`timeout\` 指定请求超时的毫秒数。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认值是 \`0\` (永不超时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 错误处理</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">:</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 日志处理 / boolean类型 或者 function 或者 空</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// boolean 就是打印console, function 可以用自己的自定义函数</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`url\` 是用于请求的服务器 URL</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`method\` 是创建请求时使用的方法</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 自定义请求头</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">headers</span><span style="color:#24292E;">: {</span><span style="color:#032F62;">&#39;X-Requested-With&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XMLHttpRequest&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`params\` 是与请求一起发送的 URL 参数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 必须是一个简单对象或 URLSearchParams 对象</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">params</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ID</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12345</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`data\` 是作为请求体被发送的数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">firstName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`timeout\` 指定请求超时的毫秒数。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">timeout</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认值是 \`0\` (永不超时)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 错误处理</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">:</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 日志处理 / boolean类型 或者 function 或者 空</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// boolean 就是打印console, function 可以用自己的自定义函数</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="拦截器" tabindex="-1">拦截器 <a class="header-anchor" href="#拦截器" aria-label="Permalink to &quot;拦截器&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 添加请求拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">http.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在发送请求之前做些什么</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对请求错误做些什么</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加响应拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">http.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对响应数据做点什么</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对响应错误做点什么</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 添加请求拦截器</span></span>
<span class="line"><span style="color:#24292E;">http.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在发送请求之前做些什么</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对请求错误做些什么</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 添加响应拦截器</span></span>
<span class="line"><span style="color:#24292E;">http.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对响应数据做点什么</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对响应错误做点什么</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,12)]))}const u=n(o,[["render",e]]);export{F as __pageData,u as default};
