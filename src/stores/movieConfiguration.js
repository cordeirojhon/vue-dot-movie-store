import { defineStore } from 'pinia'
import { useFetch } from '../composables/fetch'

export const useMovieConfiguration = defineStore('movie-configuration', {
  state: () => ({
    configuration: null,
    genres: null
  }),
  actions: {
    async getData() {
      if (!this.configuration){
        const {data: configuration} = await useFetch('https://api.themoviedb.org/3/configuration') 
        this.configuration = configuration
      }
      if (!this.genres){
        const {data: genres} = await useFetch('https://api.themoviedb.org/3/genre/movie/list?language=pt')
        this.genres = genres
      }
    }
  }
})