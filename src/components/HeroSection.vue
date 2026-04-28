<script setup lang="ts">
import {useScrollTo} from "@/composables/useScrollTo.ts";
</script>

<template>
  <!-- Hero -->
  <section class="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-12 pt-32 pb-16 overflow-hidden page-enter">
    <div class="max-w-xl p-2 gap-6 flex flex-col mx-auto">
      <p class="text-turquoise-surf-600 font-xiaowei text-sm p-2">//HELLO, WORLD</p>
      <h1 class="font-display font-extrabold leading-[0.95] tracking-[-0.04em] text-white mb-6 text-[clamp(3.5rem,7vw,5.5rem)]">
        浮士德
        <span class="block font-xiaowei gradient-text">Faust</span>
      </h1>
      <p class="text-sky-aqua-700 font-light mb-2">写代码，做项目，记录技术上的思考与实践。</p>
      <div class="flex flex-wrap gap-4 items-center ">
        <button @click="useScrollTo('project')" class="transition-all duration-200 bg-french-blue-700 text-white px-6 py-3 rounded-md font-medium text-sm no-underline hover:bg-bright-teal-blue-700 hover:-translate-y-0.5">查看项目</button>
        <button @click="useScrollTo('writing')" class="transition-all duration-200 border border-sky-aqua-200 text-sky-aqua-700 px-6 py-3 rounded-md font-medium text-sm no-underline hover:-translate-y-0.5 hover:border-bright-teal-blue-700">阅读文章</button>
      </div>
    </div>
    <div class="flex justify-center items-center p-2 ">
      <div class="relative w-70 h-70 z-0 bg-white rounded-full overflow-hidden avatar-ring"/>
      <div class="w-68 h-68 overflow-hidden absolute rounded-full"><img src="../assets/images/avatar.jpg" alt="avatar"/></div>
    </div>
  </section>
  <hr class="border-b border-french-blue-400/10 mx-12" />
</template>

<style scoped>
.avatar-ring::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 9999px;
  background: conic-gradient(from 0deg, #0f12f8, #2381fc, #00b4d8, #48cae4, #0f12f8);
  animation: spin 8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>