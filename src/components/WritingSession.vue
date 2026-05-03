<script setup lang="ts">


import {useReveal} from "@/composables/useReveal.ts";

import {getArticles} from "@/composables/useJson.js";
const articles = getArticles();
useReveal()


// 模拟 Reveal 效果
const revealClass = "opacity-0 translate-y-6 transition-all duration-700 ease-out";
useReveal()
</script>

<template>
  <!-- Writing Section -->
  <section id="writing" class="max-w-275 mx-auto px-8 md:px-12 py-24 bg-page-bg">
    <!-- Header -->
    <div data-reveal :class="['p-7 mb-4', revealClass]">
      <p class="text-turquoise-surf-500 font-xiaowei text-sm p-2 tracking-widest">// WRITING</p>
      <p class="text-text-body font-bold text-4xl">文章</p>
    </div>

    <!-- Article List -->
    <div data-reveal :class="['flex flex-col p-7', revealClass]">
      <router-link
          v-for="item in articles"
          :key="item.id"
          :to="`/article/${item.id}`"
          class="relative article_card flex justify-between items-center group gap-4 py-6 px-4 no-underline border-t border-border/40 transition-all duration-300"
      >
        <div class="flex flex-col gap-1">
          <p class="text-text-body font-semibold text-lg transition-colors group-hover:text-french-blue-600">
            {{ item.title }}
          </p>
          <p class="text-text-muted text-xs font-mono flex items-center gap-2">
            <span class="text-text-muted font-bold uppercase">{{ item.category }}</span>
            <span class="opacity-30">|</span>
            <span>{{ item.readTime }} min read</span>
          </p>
        </div>

        <div class="flex items-center gap-4">
          <p class="text-text-muted text-xs font-mono whitespace-nowrap">{{ item.date }}</p>
          <!-- 箭头指示器 -->
          <svg class="w-4 h-4 text-border group-hover:text-french-blue-400 transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </router-link>
      <!-- 列表底部闭合线 -->
      <div class="border-t border-border/40 w-full"></div>
    </div>
  </section>

  <hr class="border-b border-border/30 mx-12" />
</template>

<style scoped>
/* 移除默认的 RouterLink 样式影响 */
a {
  text-decoration: none;
  color: inherit;
}
.article_card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,
  var(--color-french-blue-500),
  var(--color-turquoise-surf-500)
  );
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.article_card:hover::after {
  transform: scaleX(1);
}
</style>