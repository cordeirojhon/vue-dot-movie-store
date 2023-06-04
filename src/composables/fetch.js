import { ref } from 'vue'
const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
}
const cache = {}

export async function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  if (cache[url]) {
    data.value = cache[url]
  } else {
    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        data.value = json
        cache[url] = json
      })
      .catch((err) => (error.value = err))
  }

  return { data, error }
}
