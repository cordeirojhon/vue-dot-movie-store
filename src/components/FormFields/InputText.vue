<script setup>
defineProps({
  type: String,
  default: 'text'
});
</script>
<template>
  <input :type="type" 
    id="pesquisar" 
    name="q" 
    placeholder="Pesquisar"
    class="appearance-none border-2 rounded border-slate-300 w-full py-3 px-3 text-gray-700 leading-tight max-w-md focus:outline-none focus:shadow-outline" 
  >
</template>