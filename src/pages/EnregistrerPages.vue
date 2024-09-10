<template>
  <div class="q-pa-md">
    <h6 class="q-pa-md">Enregistrer un Article</h6>

    <q-btn label="Créer" color="primary" @click="showCreateDialog" />

    <q-dialog v-model="showCreateDialog" persistent>
      <div class="q-pa-md">
        <q-input v-model="article.title" label="Titre" required></q-input>
        <q-textarea v-model="article.body" label="Contenu" rows="10" required></q-textarea>

        <q-btn type="submit" color="primary" label="Enregistrer" :loading="isSaving" @click="saveArticle" />
        <q-btn flat label="Annuler" @click="showCreateDialog = false" />
      </div>
    </q-dialog>

    <q-form @submit.prevent="saveArticle">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <q-input v-model="article.title" label="Titre" required disabled /> </div>
        <div class="col-xs-12 col-sm-6">
        </div>
      </div>
      <q-textarea v-model="article.body" label="Contenu" rows="10" required disabled /> <div class="q-pa-sm">
      <q-btn type="submit" color="primary" label="Enregistrer" :loading="isSaving" />
    </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { api } from "boot/axios"; // Import Axios instance

export default {
  name: "EnregistrerPages",
  data() {
    return {
      article: {
        title: "",
        body: "",
        thumbnailUrl: "", // Initial empty thumbnail URL
      },
      thumbnail: null, // Initialize QUploader file object
      isSaving: false, // Flag for button loading state
      showCreateDialog: false, // Flag for dialog visibility
    };
  },
  methods: {

    async saveArticle() {
      this.isSaving = true; // Show loading state on button

      // Handle potential image upload
      if (this.thumbnail) {
        const formData = new FormData();
        formData.append("title", this.article.title);
        formData.append("body", this.article.body);
        formData.append("image", this.thumbnail[0].file);

        // Access QUploader file object

        try {
          const response = await api.post("/posts", formData, {
            headers: {
              "Content-Type": "multipart/form-data", // Set for form data
            },
          });
          console.log("Article enregistré avec succès :", response.data);
          this.$router.push({ name: "ListeArticle" }); // Redirect to list on success
        } catch (error) {
          console.error("Erreur lors de l'enregistrement de l'article :", error);
        }
      } else {
        console.warn("Aucun fichier image n'a été sélectionné.");
      }

      this.isSaving = false; // Reset button loading state
      this.showCreateDialog = false; // Close dialog after saving
    },
  },
};
</script>

<style scoped>
/* Add any specific styling for EnregistrerPages.vue here */
</style>
