<template>
  <h6>Liste des Articles</h6>
  <div class="row no-wrap items-start" >
    <div v-for="article in articles" :key="article.id" class="flex items-start">
      <q-card
        flat
        bordered
        class="q-col-gutter-xs-x-xs"
        style="width: 300px; flex-shrink: 0; margin-right: 16px;"
      >
        <div class="col-4 q-pa-xs bg-grey-3"  >
          <q-img
            :src="imageUrl"

            style="height: 150px; object-fit: cover;"
          ></q-img>
        </div>


        <div class="q-mb-lg"   >

          <q-card-section >
            <div class="text-subtitle1" >{{ article.title }}</div>
            <div class="text-caption text-grey">{{ article.body }}</div>

            <q-card-actions align="between"  style="height: 10px; ">

              <q-btn label="Détail" color="primary" @click="goDetails(article)"></q-btn>
            </q-card-actions>

          </q-card-section>

        </div>
      </q-card>


    </div>
  </div>
  <div class="row no-wrap items-start" >
    <div v-for="article in articles" :key="article.id" class="flex items-start">
      <q-card
        flat
        bordered
        class="q-col-gutter-xs-x-xs"
        style="width: 300px; flex-shrink: 0; margin-right: 16px;"
      >
        <div class="col-4 q-pa-xs bg-grey-3"  >
          <q-img
            :src="image"

            style="height: 150px; object-fit: cover;"
          ></q-img>
        </div>


        <div class="q-mb-lg"   >

          <q-card-section >
            <div class="text-subtitle1" >{{ article.title }}</div>
            <div class="text-caption text-grey">{{ article.body }}</div>

            <q-card-actions align="between"  style="height: 10px; ">

              <q-btn label="Détail" color="primary" @click="goDetails(article)"></q-btn>
            </q-card-actions>

          </q-card-section>

        </div>
      </q-card>


    </div>
  </div>


  <div class="row no-wrap items-start" >
    <div v-for="article in articles" :key="article.id" class="flex items-start">
      <q-card
        flat
        bordered
        class="q-col-gutter-xs-x-xs"
        style="width: 300px; flex-shrink: 0; margin-right: 16px;"
      >
        <div class="col-4 q-pa-xs bg-grey-3"  >
          <q-img
            :src="image"

            style="height: 150px; object-fit: cover;"
          ></q-img>
        </div>


        <div class="q-mb-lg"   >

          <q-card-section >
            <div class="text-subtitle1" >{{ article.title }}</div>
            <div class="text-caption text-grey">{{ article.body }}</div>

            <q-card-actions align="between"  style="height: 10px; ">

              <q-btn label="Détail" color="primary" @click="goDetails(article)"></q-btn>
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

      imageUrl: 'https://fastly.picsum.photos/id/292/200/300.jpg?hmac=zm-TXplXe70N7LGm2HWu9iOPXoBtQvwyhAF2CSj0ccs',


      image: 'https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg'
    ,
      articles: [

      ], // Initialisation du tableau des articles
    };
  },
  async mounted() {
    try {
      // Récupérer les articles depuis l'API
      const response = await api.get('/posts'); // Remplace '/posts' par l'endpoint de ton choix
      // Filtrer pour n'avoir que les articles spécifiques que tu veux afficher
      this.articles = response.data.filter(article => article.id <= 10);

    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  },
  methods: {
    goDetails(article) {
      // Ici, vous définissez l'action à effectuer lors du clic sur le bouton
      // Par exemple, naviguer vers une nouvelle route et passer l'article
      // en paramètre :
      this.$router.push({
        name: 'article-commentaire',  //
        params: { articleId: article.id }  // Pass article ID as a parameter
      });
    }
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
