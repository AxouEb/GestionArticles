<template>
  <div>
    <h1>Liste des Articles</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from 'boot/axios'; // Importer l'instance Axios configurée

export default {
  name: 'ListeArticle',
  data() {
    return {
      articles: [], // Initialisation du tableau des articles
    };
  },
  async mounted() {
    try {
      // Récupérer les articles depuis l'API
      const response = await api.get('/posts'); // Remplace '/posts' par l'endpoint de ton choix
      // Filtrer pour n'avoir que les articles spécifiques que tu veux afficher
      this.articles = response.data.filter(article => article.id <= 6);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  },
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
h2 {
  margin: 0;
  font-size: 1.2em;
}
p {
  margin: 0.5em 0;
}
</style>
