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
        const {data: configuration, error} = await useFetch('https://api.themoviedb.org/3/configuration')
        if(error.value){
          console.log(error)
          return
        }
        this.configuration = configuration
      }
      if (!this.genres){
        const {data: genres, error} = await useFetch('https://api.themoviedb.org/3/genre/movie/list?language=pt')
        if(error.value){
          console.log(error)
          return
        }
        this.genres = genres
      }
    }
  }
})