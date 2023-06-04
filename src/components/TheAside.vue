<script setup>
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import { useCart } from '../stores/cart';
import { useMovieConfiguration } from '../stores/movieConfiguration';

const cart = ref(useCart())

const headerHeight = ref('60px')

const movieConfiguration = useMovieConfiguration()

if(!movieConfiguration.configuration){
  await movieConfiguration.getData()
}

const { configuration } = movieConfiguration
const imagesBasePath = configuration.images.base_url

onMounted(() => {
  const header = document.querySelector('header');
  headerHeight.value = header.offsetHeight;
});

async function removeItemToCart(id){
  await cart.value.removeItem(id)
}
async function removeAllItems(){
  await cart.value.removeAll()
}
</script>

<template>
  <aside class="flex flex-col fixed z-20 right-0 top-0 w-full max-w-sm p-3 bg-white border border-slate-600 top-header-height h-full-header-height overflow-auto" :style="`--headerHeight: ${headerHeight}px`">
    <header class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">Meu Carrinho</h2>
      <button 
        v-if="cart.items.length"
        class="text-lg text-link underline p-2"
        @click="removeAllItems()"
      >
        Esvaziar
      </button>
    </header>
    <template v-if="cart.items.length">
      <ul class="flex-1 space-y-4 mb-6">
        <li v-for="{value: movie} in cart.items" class="flex space-x-4 items-center w-full">
          <img 
            :src="`${imagesBasePath}w45${movie.poster_path}`" 
            alt="Nome do Filme" width="40" height="40" 
            class="flex-0 w-10 h-10 object-cover object-top"
          >
          <span class="flex-1 max-w-full overflow-hidden whitespace-nowrap truncate">{{ movie.title }}</span>
          <span class="flex-0">1</span>
          <span class="flex-0">R$ 79,99</span>
          <button 
            class="flex-0 relative group"
            @click="removeItemToCart(movie.id)"
          >
            <Icon icon="dashicons:trash" class="text-2xl text-slate-600 hover:text-red-600 transition-colors" />
            <span class="
                absolute opacity-0 top-full -right-1 mt-2 pointer-events-none rounded shadow-lg px-4 py-2 bg-slate-600 text-white whitespace-nowrap transition-all group-hover:opacity-100
                before:absolute before:bottom-full before:right-2 before:border-8 before:border-transparent before:border-b-slate-600
              ">
              Remover do carrinho
            </span>
          </button>
        </li>
      </ul>
      <footer>
        <div class="flex items-center justify-between">
          <span class="text-xl">Total:</span>
          <span class="font-bold text-2xl">R$ 19,98</span>
        </div>
        <router-link to="/checkout" class="block text-center rounded w-full px-4 py-2 text-2xl font-semibold text-white leading-relaxed bg-button mt-6 transition-colors hover:bg-violet-900">
          Finalizar compra
        </router-link>
      </footer>
    </template>
    <div v-else>
      Carrinho vazio
    </div>
  </aside>
</template>

<style>
.top-header-height{
  top: var(--headerHeight)
}
.h-full-header-height{
  height: calc(100vh - var(--headerHeight));
}
</style>