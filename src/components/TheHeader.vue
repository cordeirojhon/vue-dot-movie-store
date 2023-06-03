<script setup>
import InputSearch from './FormFields/InputSearch.vue'
import { Icon } from '@iconify/vue';
</script>

<template>
  <header class="w-full bg-header">
    <div class="container m-auto p-2">
      <div class="flex justify-between items-center w-full">
        <h1 className="text-3xl font-black text-white">
          LOGO
        </h1>
        <form action="/busca">
          <InputSearch class="w-96" />
        </form>
        <div class="flex gap-6 justify-center items-center">
          <Icon icon="mdi:heart" class="text-white text-3xl" />
          <button class="relative">
            <span class="flex absolute bottom-full left-full -translate-x-1/2 translate-y-1/2 rounded-full aspect-square bg-cartIcon">
              <span class="flex justify-center items-center text-sm text-slate-900 leading-none p-2">2</span>
            </span>
            <Icon icon="el:shopping-cart" class="text-white text-3xl" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>