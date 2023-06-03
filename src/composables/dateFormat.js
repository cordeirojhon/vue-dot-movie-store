import { ref } from 'vue'

export default function useDateFormat() {
  const formattedDate = ref('')

  function formatDate(dateString) {
    const date = new Date(dateString)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    formattedDate.value = date.toLocaleDateString('pt-BR', options)
  }


  return { formattedDate, formatDate }
}
