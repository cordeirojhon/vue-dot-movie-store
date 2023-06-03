<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'

const toggleAsideActivation = ref(false)

const toggleAsideCart = () => {
  toggleAsideActivation.value = !toggleAsideActivation.value
}
</script>

<template>
  <main>
    <TheHeader @clickEvent="toggleAsideCart()" />
    <RouterView :toggleAsideActivation="toggleAsideActivation" />
  </main>
</template>