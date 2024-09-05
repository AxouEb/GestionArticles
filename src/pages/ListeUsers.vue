<template>
  <div>


    <div class="text-h6">
      <div v-for="user in users" :key="user.id" class="q-mb-md">
        <q-card flat  >
          <q-card-section class="row no-wrap items-center q-py-lg " style="height: 80px"  >

            <q-avatar>
              <img :src="avatar" />
            </q-avatar>
            <div class="col q-ml-sm q-pt-lg-md  " style="color: black;" >


              <div class="text-h6">{{ user.username }}</div>
              <div class="text-subtitle2">{{ user.email }}</div>

              <div class="text-subtitle2">{{ user.phone }}</div>


            </div>
            <div class="text-right" style="color:black ;"  >

            </div>
          </q-card-section>
          <q-separator />
        </q-card>
      </div>
    </div>






  </div>
</template>

<script>
import { api } from 'boot/axios'; // Importer l'instance Axios configurée

export default {
  name: 'ListeUser',
  data() {
    return {
      avatar: 'https://cdn.quasar.dev/img/avatar.png',

      users: [], // Initialisation du tableau des utilisateurs
    };
  },
  async mounted() {
    try {
      // Récupérer tous les utilisateurs depuis l'API
      const response = await api.get('/users'); // Chemin correct pour récupérer les utilisateurs
      // Utiliser .slice pour limiter à 10 utilisateurs
      this.users = response.data.slice(0, 10);

    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);


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
