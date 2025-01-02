import{_ as n,o as a,c as p,O as l}from"./chunks/framework.4a218191.js";const u=JSON.parse('{"title":"Http","description":"electron-prokit http api","frontmatter":{"outline":"deep","title":"Http","description":"electron-prokit http api"},"headers":[],"relativePath":"api/electron-prokit/http.md","filePath":"api/electron-prokit/http.md"}'),o={name:"api/electron-prokit/http.md"};function e(t,s,r,c,E,y){return a(),p("div",null,s[0]||(s[0]=[l(`<h1 id="http" tabindex="-1">Http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;Http&quot;">​</a></h1><p>API interfaces related to network communication. Supports <code>renderer processes</code>, <code>main process</code>, and <code>preload</code> and can be called from anywhere.</p><h2 id="purpose" tabindex="-1">Purpose <a class="header-anchor" href="#purpose" aria-label="Permalink to &quot;Purpose&quot;">​</a></h2><p>The primary purpose of Http is to initiate network requests to interact with server interfaces.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Initiate a GET request.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { http } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;electron-prokit&quot;</span><span style="color:#E1E4E8;">;</span></span>
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
<span class="line"><span style="color:#24292E;">  });</span></span></code></pre></div><h2 id="request-configuration" tabindex="-1">Request Configuration <a class="header-anchor" href="#request-configuration" aria-label="Permalink to &quot;Request Configuration&quot;">​</a></h2><p>These are the configuration options that can be used when creating a request. Only the URL is required. If the method is not specified, the request will default to using the GET method.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`url\` is the server URL used for the request</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`method\` is the method used when creating the request</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">method</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;get&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Default value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Custom request headers</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">headers</span><span style="color:#E1E4E8;">: {</span><span style="color:#9ECBFF;">&#39;X-Requested-With&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;XMLHttpRequest&#39;</span><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`params\` are URL parameters sent along with the request</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Must be a simple object or URLSearchParams object</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">params</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ID</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12345</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`data\` is the data sent as the request body</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">firstName</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// \`timeout\` specifies the timeout for the request in milliseconds.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// If the request takes longer than the \`timeout\` value, the request will be aborted</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">timeout</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Default is \`0\` (no timeout)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Error handling</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">handleError</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Logging handling / boolean type, function, or empty</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// boolean means print to console, function allows custom logging</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`url\` is the server URL used for the request</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`method\` is the method used when creating the request</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">method</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;get&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Default value</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Custom request headers</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">headers</span><span style="color:#24292E;">: {</span><span style="color:#032F62;">&#39;X-Requested-With&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;XMLHttpRequest&#39;</span><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`params\` are URL parameters sent along with the request</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Must be a simple object or URLSearchParams object</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">params</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ID</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12345</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`data\` is the data sent as the request body</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">firstName</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Fred&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// \`timeout\` specifies the timeout for the request in milliseconds.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// If the request takes longer than the \`timeout\` value, the request will be aborted</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">timeout</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// Default is \`0\` (no timeout)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Error handling</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">handleError</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Logging handling / boolean type, function, or empty</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// boolean means print to console, function allows custom logging</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="interceptors" tabindex="-1">Interceptors <a class="header-anchor" href="#interceptors" aria-label="Permalink to &quot;Interceptors&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Add a request interceptor</span></span>
<span class="line"><span style="color:#E1E4E8;">http.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Do something before sending the request</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Do something with the request error</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a response interceptor</span></span>
<span class="line"><span style="color:#E1E4E8;">http.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Do something with the response data</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// Do something with the response error</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Add a request interceptor</span></span>
<span class="line"><span style="color:#24292E;">http.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Do something before sending the request</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Do something with the request error</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Add a response interceptor</span></span>
<span class="line"><span style="color:#24292E;">http.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Do something with the response data</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// Do something with the response error</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div>`,12)]))}const h=n(o,[["render",e]]);export{u as __pageData,h as default};
