import { defineStore } from 'pinia'
import { useFetch } from '../composables/fetch'

export const useCart = defineStore('cart-items', {
  state: () => ({
    items: []
  }),
  actions: {
    async addItem(itemId) {
      if (!this.items.some((item) => item.value.id === itemId)) {
        const {data: item} = await useFetch(`https://api.themoviedb.org/3/movie/${itemId}?language=pt-BR`)
        this.items.push(item)
      }
    },
    async removeItem(itemId) {
      this.items = this.items.filter((item) => item.value.id !== itemId);
    },
    async removeAll() {
      this.items = []
    }
  }
})