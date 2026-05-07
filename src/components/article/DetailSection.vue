<script setup lang="ts">
import {Code,Play} from "@lucide/vue"
import {useRoute, useRouter} from "vue-router";
import {useReveal} from "@/composables/useReveal.ts";
import {useContentStore} from "@/stores/useContentStore.ts";
import {computed, markRaw, reactive} from "vue";
import CounterDemo from "@/components/article/demos/CounterDemo.vue";
import VerifyInputDemo from "@/components/article/demos/VerifyInputDemo.vue";
const route = useRoute()
const router = useRouter()
const contentStore = useContentStore()
const article = computed(() => {
  const id = route.params.id as string;
  return contentStore.getArticleById(id);
})
const componentMap : Record<string, any> = {
  CounterDemo : markRaw(CounterDemo),
  VerifyInputDemo : markRaw(VerifyInputDemo),
}

const toggleDemo = (currentBlock: any) => {
  if(currentBlock.type === 'demo'){
    currentBlock.isRunning = !currentBlock.isRunning;
  }
}
useReveal()
</script>

<template>
  <section class="space-y-12" style="animation-delay: 0.2s">
    <div data-reveal v-for="(block, index) in article!.blocks" :key="index" class="opacity-0 transition-all duration-600 translate-y-6">
      <!--文本块-->
      <div v-if="block.type === 'text'" class="text-lg leading-[1.8] text-slate-700 whitespace-pre-wrap">
        {{block.content}}
      </div>
      <!--代码块-->
      <div v-if="block.type === 'code'" class="group relative">
        <div v-if="block.label || block.lang" class="flex justify-between items-center bg-[#1E1E1E] border-x border-t border-[#333] rounded-t-xl px-4 py-2.5">
          <div class="flex items-center gap-2">
            <Code class="text-slate-500 w-3.5 h-3.5"/>
            <span class="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{{block.label}}</span>
          </div>
          <span class="text-[9px] font-black text-cyan-500 uppercase tracking-widest">{{block.lang}}</span>
        </div>
        <div :class="['bg-[#1E1E1E] p-6 border border-[#333] font-mono text-sm overflow-x-auto shadow-xl',(block.label || block.lang)?'rounded-b-xl':'rounded-xl']">
          <pre class="text-slate-300"><code>{{block.content}}</code></pre>
        </div>
      </div>
      <!--演示块-->
      <div v-else-if="block.type === 'demo'" class="my-16">
        <div v-if="!block.isRunning" class="relative border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center bg-slate-50/50 group hover:border-french-blue-500 transition-colors">
          <div class="absolute -top-3 px-4 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg">
            交互演示
          </div>

          <div class="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
            <Play class="w-6 h-6 text-french-blue-500 fill-current"/>
          </div>

          <h4 class="text-slate-800 font-bold mb-2">{{ block.label || '组件演示' }}</h4>
          <p class="text-slate-400 text-xs font-mono mb-6 bg-white px-3 py-1 rounded-full border border-slate-100">
            标识符: {{ block.component }}
          </p>

          <button @click="toggleDemo(block)" class="px-6 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-all shadow-sm">
            运行组件
          </button>
        </div>
        <div v-else class="relative animate-in fade-in slide-in-from-bottom-4">
          <component :is="componentMap[block.component]" />
        </div>
      </div>
    </div>
  </section>
  <!-- 页脚 -->
  <footer data-reveal class="opacity-0 transition-all duration-600 translate-y-6 mt-32 pt-12 border-t border-slate-100 page-fade-in" style="animation-delay: 0.4s">
    <div class="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden relative">
      <div class="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div class="relative z-10">
        <h3 class="text-white text-2xl md:text-3xl font-bold mb-3">感谢您的阅读</h3>
        <p class="text-slate-400 text-sm md:text-base max-w-md">
          记录技术实现，保持逻辑思考。
        </p>
      </div>
      <button @click="()=>{
        router.push('/')
      }" class="relative z-10 px-10 py-4 bg-cyan-500 text-white rounded-2xl text-sm font-black tracking-widest hover:bg-cyan-400 transition-all active:scale-95">
        返回首页
      </button>
    </div>
  </footer>
</template>

<style scoped>

</style>