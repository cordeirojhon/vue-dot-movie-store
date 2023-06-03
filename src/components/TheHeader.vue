<script setup>
import { ref, defineEmits } from 'vue';
import InputSearch from './FormFields/InputSearch.vue';
import { Icon } from '@iconify/vue';
import { useCart } from '../stores/cart';

const cart = ref(useCart());

defineEmits(['clickEvent']);

</script>

<template>
  <header class="sticky top-0 left-0 z-20 w-full bg-header">
    <div class="container max-w-screen-xl m-auto p-2">
      <div class="flex justify-between items-center w-full gap-6 px-3 sm:px-0">
        <router-link to="/">
          <h1 id="mainTitle" className="text-3xl font-black text-white">
            LOGO
          </h1>
        </router-link>
        <form action="/busca">
          <InputSearch class="w-14 sm:w-96" />
        </form>
        <div class="flex gap-6 justify-center items-center">
          <Icon icon="mdi:heart" class="text-white text-3xl" />
          <button 
            class="relative"
            @click="$emit('clickEvent')"
          >
            <Transition>
              <span 
                v-show="cart.items.length" 
                class="flex absolute -top-2 -right-3 rounded-full aspect-square bg-button"
              >
                <span class="flex justify-center items-center text-sm text-white leading-none p-2">{{ cart.items.length }}</span>
              </span>
            </Transition>
            <Icon icon="el:shopping-cart" class="text-white text-3xl" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.v-enter-active {
  animation: bounce-in 0.5s;
}
.v-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    @apply bg-cartIcon;
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
    @apply bg-button;
  }
}
</style>