<template>
  <div class="container">

    <div class="col-auto" style="">
      <q-btn flat round dense icon="chevron_left" @click="back" size="20px" style="right: 340px; position: absolute;top: 10px" />



      <q-card-section class="text-center buttom-center q-pt-xs" style=" position: absolute; top:30px; height: 100px; left: 140px;background: white; border-radius: 56px">
        <q-avatar size="80px" style="padding-top: 8px;" round>
          <img src="../assets/task-monitor.png" />
        </q-avatar>
      </q-card-section>
    </div>

    <h5>Entrez vos identifiants pour générer votre Qrcode !</h5>
    <div class="scan-type">
      <div class="option">
        <input type="radio" id="arrivee" name="scan-type" value="arrivee" v-model="type" checked>
        <label for="arrivee">Arrivée</label>
      </div>
      <div class="option">
        <input type="radio" id="depart" name="scan-type" value="depart">
        <label for="depart">Départ</label>
      </div>
    </div>

    <!-- Champ Email -->
    <div class="form-group">

      <q-input v-model="email" type="email" id="email" label="Email"
               :rules="[val => !!val || 'Champ obligatoire']">
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
      </q-input>
    </div>
    <!-- Champ Mot de passe -->
    <div class="form-group">
      <q-input v-model="password" id="password" label="Mot de passe" :rules="[val => !!val || 'Champ obligatoire']" :type="isPwd ? 'password' : 'text'">
        <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>
    </div>


    <q-btn label="Générer" type="primary" color=primary @click="generateQrCode"  />

  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const back = () => {
      router.go(-1); // Retourner à la page précédente
    };

    return {
      back,
    };
  },

  data() {
    return {
      type: 'arrivee',
      email: '',
      password: '',
      isPwd: true, // Initialiser la visibilité du mot de passe à masqué
    };
  },

  methods: {
    generateQrCode() {
      const info = {
        email: this.email,
        password: this.password,
        type: this.type,
      };

      // Appel de votre API avec Axios
      axios.post('/find-my-qrcode-of-today', info)
        .then((response) => {
          console.log(response); // Afficher la réponse du serveur pour vérification

          // Vérifier si la réponse est conforme aux attentes
          let tabcode = [200, 201, 202, 204];
          if (tabcode.includes(response.status)) {
            this.goTo('/'); // Rediriger vers la page d'accueil après connexion réussie
          } else {
            alert('Accès incorrect');
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la saisie :', error); // Afficher l'erreur détaillée dans la console
          alert('Une erreur est survenue lors de la saisie des informations.'); // Afficher un message d'erreur générique à l'utilisateur
        });
    }
  },
};
</script>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.scan-type {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.option {
  display: flex;
  align-items: center;
}

.form-group {
  margin-bottom: 20px;
}
</style>
