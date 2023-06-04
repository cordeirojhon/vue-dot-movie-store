<script setup>
import { ref, onMounted } from 'vue'
import { useMovieConfiguration } from '../../stores/movieConfiguration'
import { useFetch } from '../../composables/fetch'
import CardItem from './CardItem.vue'
import useDataFormat from '../../composables/dateFormat'

const movieConfiguration = useMovieConfiguration()

const results = ref(null)
const imagesBasePath = ref(null)

onMounted(async () => {
  if(!movieConfiguration.configuration){
    await movieConfiguration.getData()
  }

  const { data } = await useFetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR')
  results.value = data.value.results;
  imagesBasePath.value = movieConfiguration.configuration.images.base_url
})

const { formatDate, formattedDate } = useDataFormat()

function getFormattedDate(dateString) {
  formatDate(dateString)
  return formattedDate.value
}

function getGenre(id) {
  return movieConfiguration.genres.genres.find(genre => genre.id === id).name
}
</script>

<template>
  <div v-if="results" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-16">
    <template v-for="movie in results" :key="movie.id">
      <CardItem :data="{ 
        movie, 
        release_date: getFormattedDate(movie.release_date), 
        genre: getGenre(movie.genre_ids[0]), 
        imagesBasePath 
      }" />
    </template>
  </div>
</template>
