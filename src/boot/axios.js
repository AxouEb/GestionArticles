import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Créez une instance d'Axios avec une configuration par défaut
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',

})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ ceci permettra d'utiliser this.$axios (pour les requêtes générales)
  app.config.globalProperties.$api = api
  // ^ ^ ^ ceci permettra d'utiliser this.$api (pour les requêtes à votre API avec une configuration prédéfinie)
})

export { api }
