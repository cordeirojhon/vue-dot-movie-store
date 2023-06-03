<script setup>
import { useFetch } from '../../composables/fetch'
import CardItem from './CardItem.vue'
import { useMovieConfiguration } from '../../stores/movieConfiguration'
import useDataFormat from '../../composables/dateFormat'

const movieConfiguration = useMovieConfiguration()
await movieConfiguration.getData()
const { configuration, genres } = movieConfiguration
const { data: movieGenres } = genres;

const { data } = await useFetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR')
const { results } = data.value;

const { formatDate, formattedDate } = useDataFormat()

const imagesBasePath = configuration.data.images.base_url

function getFormattedDate(dateString) {
  formatDate(dateString)
  return formattedDate.value
}

function getGenre(id) {
  const { name } = movieGenres.genres.find(genre => genre.id === id)
  return name
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
