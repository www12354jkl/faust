<script setup lang="ts">

import { useScrollTo } from "@/composables/useScrollTo.ts";

const list = [
  { label: '项目', id: 'project' },
  { label: '文章', id: 'writing' },
  { label: '关于', id: 'about' },
  { label: 'GitHub ↗', url: 'https://github.com/www12354jkl' },
]
</script>

<template>
  <!-- 导航栏 -->
  <nav class="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-6 md:px-12 py-4
              border-b border-border/50 bg-surface/80 backdrop-blur-xl transition-all duration-300">

    <!-- Logo -->
    <div
        @click="useScrollTo('hero')"
        class="text-text-body text-lg font-bold cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-2"
    >
      <span class="w-2 h-2 bg-french-blue-600 rounded-full"></span>
      浮士德
    </div>

    <!-- 导航列表 -->
    <ul class="flex gap-6 md:gap-8 list-none m-0 p-0 items-center">
      <li
          v-for="(item, index) in list"
          :key="index"
          class="text-sm font-medium tracking-widest cursor-pointer transition-all duration-200 group"
      >
        <a
            v-if="item.url"
            :href="item.url"
            target="_blank"
            class="text-french-blue-500 hover:text-french-blue-800 no-underline"
        >
          {{ item.label }}
        </a>
        <span
            v-else
            @click="useScrollTo(item.id!)"
            class="text-french-blue-500 hover:text-french-blue-800 relative"
        >
          {{ item.label }}
          <!-- 悬停下划线动画 -->
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-french-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* 导航栏毛玻璃增强 */
nav {
  box-shadow: 0 4px 30px rgba(202, 240, 248, 0.1);
}
</style>