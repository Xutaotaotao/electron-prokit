<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>src/render/components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p class="read-the-docs">Click on the logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
