import{_ as n,o as a,c as l,O as p,Y as o,Z as e}from"./chunks/framework.4a218191.js";const d=JSON.parse('{"title":"用 Vite+Vue3 快速构建一个 Electron 项目","description":"","frontmatter":{},"headers":[],"relativePath":"zh/tutorials/create-vite-electron-service-vue.md","filePath":"zh/tutorials/create-vite-electron-service-vue.md"}'),t={name:"zh/tutorials/create-vite-electron-service-vue.md"};function c(r,s,E,y,i,u){return a(),l("div",null,s[0]||(s[0]=[p('<h1 id="用-vite-vue3-快速构建一个-electron-项目" tabindex="-1">用 Vite+Vue3 快速构建一个 Electron 项目 <a class="header-anchor" href="#用-vite-vue3-快速构建一个-electron-项目" aria-label="Permalink to &quot;用 Vite+Vue3 快速构建一个 Electron 项目&quot;">​</a></h1><h2 id="创建一个-vite-vue3-的项目" tabindex="-1">创建一个 Vite+Vue3 的项目 <a class="header-anchor" href="#创建一个-vite-vue3-的项目" aria-label="Permalink to &quot;创建一个 Vite+Vue3 的项目&quot;">​</a></h2><p>用 Vite 官方的指引创建一个 vite+Vue3 的项目。</p><p><code>yarn create vite</code></p><p>选择 Vue3</p><p><img src="'+o+`" alt="alt 创建"></p><h2 id="修改项目结构" tabindex="-1">修改项目结构 <a class="header-anchor" href="#修改项目结构" aria-label="Permalink to &quot;修改项目结构&quot;">​</a></h2><p>我们在<code>src</code>目录下创建<code>main</code>、<code>render</code>、<code>preload</code>、<code>work</code>四个目录，然后将 src 下原有的所有内容移动到<code>render</code>目录下，然后改变<code>index.html</code>中<code>script</code>的引入<code>&lt;script type=&quot;module&quot; src=&quot;/src/render/main.ts&quot;&gt;&lt;/script&gt;</code></p><ul><li><code>main</code> 是主进程相关的工程代码目录</li><li><code>render</code> 是渲染进程相关的工程代码目录</li><li><code>preload</code> 是预加载相关脚本服务的工程代码目录</li><li><code>work</code> 是任务进程相关的工程代码目录</li></ul><p>这样就把一个 electron 的核心工程目录梳理划分出来了。</p><p>然后我们需要在<code>render</code>、<code>preload</code>、<code>work</code>下分别创建一个<code>index.ts</code>入口文件，方便后续用 Vite 去启动这些服务。</p><h2 id="添加工程配置文件" tabindex="-1">添加工程配置文件 <a class="header-anchor" href="#添加工程配置文件" aria-label="Permalink to &quot;添加工程配置文件&quot;">​</a></h2><p>这一步我们在根目录下创建一个<code>ep.config.ts</code>文件。</p><ul><li><code>ep.config.ts</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { builtinModules } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { cwd } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;process&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> electronPath </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { UserConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vite&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">__dirname</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fileURLToPath</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">URL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">sharedResolve</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;@&quot;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">main</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">preload</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">render</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">work</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UserConfig</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">electronPath</span><span style="color:#F97583;">:</span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 主进程配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  main: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: </span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist/main&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lib: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entry: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src/main/index.ts&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        formats: [</span><span style="color:#9ECBFF;">&quot;cjs&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: [</span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;koffi&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">builtinModules],</span></span>
<span class="line"><span style="color:#E1E4E8;">        output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          entryFileNames: </span><span style="color:#9ECBFF;">&quot;[name].cjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">2048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// preload配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  preload: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: </span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist/preload&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lib: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entry: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src/preload/index.ts&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        formats: [</span><span style="color:#9ECBFF;">&quot;cjs&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: [</span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">builtinModules],</span></span>
<span class="line"><span style="color:#E1E4E8;">        output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          entryFileNames: </span><span style="color:#9ECBFF;">&quot;[name].cjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">2048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 渲染进程配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  render: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: </span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&quot;./&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../dist/render&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetsInlineLimit: </span><span style="color:#79B8FF;">1048576</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">2048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">builtinModules, </span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// work进程配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  work: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    root: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src/work&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    envDir: </span><span style="color:#B392F0;">cwd</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#E1E4E8;">    build: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      outDir: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;dist/work&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      assetsDir: </span><span style="color:#9ECBFF;">&quot;.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      minify: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lib: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        entry: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;src/work/index.ts&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        formats: [</span><span style="color:#9ECBFF;">&quot;cjs&quot;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        external: [</span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">builtinModules],</span></span>
<span class="line"><span style="color:#E1E4E8;">        output: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          entryFileNames: </span><span style="color:#9ECBFF;">&quot;[name].cjs&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      emptyOutDir: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      chunkSizeWarningLimit: </span><span style="color:#79B8FF;">2048</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  electronPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { builtinModules } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { fileURLToPath } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { cwd } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;process&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> electronPath </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { UserConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vite&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">__dirname</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fileURLToPath</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">URL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.url));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">sharedResolve</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  alias: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;@&quot;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">main</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">preload</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">render</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">work</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UserConfig</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">electronPath</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">any</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 主进程配置</span></span>
<span class="line"><span style="color:#24292E;">  main: {</span></span>
<span class="line"><span style="color:#24292E;">    root: </span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      outDir: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist/main&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      minify: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lib: {</span></span>
<span class="line"><span style="color:#24292E;">        entry: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src/main/index.ts&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        formats: [</span><span style="color:#032F62;">&quot;cjs&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        external: [</span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;koffi&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">builtinModules],</span></span>
<span class="line"><span style="color:#24292E;">        output: {</span></span>
<span class="line"><span style="color:#24292E;">          entryFileNames: </span><span style="color:#032F62;">&quot;[name].cjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">2048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// preload配置</span></span>
<span class="line"><span style="color:#24292E;">  preload: {</span></span>
<span class="line"><span style="color:#24292E;">    root: </span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      outDir: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist/preload&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      minify: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lib: {</span></span>
<span class="line"><span style="color:#24292E;">        entry: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src/preload/index.ts&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        formats: [</span><span style="color:#032F62;">&quot;cjs&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        external: [</span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">builtinModules],</span></span>
<span class="line"><span style="color:#24292E;">        output: {</span></span>
<span class="line"><span style="color:#24292E;">          entryFileNames: </span><span style="color:#032F62;">&quot;[name].cjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">2048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 渲染进程配置</span></span>
<span class="line"><span style="color:#24292E;">  render: {</span></span>
<span class="line"><span style="color:#24292E;">    root: </span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&quot;./&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      outDir: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../dist/render&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      minify: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      assetsInlineLimit: </span><span style="color:#005CC5;">1048576</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">2048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        external: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">builtinModules, </span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// work进程配置</span></span>
<span class="line"><span style="color:#24292E;">  work: {</span></span>
<span class="line"><span style="color:#24292E;">    root: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src/work&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    envDir: </span><span style="color:#6F42C1;">cwd</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    resolve: sharedResolve,</span></span>
<span class="line"><span style="color:#24292E;">    build: {</span></span>
<span class="line"><span style="color:#24292E;">      outDir: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;dist/work&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      assetsDir: </span><span style="color:#032F62;">&quot;.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      minify: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lib: {</span></span>
<span class="line"><span style="color:#24292E;">        entry: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;src/work/index.ts&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        formats: [</span><span style="color:#032F62;">&quot;cjs&quot;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      rollupOptions: {</span></span>
<span class="line"><span style="color:#24292E;">        external: [</span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">builtinModules],</span></span>
<span class="line"><span style="color:#24292E;">        output: {</span></span>
<span class="line"><span style="color:#24292E;">          entryFileNames: </span><span style="color:#032F62;">&quot;[name].cjs&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      emptyOutDir: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      chunkSizeWarningLimit: </span><span style="color:#005CC5;">2048</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  electronPath,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config;</span></span></code></pre></div><h2 id="主进程代码编写" tabindex="-1">主进程代码编写 <a class="header-anchor" href="#主进程代码编写" aria-label="Permalink to &quot;主进程代码编写&quot;">​</a></h2><p>安装<code>electron</code> 和 <code>electron-prokit</code></p><p><code>yarn add electron electron-prokit -D</code></p><ul><li><code>src/main/index.ts</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { join, resolve } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { app } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;electron&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createWindow } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;electron-prokit&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initWindowsAction</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">mainWindow</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createWindow</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;main&quot;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">960</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">720</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    webPreferences: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      contextIsolation: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      nodeIntegration: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      webSecurity: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      preload: </span><span style="color:#B392F0;">join</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../preload/index.cjs&quot;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">MODE</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;dev&quot;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">VITE_DEV_SERVER_URL</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        mainWindow.</span><span style="color:#B392F0;">loadURL</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">meta</span><span style="color:#E1E4E8;">.env.</span><span style="color:#79B8FF;">VITE_DEV_SERVER_URL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">        mainWindow.webContents.</span><span style="color:#B392F0;">openDevTools</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      mainWindow.</span><span style="color:#B392F0;">loadFile</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&quot;../render/index.html&quot;</span><span style="color:#E1E4E8;">));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">whenReady</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">initWindowsAction</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { join, resolve } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { app } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;electron&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createWindow } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;electron-prokit&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initWindowsAction</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">mainWindow</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createWindow</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;main&quot;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">960</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    height: </span><span style="color:#005CC5;">720</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    webPreferences: {</span></span>
<span class="line"><span style="color:#24292E;">      contextIsolation: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      nodeIntegration: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      webSecurity: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      preload: </span><span style="color:#6F42C1;">join</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../preload/index.cjs&quot;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (mainWindow) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">MODE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;dev&quot;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">VITE_DEV_SERVER_URL</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        mainWindow.</span><span style="color:#6F42C1;">loadURL</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">import</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">meta</span><span style="color:#24292E;">.env.</span><span style="color:#005CC5;">VITE_DEV_SERVER_URL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">        mainWindow.webContents.</span><span style="color:#6F42C1;">openDevTools</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      mainWindow.</span><span style="color:#6F42C1;">loadFile</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&quot;../render/index.html&quot;</span><span style="color:#24292E;">));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">whenReady</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">initWindowsAction</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="集成自定义项目启动脚本" tabindex="-1">集成自定义项目启动脚本 <a class="header-anchor" href="#集成自定义项目启动脚本" aria-label="Permalink to &quot;集成自定义项目启动脚本&quot;">​</a></h2><p>有了 Vite 配置文件之后，我们就可以自定义开发脚本来启动本地的 electron 项目了。</p><p>在根目录下创建<code>scripts</code>目录，添加<code>dev.js</code>文件。</p><p>安装@electron-prokit/create-service\`</p><p><code>yarn add @electron-prokit/create-service -D</code></p><p>-<code>scripts/dev.ts</code></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> createViteElectronService </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@electron-prokit/create-service&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../ep.config&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">createViteElectronService</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  render: config.render,</span></span>
<span class="line"><span style="color:#E1E4E8;">  preload: config.preload,</span></span>
<span class="line"><span style="color:#E1E4E8;">  work: config.work,</span></span>
<span class="line"><span style="color:#E1E4E8;">  main: config.main,</span></span>
<span class="line"><span style="color:#E1E4E8;">  electronPath: config.electronPath</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> createViteElectronService </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@electron-prokit/create-service&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../ep.config&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">createViteElectronService</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  render: config.render,</span></span>
<span class="line"><span style="color:#24292E;">  preload: config.preload,</span></span>
<span class="line"><span style="color:#24292E;">  work: config.work,</span></span>
<span class="line"><span style="color:#24292E;">  main: config.main,</span></span>
<span class="line"><span style="color:#24292E;">  electronPath: config.electronPath</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><p>在 <code>package.json</code> 中的 <code>scripts</code> 添加</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">&quot;dev&quot;</span><span style="color:#79B8FF;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">&quot;dev&quot;</span><span style="color:#005CC5;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts&quot;</span></span></code></pre></div><p>在 <code>package.json</code> 中添加<code>main</code>选项：<code>&quot;main&quot;: &quot;dist/main/index.cjs&quot;</code></p><h2 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h2><p>经过上面的步骤，就可以一键启动 Electron 项目了。</p><p><code>yarn run dev</code></p><p><img src="`+e+'" alt="alt demo"></p>',34)]))}const m=n(t,[["render",c]]);export{d as __pageData,m as default};
