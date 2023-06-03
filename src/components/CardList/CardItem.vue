<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue'
import { useCart } from '../../stores/cart';

const props = defineProps({
  data: Object
});

const { imagesBasePath, movie, release_date, genre } = ref(props.data).value

const cart = useCart()
async function addItemToCart(id){
  await cart.addItem(id)
}

</script>
<template>
  <div class="flex flex-col relative border rounded-b border-slate-600 text-slate-800">
    <button class="absolute top-1 right-1 p-2 z-10 backdrop-blur-sm bg-white/60 rounded-full">
      <Icon icon="mdi:heart" class="text-slate-600 text-3xl transition-colors hover:text-red-500" />
    </button>
    <a href="#" class="flex flex-col flex-1">
      <div class="relative">
        <figure>
          <img :src="`${imagesBasePath}w342${movie.poster_path}`" alt="Product Image Description" width="202" height="303" class="w-full aspect-[2/3] object-cover">
        </figure>
        <time :datetime="movie.release_date" class="absolute bottom-0 left-0 w-full p-2 text-center font-semibold backdrop-blur-sm bg-white/60">
          {{ release_date }}
        </time>
      </div>
      <div class="flex flex-1 flex-col text-center space-y-1 mt-1">
        <h2 class="flex-1 font-bold px-2">{{ movie.title }}</h2>
        <div class="flex gap-4 items-center justify-center m-auto">
          <span class="font-bold">
            <Icon icon="octicon:star-fill-16" class="inline text-xl mr-1" />
            <span class="text-lg align-middle" aria-label="avaliado em 7 de 10 estrelas">{{ Math.round(Number(movie.vote_average)) }}</span>
          </span>
          {{ genre }}
        </div>
        <div>
          R$ 79,99
        </div>
      </div>
    </a>
    <button 
      class="rounded w-full px-4 py-2 text-white bg-button mt-3 transition-colors hover:bg-violet-900"
      @click="addItemToCart(movie.id)"
    >
      Adicionar
    </button>
  </div>
</template>