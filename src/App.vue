<script setup>
import { ref, onBeforeMount } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheAside from './components/TheAside.vue';

const toggleAsideActivation = ref(false)

const toggleAsideCart = () => {
  toggleAsideActivation.value = !toggleAsideActivation.value
};

</script>

<template>
  <main aria-labelledby="mainTitle">
    <TheHeader @clickEvent="toggleAsideCart()" />
    <section>
      <Transition>
        <TheAside v-show="toggleAsideActivation" />
      </Transition>
      <div class="container max-w-screen-lg m-auto px-2 py-12">
        <RouterView />
      </div>
    </section>
  </main>
</template>

<style scoped>
.v-enter-active{
  transition: all 0.1s ease-out;
}
.v-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
</style>