<template>
  <q-page padding>
    <div class="row justify-between q-gutter-sm" style="position: relative;top: 0px">
      <div class="col-auto" style="">
        <q-btn flat round dense icon="chevron_left" @click="back" size="20px" />
      </div>
        <h5 style="padding-right: 30px; padding-top: 10px" > <strong> Settings </strong> </h5>
      <div class="col-auto">
        <q-btn flat round dense icon="more_vert" @click="showOptions"  style="top: 10px"/>
      </div>
    </div>



      <div class="row items-center justify-center" style="position: relative; top: 10px">
        <q-card-section class="text-center buttom-center q-pt-xs"  style="top: -65px; height: 100px; padding-top: 1px;  ">
          <div class="q-pa-md">
            <q-avatar size="100px" style="padding-top:1px;" round  >
              <img src="../assets/AX.jpg"

              />
            </q-avatar>
            <div class="col">
              <div class="text-h5"><strong>
                Marie Axelle
              </strong></div>
              <div class="text-subtitle1">anonmarie1412@gmailcom</div>
            </div>

          </div>
        </q-card-section>





      <div style="position: relative; top: 15px; right: 20px">
        <q-btn push  label="Edit Profile" class="q-ml-xl"  style="border-radius: 6px; height: 10px;size: 20px;font-size: 10px;background: #144899; color: white;"  @click="goToEditProfile"/>

      </div>
    </div>

    <div class="" style="position: relative; top: 60px">
    <q-list >
      <q-card flat bordered style=" border-radius: 20px; background: #e9ecef  ">
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="favorite" color="negative" />
        </q-item-section>
        <q-item-section>Favoris</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="download" color="primary" />
        </q-item-section>
        <q-item-section>Téléchargements</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      </q-card>


      <q-card flat bordered style=" border-radius: 20px; position: relative; top: 20px; background: #e9ecef ">

      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="language" color="warning"/>
        </q-item-section>
        <q-item-section>langages</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="location_on" color="info" />
        </q-item-section>
        <q-item-section>Localisation</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="dark-page" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="play_circle" color="secondary" />
        </q-item-section>
        <q-item-section>Abonnement</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="dark-page" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="desktop_windows" style="background: #e9ecef" />
        </q-item-section>
        <q-item-section>Affichage</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="dark-page" />
        </q-item-section>
      </q-item>
      </q-card>

      <q-card flat bordered style="border-radius: 20px;position: relative; top: 40px; background: #e9ecef  ">

      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="delete"  />
        </q-item-section>
        <q-item-section>Vider le cache</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="dark-page" />
        </q-item-section>
      </q-item>
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="history" color="accent" />
        </q-item-section>
        <q-item-section>Effacer l'historique</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"  color="dark-page" />
        </q-item-section>
      </q-item>
      </q-card>
        <q-card flat bordered style="border-radius: 20px; position: relative; top: 60px; background: #e9ecef  ">
      <q-item clickable>
        <q-item-section avatar>
          <q-icon name="exit_to_app" color="primary" />
        </q-item-section>
        <q-item-section>Déconnexion</q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" color="dark-page" />
        </q-item-section>
      </q-item>
      </q-card>

    </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'profilP',
  setup() {
    const router = useRouter()

    const goToEditProfile = () => {
      router.push('/edit_user')
    };
    const back = () => {
      router.push('/home'); //
    };

    return {
      goToEditProfile,
      back
    }
  }
})

</script>


<style scoped>

</style>
