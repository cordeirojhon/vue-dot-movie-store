<script setup>
import InputText from './InputText.vue'
import { Icon } from '@iconify/vue';
</script>
<template>
  <div class="relative">
    <InputText type="search" class="pr-12" />
    <span class="flex justify-center items-center absolute right-0 top-0 h-full aspect-square overflow-hidden">
      <Icon icon="ic:outline-search" class="text-3xl text-slate-600 pointer-events-none" />
      <input type="submit" value="pesquisar" class="absolute opacity-0 top-0 left-0 w-full h-full cursor-pointer">
    </span>
  </div>
</template>