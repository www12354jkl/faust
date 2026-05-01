<script setup lang="ts">

import { ref } from 'vue';

// 模拟 composable
const useScrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
  <!-- Hero Section -->
  <section id="hero" class="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center px-8 md:px-12 pt-32 pb-16 overflow-hidden bg-page-bg page-enter">

    <!-- Left Content -->
    <div class="max-w-xl p-2 gap-6 flex flex-col mx-auto z-10">
      <p class="text-turquoise-surf-500 font-xiaowei text-sm p-2 tracking-widest">// HELLO, WORLD</p>

      <h1 class="font-display font-extrabold leading-[0.95] tracking-[-0.04em] text-deep-twilight-500 mb-6 text-[clamp(3.5rem,7vw,5.5rem)]">
        浮士德
        <span class="block font-xiaowei gradient-text-bright">Faust</span>
      </h1>

      <p class="text-text-muted font-light mb-2 text-lg">
        写代码，做项目，记录技术上的思考与实践。
      </p>

      <div class="flex flex-wrap gap-4 items-center">
        <!-- Primary Action -->
        <button
            @click="useScrollTo('project')"
            class="transition-all duration-300 bg-french-blue-500 text-white px-8 py-3 rounded-lg font-medium text-sm shadow-lg shadow-french-blue-500/20 hover:bg-french-blue-600 hover:-translate-y-1 active:translate-y-0"
        >
          查看项目
        </button>

        <!-- Secondary Action -->
        <button
            @click="useScrollTo('writing')"
            class="transition-all duration-300 border-2 border-sky-aqua-300 text-french-blue-500 px-8 py-3 rounded-lg font-medium text-sm hover:bg-sky-aqua-400 hover:border-sky-aqua-400 hover:-translate-y-1 active:translate-y-0"
        >
          阅读文章
        </button>
      </div>
    </div>

    <!-- Right Media (Avatar) -->
    <div class="flex justify-center items-center p-2 relative">
      <!-- Background Decorative Element -->
      <div class="absolute w-96 h-96 bg-light-cyan-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div class="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <!-- Animated Ring -->
        <div class="absolute inset-0 rounded-full avatar-ring-bright"></div>

        <!-- Avatar Container -->
        <div class="w-[calc(100%-8px)] h-[calc(100%-8px)] overflow-hidden rounded-full border-4 border-page-bg z-10 bg-surface">
          <img
              src="../assets/images/avatar.jpg"
              alt="avatar"
              class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>

  <hr class="border-b border-border/50 mx-12" />
</template>

<style scoped>
/* 亮色模式下的文字渐变 */
.gradient-text-bright {
  background: linear-gradient(135deg, var(--color-deep-twilight-500) 0%, var(--color-turquoise-surf-500) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 适配亮色背景的旋转圆环 */
.avatar-ring-bright {
  position: absolute;
  background: conic-gradient(
      from 0deg,
      var(--color-deep-twilight-700),
      var(--color-french-blue-500),
      var(--color-turquoise-surf-500),
      var(--color-sky-aqua-400),
      var(--color-deep-twilight-700)
  );
  animation: spin 6s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 页面进入动画 */
.page-enter {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>