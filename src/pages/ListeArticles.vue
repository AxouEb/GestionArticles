<template>
  <div class="col-sm-6 " style="display: flex; align-items: center;">
    <h6 class="q-pa-md ">Liste des Articles</h6>
    <q-btn class="" label="Créer Article" color="primary" @click="showCreateDialog" />
    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section>
          <q-form @submit="onSubmit">
            <q-input v-model="nomArticle" label="Nom de l'article" />
            <q-input v-model="descriptionArticle" label="Description de l'article" />
            <div class="q-pa-md q-">
              <q-btn label="Enregistrer" type="submit" color="primary"  />
              <q-btn label="Annuler" color="grey" @click="dialog = false" style="margin-left: 10px;" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
  <div class=" row   "  >
    <div v-for="article in articles" :key="article.id"  class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-pa-lg ">
      <q-card
        flat
        bordered
        class=" "

      >
        <div class="col-4 q-pa-xs bg-grey-3"  >
          <q-img
            :src="article.thumbnailUrl"
            alt="Article Thumbnail"

            style="height: 150px; object-fit: cover;"
          ></q-img>
        </div>


        <div class="q-mb-lg"   >

          <q-card-section >
            <div class="text-subtitle1 ellipsis" >{{ article.title }}</div>
            <div class="text-caption text-grey ellipsis-3-lines">{{ article.body }}</div>

            <q-card-actions align="between"  style="height: 10px; ">


              <q-btn label="Détail" color="primary" @click="goDetails(article)"></q-btn>
              <div class="" >
              <q-btn  icon="edit" color="primary" class="q-pl-lg" @click="editArticle(article) "></q-btn>
              <q-btn  style="margin-left: 10px;" icon="delete"  color="negative" @click="deleteArticle(article.id)"></q-btn>
        </div>
            </q-card-actions>

          </q-card-section>

        </div>
      </q-card>


    </div>
  </div>














</template>

<script>
import {ref} from "vue";

import { api } from 'boot/axios'; // Importer l'instance Axios configurée

export default {
  name: 'ListeArticle',
  data() {
    return {
      dialog: false,
      nomArticle: '',
      descriptionArticle: '',
      articleId: null,

      articles: [

      ], // Initialisation du tableau des articles
    };
  },
 async mounted() {
    try {
      const articles = await api.get('/posts');
      this.articles = articles.data; // Filter if needed

    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  },
  methods: {
    showCreateDialog() {
      this.dialog = true
      this.nomArticle = '';
      this.descriptionArticle = '';
      this.articleId = null; // Reset article ID for creation
    },
    async onSubmit() {
      try {
        const response = await api.post('/posts', {
          title: this.nomArticle,
          body: this.descriptionArticle,
          // Add other properties as needed
        });
        console.log(response, 'response of post')

        const newArticle = response.data; // Assuming response contains the created article
        this.articles.unshift(newArticle);
        this.dialog = false; // Close the dialog
        this.message = 'Article créé avec succès!'; // Set success message
        this.nomArticle = ''; // Clear form fields
        this.descriptionArticle = '';
      } catch (error) {
        console.error('Erreur lors de la création de l\'article:', error);
        this.message = 'Une erreur est survenue lors de la création de l\'article.'; // Set error message
      }
    },
    goDetails(article) {
      // Ici, vous définissez l'action à effectuer lors du clic sur le bouton
      // Par exemple, naviguer vers une nouvelle route et passer l'article
      // en paramètre :
      this.$router.push({
        name: 'article-commentaire',  //
        params: { articleId: article.id }  // Pass article ID as a parameter
      });
    },
    async deleteArticle(articleId) {
      try {
        const response = await api.delete(`/posts/${articleId}`);

        console.log(response)


        this.articles = this.articles.filter(article => article.id !== articleId);
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'article:', error);
        // Handle deletion error (e.g., display error message)
      }
    },
    async editArticle(article) {
      // Afficher la boîte de dialogue avec les informations préremplies de l'article
      this.dialog = true;
      this.nomArticle = article.title;
      this.descriptionArticle = article.body;
      this.articleId = article.id; //

      // Modifier le comportement du formulaire pour la mise à jour
      this.onSubmit = async () => {
        try {
          const response = await api.put(`/posts/${this.articleId}`, {
            title: this.nomArticle,
            body: this.descriptionArticle,
            // Add other properties to update if needed
          });

          console.log(response, 'response of put');

          // Mettre à jour l'article dans le tableau local
          const index = this.articles.findIndex(a => a.id === this.articleId);
          this.articles[index] = { ...this.articles[index], ...response.data };

          this.dialog = false;
          this.message = 'Article modifié avec succès!';
          this.nomArticle = '';
          this.descriptionArticle = '';
          this.articleId = null; // Reset article ID after update
        } catch (error) {
          console.error('Erreur lors de la modification de l\'article:', error);
          this.message = 'Une erreur est survenue lors de la modification de l\'article.';
        }
      };
    },
  }
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
