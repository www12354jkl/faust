<script setup lang="ts">
import {computed, ref} from "vue";

const code = ref("");
const isFocused = ref(false);
const codeArray = computed(() => {
  const arr = code.value.split("");
  while (arr.length < 6) arr.push(""); // 补齐 6 位占位符
  return arr;
});

function handleInput() {
  // 只允许输入数字（如果你的验证码包含字母，可以删掉这行）
  code.value = code.value.replace(/\D/g, '');

  if (code.value.length === 6) {
  }
}
</script>

<template>
  <div class="relative w-80 h-16 mb-5">
    <input
        v-model="code"
        type="text"
        maxlength="6"
        autofocus
        @input="handleInput"
        @focus="isFocused = true"
        @blur="isFocused = false"
        autocomplete="off"
        class="absolute inset-0 w-full h-full opacity-0 cursor-default caret-transparent z-20"
    />
    <div class="absolute inset-0 flex justify-between z-10 pointer-events-none">
      <div
          v-for="(char, index) in codeArray"
          :key="index"
          :class="[
        'w-11 h-14 border-2 rounded-lg flex items-center justify-center text-2xl font-semibold transition-all duration-200',
        // 当前正在输入的格子高亮 (蓝色 #3351c5)
        code.length === index && isFocused ? 'border-tertiary shadow-[0_0_8px_rgba(51,81,197,0.2)]' : 'border-gray-200',
        // 已有内容的格子
        char ? 'border-gray-400 text-gray-900' : 'text-gray-300'
      ]"
      >
        {{ char }}
        <div v-if="code.length === index && isFocused" class="w-0.5 h-6 bg-tertiary animate-pulse"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>