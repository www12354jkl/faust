<script setup lang="ts">
import { useScrollTo} from "@/composables/useScrollTo.ts";

const list = [
  {label: '项目',id:'project'},
  {label: '文章',id:'writing'},
  {label: '关于',id:'about'},
  {label: 'GitHub↗',url:'https://github.com/your-username'},
]

</script>

<template>
  <!-- nav -->
  <nav class="fixed top-0 inset-x-0 z-40 flex justify-between items-center px-12 py-5
              border-b border-french-blue-400/10 bg-deep-twilight-200/70 backdrop-blur-xl">
    <text class="text-white text-center font-bold">浮士德</text>
    <ul class="flex gap-8 list-none m-0 p-0" >
      <li class="text-sm text-sky-aqua-700 no-underline tracking-widest cursor-pointer transition-colors hover:text-light-cyan-900" v-for="(item, index) in list" :key="index">
        <a v-if="item.url" :href="item.url" target="_blank">{{item.label}}</a>
        <span v-else @click="useScrollTo(item.id!)">{{item.label}}</span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>