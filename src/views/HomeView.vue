<script setup>
import CardList from '../components/CardList/CardList.vue'
import TheAside from '../components/TheAside.vue';

const props = defineProps({
  toggleAsideActivation: Boolean
});
</script>

<template>
  <div>
    <Suspense>
      <TheAside v-show="toggleAsideActivation" />
    </Suspense>
    <div class="container max-w-screen-lg m-auto px-2 py-12">
      <Suspense>
        <CardList />
      </Suspense>
    </div>
  </div>
</template>
