<script setup lang="ts">
  import {useReveal} from "@/composables/useReveal.ts";
  import articleData from "@/assets/data/articles.json";
  import {reactive} from "vue";
  import {Article} from "@/model/Article.ts";
  const articles = reactive(articleData.map(item => new Article(item as any)));
  useReveal()
</script>

<template>
  <!-- Writing -->
  <section id="writing" class="max-w-275 mx-auto px-12 py-24">
    <div data-reveal class="opacity-0 translate-y-6 transition-all duration-700 ease-out p-7">
      <p class="text-turquoise-surf-600 font-xiaowei text-sm p-2">//WRITING</p>
      <p class="text-white font-bold text-4xl">文章</p>
    </div>
    <div data-reveal class="opacity-0 translate-y-6 flex flex-col transition-all duration-700 ease-out">
      <RouterLink :to="`/article/${item.id}`" class="flex justify-between items-center group gap-4 py-5 no-underline border-t border-french-blue-700/10" v-for="item in articles" :key="item.id">
        <div class="flex flex-wrap flex-col">
          <p class="text-white font-semibold mb-1 transition-colors group-hover:text-turquoise-surf-600">{{item.title}}</p>
          <p class="text-sky-aqua-700 text-xs font-mono">
            {{item.category}}
            <span class="text-sky-aqua-700"> · </span>
            {{item.readTime}}
            <span class="text-sky-aqua-700"> min read</span>
          </p>
        </div>
        <p class="text-french-blue-800 text-xs whitespace-nowrap font-mono">{{item.date}}</p>
      </RouterLink>
    </div>
  </section>
  <hr class="border-b border-french-blue-400/10 mx-12" />
</template>

<style scoped>

</style>