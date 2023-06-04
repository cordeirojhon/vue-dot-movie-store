<script setup>
import { ref } from 'vue'
import { useMovieConfiguration } from '../../stores/movieConfiguration'
import { useFetch } from '../../composables/fetch'
import CardItem from './CardItem.vue'
import useDataFormat from '../../composables/dateFormat'

const movieConfiguration = useMovieConfiguration()

if(!movieConfiguration.configuration){
  await movieConfiguration.getData()
}

const { data } = await useFetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR')
const { results } = data.value;

const { formatDate, formattedDate } = useDataFormat()

const imagesBasePath = movieConfiguration.configuration.images.base_url

function getFormattedDate(dateString) {
  formatDate(dateString)
  return formattedDate.value
}

function getGenre(id) {
  return movieConfiguration.genres.genres.find(genre => genre.id === id).name
}
</script>

<template>
  <div v-if="results && movieConfiguration" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-16">
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
