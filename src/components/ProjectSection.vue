<script setup lang="ts">
  import projectData from "@/assets/data/projects.json"
  import { Project } from "@/model/Project.ts"
  import { reactive } from "vue";
  import {useReveal} from "@/composables/useReveal.ts";
  const projects = reactive(projectData.data.map(item => new Project(item)));
  useReveal()
</script>

<template>
  <!--Project-->
  <section id="project" class="max-w-275 mx-auto px-12 py-24">
    <div data-reveal class="opacity-0 translate-y-6 transition-all duration-700 ease-out p-7">
      <p class="text-turquoise-surf-600 font-xiaowei text-sm p-2">//PROJECTS</p>
      <p class="text-white font-bold text-4xl">项目</p>
    </div>
    <div data-reveal class="opacity-0 translate-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-7 transition-all duration-700 ease-out">
      <div class="no-underline rounded-[10px] border border-french-blue-700/15 flex flex-col bg-deep-twilight-300 p-7 gap-2 cursor-pointer transition-all duration-300 hover:border-french-blue-700/40 hover:-translate-y-1 hover:bg-deep-twilight-400  " v-for="item in projects" :key="item.id">
        <span class="inline-block text-turquoise-surf-600 border tracking-[0.08em] bg-turquoise-surf-500/10 border-turquoise-surf-500/20 rounded px-2 py-0.5 text-[0.7rem] mb-4 uppercase font-mono w-fit text-center">{{item.type}}</span>
        <p class="text-white font-bold">{{item.name}}</p>
        <p class="text-turquoise-surf-600 font-xiaowei text-sm">{{item.context}}</p>
        <div class="flex justify-between items-center">
          <div class="flex gap-2 flex-wrap">
            <p class="inline-block font-mono text-[0.68rem] text-french-blue-800 bg-french-blue-700/10 rounded px-1.5 py-0.5 " v-for="i in item.language">{{i}}</p>
          </div>
          <span class="text-xs text-french-blue-700 transition-colors hover:text-turquoise-surf-600 cursor-pointer">GitHub↗</span>
        </div>
      </div>
    </div>
  </section>
  <hr class="border-b border-french-blue-400/10 mx-12" />
</template>

<style scoped>

</style>