<template>
  <div class="q-pa-md">
    <h6>Liste des Articles</h6>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="article in articles" :key="article.id" class="flex items-center justify-center">
        <q-card flat bordered style="width: 100%">
          <div class="col-4 q-pa-xs bg-grey-3">
            <q-img
              :src="article.thumbnailUrl"
              alt="Article Thumbnail"
              style="height: 150px; object-fit: cover;"
            />
          </div>

          <div class="q-mb-lg">
            <q-card-section>
              <div class="text-subtitle1">{{ article.title }}</div>
              <div class="text-caption text-grey">{{ article.body }}</div>

              <q-card-actions align="between" style="height: 10px;">
                <q-btn label="Détail" color="primary" @click="goDetails(article)" />
              </q-card-actions>
            </q-card-section>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
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
      const response = await api.get('/albums/1/photos');

      // Filtrer pour n'avoir que les 10 premiers articles (optional)
      this.articles = response.data.slice(0, 10); // Filter if needed

      console.log(this.articles);
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
      // Handle errors gracefully (e.g., display an error message)
    }
  },
  methods: {
    goDetails(article) {
      // Ici, vous définissez l'action à effectuer lors du clic sur le bouton
      // Par exemple, naviguer vers une nouvelle route et passer l'article
      // en paramètre :
      this.$router.push({
        name: 'article-commentaire', // Assuming a route for article details
        params: { articleId: article.id }, // Pass article ID as a parameter
      });
    }
  }
};
</script>

<style scoped>
.q-pa-md {
  padding: 20px; /* Adjust padding as needed */
}

/* Adapt other styles as needed */
</style>
