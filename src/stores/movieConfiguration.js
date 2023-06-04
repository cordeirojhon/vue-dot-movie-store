import { defineStore } from 'pinia'
import { useFetch } from '../composables/fetch'

export const useMovieConfiguration = defineStore('movie-configuration', {
  state: () => ({
    configuration: null,
    genres: null
  }),
  actions: {
    async getData() {
      const {data: configuration} = await useFetch('https://api.themoviedb.org/3/configuration') 
      const {data: genres} = await useFetch('https://api.themoviedb.org/3/genre/movie/list?language=pt')
      this.configuration = configuration
      this.genres = genres
    }
  }
})