<script setup lang="ts">

import {useReveal} from "@/composables/useReveal.ts";
import {getProjects} from "@/composables/useJson.ts";
const projects = getProjects();

const revealClass = "opacity-0 translate-y-6 transition-all duration-700 ease-out";
useReveal()
</script>

<template>
  <section id="project" class="max-w-275 mx-auto px-8 md:px-12 py-24 bg-page-bg">
    <!-- Header -->
    <div data-reveal :class="['p-7 mb-4', revealClass]">
      <p class="text-turquoise-surf-500 font-xiaowei text-sm p-2 tracking-widest">// PROJECTS</p>
      <p class="text-text-body font-bold text-4xl">项目实践</p>
    </div>

    <!-- Project Grid -->
    <div data-reveal :class="['grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-7', revealClass]">
      <div
          v-for="item in projects"
          :key="item.id"
          class="project_card group"
      >
        <div class="card_content h-full flex flex-col gap-4">
          <!-- Type Tag -->
          <span class="inline-block text-french-blue-600 border tracking-[0.08em] bg-turquoise-surf-500/5 border-turquoise-surf-500/20 rounded px-2 py-0.5 text-[0.7rem] uppercase font-mono w-fit">
            {{item.type}}
          </span>

          <p class="text-text-body font-bold text-xl group-hover:text-french-blue-600 transition-colors duration-300">
            {{item.name}}
          </p>
          <p class="text-text-muted font-xiaowei text-sm leading-relaxed">
            {{item.context}}
          </p>

          <!-- Footer -->
          <div class="mt-auto flex justify-between items-center pt-6">
            <div class="flex gap-2 flex-wrap">
              <span
                  v-for="i in item.language"
                  :key="i"
                  class="inline-block font-mono text-[0.65rem] text-french-blue-700 bg-french-blue-500/5 rounded px-2 py-0.5"
              >
                {{i}}
              </span>
            </div>
            <span class="text-xs font-semibold text-french-blue-500 hover:text-turquoise-surf-600 transition-colors cursor-pointer">
              GitHub ↗
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr class="border-b border-border/30 mx-12" />
</template>

<style scoped>
.project_card {
  position: relative;
  background: rgb(255 255 255 / 0.43);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid rgba(202, 240, 248, 0.5); /* border-border */
  overflow: hidden;
  z-index: 1;
}

/* 动态光晕效果 */
.project_card::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.5s;
  z-index: -1;
}

.project_card:hover {
  transform: translateY(-8px);
  background: rgb(255 97 97 / 0);
  box-shadow:
      0 20px 40px -15px rgba(2, 62, 138, 0.08),
      0 0 0 1px rgba(35, 129, 252, 0.1);
}

.project_card:hover::before {
  opacity: 1;
}

/* 底部线条装饰 */
.project_card::after {
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

.project_card:hover::after {
  transform: scaleX(1);
}

.card_content {
  position: relative;
  z-index: 2;
}

/* 简单的 Reveal 占位动画 */
.page-enter {
  animation: slideUp 0.8s ease forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>