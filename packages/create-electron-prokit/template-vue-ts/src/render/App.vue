<script setup lang="ts">
import { sendMsgToMain } from 'electron-prokit';
import HelloWorld from './components/HelloWorld.vue'
function openUrl() {
  sendMsgToMain({
    key: 'openUrl',
    data: {
      url: 'https://xutaotaotao.github.io/electron-prokit/'
    }
  })
}
</script>

<template>
  <div @click="openUrl">
    <img src="./assets/logo.svg" className="logo" alt="Vite logo" />
  </div>
  <HelloWorld msg="A vite + vue + electron template with electron-prokit." />
</template>

<style scoped>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
