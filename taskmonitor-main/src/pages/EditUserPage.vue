<template>
  <q-page padding class="container">

    <div class="background">

    <div class="row" style="position: relative; top: -20px;">
      <q-btn
        dense
        icon="chevron_left"

        style="height: 20px; width: 18px;"
        @click="back"
        size="22px"
      />
    </div>

    <q-card class="my-card" style="border-radius: 30px 0px 30px 0px;top: 40px; width: 380px" >
      <div class="row items-center justify-center">
        <q-card-section class="text-center buttom-center q-pt-xs"  style="top: -65px; height: 100px; padding-top: 1px;  ">
          <div class="q-pa-md">
            <q-avatar size="130px" style="padding-top:1px;" round  >
              <img :src="photoProfil" alt="Photo de Profil" style=""  />
            </q-avatar>
            <q-btn @click="déclencherTéléchargementFichier" label="" icon="add_a_photo" size="10px" round style="top: 35px; right: 20px ; background:#144899; color: white " />
            <input type="file" ref="inputFichier" @change="surChangementDeFichier" style="display: none;" />
          </div>
        </q-card-section>

      </div>

        <q-avatar size="100px" class="rounded-borders" >
          <q-icon name="person" color="white" size="lg" />
        </q-avatar>


      <div style="position: absolute; top: 55px;left: 10px">
        <q-card-section style="top: 20px; margin-right: 225px;">
          <div class="text-h6">Edit Profile</div>
          <div style="position: relative; top: 15px; right: 50px">
            <q-btn no-caps push  label="Modify password" class="q-ml-xl"  style="border-radius: 6px;width: 150px; height: 10px;size: 5px;background: #144899; color: white;"  @click="modifyPassword"/>

          </div>
        </q-card-section>
        <q-form class="q-mt-xs">
          <q-card-section>
            <span class="text-grey">Username</span>
            <q-input v-model="username"
                     outlined
                     label="Username"
                     type="text"
                     required
                     style="width: 330px"
            />
          </q-card-section>
          <q-card-section style=" top:-15px;">
            <span class="text-grey">Email</span>
            <q-input v-model="email"
                     outlined
                     label="Email"
                     type="email"
                     required
                     style="width: 330px"
            />
          </q-card-section>

          <q-card-section style=" top:-25px;">
            <span class="text-grey"  >Phone Number</span>
            <q-input v-model="phoneNumber"
                     outlined
                     label="Phone Number"
                     type="tel"
                     required
                     style="width: 330px"
            />
          </q-card-section>

          <!--
          <q-card-section style=" top:-35px;">
            <q-input  v-model="date" mask="date" :rules="['date']"  outlined>
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>



          <q-card-section style=" top:-39px;">
            <q-select outlined v-model="model" label="Gender" :options="options" required />
          </q-card-section> -->

          <div style="position: relative; top: -40px;">
            <q-btn push style="margin-left: 105px; width: 150px; background: #144899; color: white" @click="sauvegarde(username, email, phoneNumber)"
                   type="submit"
                   :loading="submitting"
                   label="Update profile"

                   class="q-mt-md"
            />
          </div>
        </q-form>
      </div>
    </q-card>
    </div>
  </q-page>
</template>



<script>
import {api} from 'src/boot/axios'
import photoProfilInitiale from 'src/assets/AX.jpg';
import { ref } from 'vue'
import { edit } from 'src/services/apiMethodes';
import { useRouter } from 'vue-router';
import {date} from "quasar";
export default {


  setup() {
    const router = useRouter();

    const modifyPassword = () => {
      router.push('/modifyMotPasse');
    };
    const back= () => {
      // Méthode pour revenir à la page précédente
      router.push('/profil');
    };

    return {
      router,
      modifyPassword,
      back,
    };
  },
data() {
  return {

    photoProfil: photoProfilInitiale ,// photo de profil initiale
    username:ref(''),
    email: ref( ''),
    phoneNumber:ref(''),
    submitting: ref(false),
    isError:ref(false),
    model: ref(null),
    options: [
        'Homme', 'Femme'
      ],
  }
},

methods: {
 async sauvegarde(username, email, phoneNumber) {

    const response = await edit(username, email, phoneNumber)
    console.log(response);

},

déclencherTéléchargementFichier() {
      this.$refs.inputFichier.click();
    },
    surChangementDeFichier(event) {
      const fichier = event.target.files[0];
      if (fichier) {
        const lecteur = new FileReader();
        lecteur.onload = (e) => {
          this.photoProfil = e.target.result;
        };
        lecteur.readAsDataURL(fichier);
      }
    },


  }
}

</script>


<!--
<script>
import { ref } from 'vue';
//import { login } from 'src/services/apiMethodes';

export default {
  data(){
    return{
      email: ref('anonmarieaxelle@gmail.com'),
      password: ref('123456'),
      rememberMe: false,
    }
  },
  methods: {
    connexion(){
      //Verifier que l'email et le mot de passe ne sont  pas nuls
      if(!this.email || !this.password){
        console.log("Email ou mot de passe null")
      }else{
        // Envoi des données par API
        let datas = {}
        datas.email = this.email
        datas.password = this.password

        console.log(datas)

        // Appel du fichier boot axios.js identifié par {api}
        this.$api.post('/login', datas).then((response) => {
          // Afficher la réponse du serveur suite à la requête
          console.log(response);

          // Vérifier que le code d'état de la réponse envoyée par le serveur est bel et bien un succès
          let tabcode = [200, 201, 202, 204];
          if (tabcode.includes(response.status)) {
            this.goTo('/home');
          } else {
            alert('Accès incorrect');
          }
        }).catch((error) => {
          console.error(error);
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
}
</script>

-->



<style scoped>



.container{
 background-image: url(../assets/info.jpeg);
background-size: cover;
background-position: center;
  margin: 0; /* Supprime les marges par défaut */
  padding: 0; /* Supprime les padding par défaut  */
  height: 100vh; /* Hauteur à 100% de la hauteur de la fenêtre */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;


}
.text-grey {
  color: grey;
}
.my-card{
  position: relative;
top: 50px;
  height: 510px;


}
</style>
