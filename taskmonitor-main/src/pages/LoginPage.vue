<template>
  <q-page class="sign-in-page">
    <div class="background">



      <div class="overlay">
        <div class="" style="">


          <div class="row justify-center items-center q-pa-sm" style="position: relative; top:40px; width: 700px">
            <q-card  flat style="width: 390px; height: 426px; position: relative; top: 80px; border-radius: 30px 30px 0px 0px">
              <q-card-section class="text-center buttom-center q-pt-xs" style="top: -25px; height: 100px; padding-top: 1px; background: linear-gradient(
                      to bottom left,#144899 ,#ed6e08 );">

                <q-card-section style="left: 120px">
                <div  style="background: white;border-radius: 30px; width: 90px; position: absolute; top: 30px">
                  <q-avatar size="80px" style="padding-top: 30px;top: -30px " >
                    <img src="../assets/task-monitor.png" />
                  </q-avatar>
                </div>
                </q-card-section>
                <div class="" style="">
                <h6 class=" wrapper" style="padding-top: 50px; padding-right: 20px">CONNEXION</h6>   </div>
              </q-card-section>

              <q-banner rounded class="bg-red-8 text-white" v-if="isError">
                Veuillez remplir tous les champs
              </q-banner>
              <q-card-section class="q-pa-sm" style="padding-top: 30px;">
                <q-input  class="q-px-md"

                  v-model="email" label="Email" required   :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Email must be valid']">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
                </q-input>


                <q-input class="q-px-md"
                  v-model="password"  label="Mot de passe"
                          :type="isPwd ? 'password' : 'text'"
                          hint=""
                          required  >
                  <template v-slot:prepend>
                    <q-icon name="lock" />
                  </template>

                  <template v-slot:append>
                    <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                            class="cursor-pointer"
                            @click="isPwd = !isPwd" />
                  </template>
                </q-input>
              </q-card-section>
              <div class="q-pt-xs"  style=" position: relative; top: -20px;">
                <q-checkbox v-model="rememberMe" label="Se souvenir de moi" />
                <q-card-section class="q-pa-sm text-center" style="position: relative;top: -40px; left: 100px">
                  <router-link :to="{ path: '/motPasse' }">Mot de passe oublié ?</router-link>
                </q-card-section>
                <q-card-section class="q-pl-lg" style="padding-left: 40px; position: absolute; top: 50px; left: 22px; ">
                  <q-btn icon="login"   label="Login" @click="connexion()" style="width: 270px; background: #144899; color: white; border-radius: 30px" />
                </q-card-section>

                <div class="signUp-link"> <p>

                  Vous n'avez pas de compte ?
                  <router-link :to="{ path: '/register' }">S'inscrire</router-link>

                </p>

                </div>
              </div>


            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
//import { login } from 'src/services/apiMethodes';

export default {
  data(){
    return{
      email: ref('anonmarieaxelle@gmail.com'),
      password: ref('123456'),
      rememberMe: false,
      isPwd: true
    }
  },
  methods: {

    goTo(route) {
      this.$router.push(route);
    },
    connexion() {
      // Vérifier que l'email et le mot de passe ne sont pas nuls
      if (!this.email || !this.password) {
        console.log("Email ou mot de passe null");
        return; // Arrêter l'exécution si les champs sont vides
      }

      // Préparer les données à envoyer par API
      let datas = {
        email: this.email,
        password: this.password
      };

      // Appel de votre API avec Axios
      this.$api.post('/login', datas)
        .then((response) => {
          console.log(response); // Afficher la réponse du serveur pour vérification

          // Vérifier si la réponse est conforme aux attentes
          let tabcode = [200, 201, 202, 204];
          if (tabcode.includes(response.status)) {
            this.goTo('/getP'); // Rediriger vers la page d'accueil après connexion réussie
          } else {
            alert('Accès incorrect');
          }
        })
        .catch((error) => {
          console.error('Erreur lors de la connexion :', error); // Afficher l'erreur détaillée dans la console
          alert('Une erreur est survenue lors de la connexion.'); // Afficher un message d'erreur générique à l'utilisateur
        });
    }
    },
    goTo(route){
      this.$router.push(route)
    },
    back() {
      // Méthode pour revenir à la page précédente
      this.$router.go(-1);
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');





.overlay {


  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 100vw;  /* Prendre toute la largeur de la fenêtre */
  position: fixed; /* Fixer l'image, même lors du défilement */
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}





.signUp-link{
  color: darkgrey;
  position: relative;
  top: 35px;
  left: 80px;
}
.wrapper{



  }






</style>
