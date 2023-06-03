<script setup>
import CardList from '../components/CardList/CardList.vue'
</script>

<template>
  <main class="relative">
    <aside class="absolute z-20 right-0 top-0 w-full h-full max-w-xs p-3 bg-white border border-slate-600">
      <header class="flex justify-between mb-6">
        <h2 class="text-xl font-semibold">Meu Carrinho</h2>
        <button class="text-lg text-link underline">Esvaziar</button>
      </header>
      <ul>
        <li class="flex w-full">
          <div class="grid grid-cols-6">
            <img src="https://image.tmdb.org/t/p/w45/rXTqhpkpj6E0YilQ49PK1SSqLhm.jpg" alt="Nome do Filme" width="40" height="40">
            <span>Nome do Filme</span>
            <span>1</span>
            <span>R$ 9,99</span>
          </div>
          <button>DD</button>
        </li>
      </ul>
    </aside>
    <div class="container max-w-screen-lg m-auto px-2 py-12">
      <Suspense>
        <CardList />
      </Suspense>
    </div>
  </main>
</template>
