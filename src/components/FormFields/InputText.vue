<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  labelVisible: {
    type: Boolean,
    default: true
  }
});
</script>
<template>
  <label v-show="labelVisible" :for="id">{{ label }}: </label>
  <input 
    :type="type" 
    :id="id" 
    :name="name" 
    :placeholder="placeholder"
    class="appearance-none border-2 rounded border-slate-300 w-full py-3 px-3 text-gray-700 leading-tight max-w-md focus:outline-none focus:shadow-outline" 
  >
</template>