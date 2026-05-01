<script setup lang="ts">
/**
 * 适配亮色主题说明：
 * 1. 标题由 text-white 改为 text-text-body。
 * 2. 辅助信息由 sky-aqua-700 改为 text-text-muted。
 * 3. 悬停效果：列表项背景微调至 var(--color-surface)，标题高亮至 french-blue-600。
 */
import { reactive } from "vue";

// 模拟数据结构
const articles = reactive([
  {
    id: "1",
    title: "深度探索 Vue 3 组合式 API 的设计哲学",
    category: "Technical",
    readTime: 8,
    date: "2024-03-15"
  },
  {
    id: "2",
    title: "前端工程化：从零构建高效的开发工作流",
    category: "Workflow",
    readTime: 12,
    date: "2024-02-28"
  },
  {
    id: "3",
    title: "响应式设计的未来：容器查询与逻辑属性",
    category: "CSS",
    readTime: 6,
    date: "2024-01-10"
  }
]);

// 模拟 Reveal 效果
const revealClass = "opacity-0 translate-y-6 transition-all duration-700 ease-out";
</script>

<template>
  <!-- Writing Section -->
  <section id="writing" class="max-w-[1100px] mx-auto px-8 md:px-12 py-24 bg-page-bg">
    <!-- Header -->
    <div :class="['p-7 mb-4', revealClass]" style="opacity: 1; transform: translateY(0);">
      <p class="text-turquoise-surf-600 font-xiaowei text-sm p-2 tracking-widest">// WRITING</p>
      <p class="text-text-body font-bold text-4xl">文章</p>
    </div>

    <!-- Article List -->
    <div :class="['flex flex-col p-7', revealClass]" style="opacity: 1; transform: translateY(0);">
      <router-link
          v-for="item in articles"
          :key="item.id"
          :to="`/article/${item.id}`"
          class="flex justify-between items-center group gap-4 py-6 px-4 no-underline border-t border-border/40 transition-all duration-300 hover:bg-surface hover:rounded-xl"
      >
        <div class="flex flex-col gap-1">
          <p class="text-text-body font-semibold text-lg transition-colors group-hover:text-french-blue-600">
            {{ item.title }}
          </p>
          <p class="text-text-muted text-xs font-mono flex items-center gap-2">
            <span class="text-turquoise-surf-600 font-bold uppercase">{{ item.category }}</span>
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
</style>