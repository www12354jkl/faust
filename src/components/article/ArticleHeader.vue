<script setup lang="ts">
import { ChevronLeft, Calendar, LucideClock5, User} from '@lucide/vue'
import {useReveal} from "@/composables/useReveal.ts";
import {useGoBack} from "@/composables/useGoBack.ts";
import {useRoute} from "vue-router";
import {computed} from "vue";
import {useContentStore} from "@/stores/useContentStore.ts";
const route = useRoute()
const contentStore = useContentStore()
const article = computed(() => {
  const id = route.params.id as string;
  return contentStore.getArticleById(id);
})


useReveal()
</script>

<template>
  <header class="mb-16">
    <button @click="useGoBack()" class="flex gap-2 group font-bold items-center mb-12 transition-all text-slate-600 hover:text-blue-600">
      <ChevronLeft class="group-hover:-translate-x-1 transition-all" />
      <span>返回列表</span>
    </button>
    <div data-reveal class="opacity-0 translate-y-6 transition-all duration-600 flex gap-3 mb-6 items-center">
      <p class="bg-cyan-50 px-3 py-1 text-cyan-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-cyan-100">
        {{ article!.category }}</p>
      <div class="bg-slate-200 h-px w-6"></div>
      <p class="flex text-slate-400 items-center gap-1.5 text-xs font-mono">
        <Calendar class="w-3.5 h-3.5"/>
        <span>{{ article!.date }}</span>
      </p>
    </div>
    <h1 data-reveal class="opacity-0 translate-y-6 transition-all duration-600 text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
      {{ article!.title }}</h1>
    <p data-reveal class="opacity-0 translate-y-6 transition-all duration-600 inline-block text-lg italic text-slate-500 leading-relaxed border-l-4 border-cyan-500 pl-6 mb-10 bg-slate-50 py-6 rounded-r-xl">
      {{ article!.summary }}
    </p>
    <div data-reveal class="opacity-0 translate-y-6 transition-all duration-600 flex items-center gap-6 text-xs py-4 tracking-tight border-y border-slate-100 text-slate-400 font-medium">
      <div class="flex items-center gap-1.5">
        <LucideClock5 class="size-4"/>
        <span>{{ article!.readTime }}分钟阅读</span>
      </div>
      <div class="flex items-center gap-1.5">
        <User class="size-4"/>
        <span>浮士德</span>
      </div>
    </div>
  </header>
</template>