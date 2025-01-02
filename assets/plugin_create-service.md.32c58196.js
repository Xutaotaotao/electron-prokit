import{_ as n,o as a,c as l,O as p}from"./chunks/framework.4a218191.js";const u=JSON.parse('{"title":"create-service","description":"","frontmatter":{},"headers":[],"relativePath":"plugin/create-service.md","filePath":"plugin/create-service.md"}'),o={name:"plugin/create-service.md"};function e(t,s,c,r,E,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="create-service" tabindex="-1">create-service <a class="header-anchor" href="#create-service" aria-label="Permalink to &quot;create-service&quot;">​</a></h1><p>Suitable for projects created with Vite. It creates the renderer, worker, main process and preload scripts required by Electron for you, allowing you to start an Electron project with hot updates with one click.</p><h2 id="install-dependencies" tabindex="-1">Install dependencies <a class="header-anchor" href="#install-dependencies" aria-label="Permalink to &quot;Install dependencies&quot;">​</a></h2><p><code>yarn add @electron-prokit/create-service -D</code></p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// scripts/dev.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> createViteElectronService </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@electron-prokit/create-service&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> config </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../ep.config&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">createViteElectronService</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  render: config.render,</span></span>
<span class="line"><span style="color:#E1E4E8;">  preload: config.preload,</span></span>
<span class="line"><span style="color:#E1E4E8;">  work: config.work,</span></span>
<span class="line"><span style="color:#E1E4E8;">  main: config.main,</span></span>
<span class="line"><span style="color:#E1E4E8;">  electronPath: config.electronPath,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// scripts/dev.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> createViteElectronService </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@electron-prokit/create-service&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> config </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../ep.config&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">createViteElectronService</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  render: config.render,</span></span>
<span class="line"><span style="color:#24292E;">  preload: config.preload,</span></span>
<span class="line"><span style="color:#24292E;">  work: config.work,</span></span>
<span class="line"><span style="color:#24292E;">  main: config.main,</span></span>
<span class="line"><span style="color:#24292E;">  electronPath: config.electronPath,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// ep.config.ts</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { builtinModules } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;module&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { fileURLToPath } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;url&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { cwd } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;process&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;path&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vitejs/plugin-vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
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
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">electronPath</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">config</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> config;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// ep.config.ts</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { builtinModules } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;module&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { fileURLToPath } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;url&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { cwd } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;process&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;path&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vitejs/plugin-vue&quot;</span><span style="color:#24292E;">;</span></span>
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
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">electronPath</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">config</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
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
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> config;</span></span></code></pre></div><p>Add</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;dev&quot;: &quot;node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;dev&quot;: &quot;node --experimental-specifier-resolution=node --loader ts-node/esm ./scripts/dev.ts&quot;</span></span></code></pre></div><p>to the <code>scripts</code> in <code>package.json</code>.</p><p><code>yarn run dev</code> to start the project.</p><p>See <a href="https://xutaotaotao.github.io/electron-prokit/tutorials/create-vite-electron-service.html" target="_blank">Building an Electron Project Quickly with Vite</a> for details.</p><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><p>The parameter of <code>createViteElectronService</code> is an object with the following properties:</p><table><thead><tr><th>Property</th><th style="text-align:center;">Meaning</th><th style="text-align:right;">Type</th><th style="text-align:right;">Default Value</th></tr></thead><tbody><tr><td><code>renderConfigFile</code></td><td style="text-align:center;">Renderer process Vite config file</td><td style="text-align:right;">string</td><td style="text-align:right;"></td></tr><tr><td><code>preloadConfigFile</code></td><td style="text-align:center;">Preload script Vite config file</td><td style="text-align:right;">string</td><td style="text-align:right;"></td></tr><tr><td><code>workConfigFile</code></td><td style="text-align:center;">Worker process Vite config file</td><td style="text-align:right;">string</td><td style="text-align:right;"></td></tr><tr><td><code>mainConfigFile</code></td><td style="text-align:center;">Main process Vite config file</td><td style="text-align:right;">string</td><td style="text-align:right;"></td></tr><tr><td><code>sharedOptions</code></td><td style="text-align:center;">Common options for each Vite service</td><td style="text-align:right;">object</td><td style="text-align:right;"><code>{mode: &quot;dev&quot;,build:{watch: {},},}</code></td></tr><tr><td><code>electronPath</code></td><td style="text-align:center;">Path to electron</td><td style="text-align:right;">string</td><td style="text-align:right;"></td></tr></tbody></table>`,15)]))}const d=n(o,[["render",e]]);export{u as __pageData,d as default};
