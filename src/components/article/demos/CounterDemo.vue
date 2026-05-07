<script setup lang="ts">
import { ref, computed } from 'vue'
import { Plus, Minus, RotateCcw, Zap } from 'lucide-vue-next'

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value > 0 && count.value--
const reset = () => count.value = 0

const isDoubleDigit = computed(() => count.value >= 10)
</script>

<template>
  <div class="flex flex-col items-center p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-inner">
    <!-- 状态显示区 -->
    <div class="relative mb-8">
      <div
          class="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 transition-all duration-500"
          :class="isDoubleDigit ? 'border-orange-400 scale-110' : 'border-french-blue-500'"
      >
        <span class="text-4xl font-black font-mono text-slate-800">
          {{ count }}
        </span>
      </div>

      <!-- 达到特定数值的徽章 -->
      <div v-if="isDoubleDigit"
           class="absolute -top-2 -right-2 bg-orange-500 text-white p-1.5 rounded-full animate-bounce">
        <Zap class="w-4 h-4 fill-current" />
      </div>
    </div>

    <!-- 交互控制区 -->
    <div class="flex gap-4">
      <button @click="decrement"
              class="p-3 bg-white hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl border border-slate-200 transition-all active:scale-90">
        <Minus class="w-5 h-5" />
      </button>

      <button @click="reset"
              class="p-3 bg-white hover:bg-slate-100 text-slate-400 hover:text-slate-600 rounded-xl border border-slate-200 transition-all active:scale-90">
        <RotateCcw class="w-5 h-5" />
      </button>

      <button @click="increment"
              class="p-3 bg-french-blue-600 hover:bg-french-blue-700 text-white rounded-xl shadow-lg shadow-french-blue-200 transition-all active:scale-90">
        <Plus class="w-5 h-5" />
      </button>
    </div>

    <p class="mt-6 text-slate-400 text-xs font-medium uppercase tracking-widest">
      {{ isDoubleDigit ? 'Level Up!' : 'Keep Clicking' }}
    </p>
  </div>
</template>