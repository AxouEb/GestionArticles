<template>
  <q-page class="">
    <div class="row justify-center items-center q-pa-sm" >
    <q-card style="width: 300px; height: 200px;position: relative; top: 220px;" >

      <div style="margin-left: 20px; position: relative; top: 14px; ">

        <q-card-title class="text">
          <font color="#144899">
            Mot de passe oublié
          </font>

      </q-card-title>
      <q-card-separator />
        <q-card-actions vertical>
        <q-form @submit="resetPassword">

          <q-input
           id="email" class="form-control" placeholder="user@example.com"
            v-model="email"
            type="email"
            label="Adresse e-mail"
           filled :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Email must be valid']"
          />


          <div style="position: relative; top: 10px; margin-left: 50px;">
          <q-btn
            type="submit"
            color="primary"
            label="reset Password"
          />
        </div>
        </q-form>




      </q-card-actions>
    </div>
    </q-card>
  </div>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    resetPassword() {
      // Appel API pour réinitialiser le mot de passe
      this.$axios.post('/api/reset-password', {
        email: this.email
      })
     .then(response => {
        // Afficher message de succès
        this.$q.notify({
          message: 'Un e-mail de réinitialisation du mot de passe a été envoyé.',
          couleur: 'positive'
        })
      })
     .catch(error => {
        // Afficher message d'erreur
        this.$q.notify({
          message: 'Erreur lors de la réinitialisation du mot de passe.',
          couleur: 'négative'
        })
      })
    }
  }
}


</script>



 <style>

.text{
  color: blue;
}

</style>
