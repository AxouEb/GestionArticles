<template>
  <h1>Détails de l'article</h1>
  <div v-if="article">
    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
  </div>
  <div v-else>
    <p>Article introuvable.</p>
  </div>
</template>

<script>
import { api } from 'boot/axios'; // Importer l'instance Axios configurée

export default {
  name: 'ArticleCommentaire',
  props: {
    articleId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      article: null
    };
  },
  async mounted() {
    try {
      // Récupérer l'article depuis l'API
      const response = await api.get(`/posts`);
      this.article = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'article:', error);
    }
  },
};
</script>
<style scoped>
h1 {
  color: #2c3e50;
}
.comment-list {
  list-style-type: none;
  padding: 0;
}
.comment-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.comment-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
h2 {
  margin: 0;
  font-size: 1.2em;
}
p {
  margin: 0.5em 0;
}
</style>
