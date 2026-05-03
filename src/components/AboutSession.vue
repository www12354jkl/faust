<script setup lang="ts">
import { useReveal } from "@/composables/useReveal.ts"
const list = ['Vue', 'Spring Boot', 'Mysql', 'Typescript', 'Redis']
useReveal()
</script>

<template>
  <section id="about" class="max-w-275 mx-auto px-12 py-24">
    <div data-reveal class="opacity-0 transition-y-6 transition-all duration-700 ease-out">
      <p class="text-turquoise-surf-500 font-xiaowei text-sm p-2">//About</p>
      <p class="text-cyan-900 font-bold text-4xl mb-12">关于</p>
    </div>

    <div data-reveal class="opacity-0 transition-y-6 transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
      <div class="space-y-4 text-[1.05rem] font-light text-sky-700 leading-[1.8]">
        <p>在这里写写代码，做做项目，顺便记录一些技术上的思考。</p>
        <p>如果你对某个项目感兴趣，欢迎通过 GitHub 联系我。</p>
      </div>
      <div class="space-y-3">
        <div class="flex items-center gap-4" v-for="i in list" :key="i">
          <span class="font-mono text-xs text-frosted-500 w-24 shrink-0">{{ i }}</span>
          <div class="flex-1 h-px bg-french-blue-700/10 rounded overflow-hidden">
            <div data-skill="0.85"
                 class="h-full rounded origin-left scale-x-0 transition-transform duration-900 ease-out"
                 style="background: linear-gradient(90deg, #2381fc, #12d8ff); transform: scaleX(0.85);">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>