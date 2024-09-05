<template>
  <q-page class="flex flex-center">

    <div class="" style="position: relative; top: 30px">
    <q-card flat class="q-pa-md" style="max-width: 400px;">
      <div class="" style="">

        <q-card-section class="text-center buttom-center q-pt-xs" style=" position: absolute; top:-95px; height: 100px; left: 70px;background: white; border-radius: 56px">
          <q-avatar size="80px" style="padding-top: 8px;" round>
            <img src="../assets/task-monitor.png" />
          </q-avatar>
        </q-card-section>
      </div>
      <div class="text-h5 text-center q-mb-md">Change your password </div>

      <q-form @submit="onSubmit" class="q-gutter-md">


        <q-input
                  :type="isPwd ? 'password' : 'text'"
                  hint=""
                  required
                  v-model="oldPassword"
                  label="Old password"
                  outlin
                  :rules="[val => !!val || 'Champ obligatoire']"
        >
          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd" />
          </template>
        </q-input>



        <q-input
          :type="isPwd ? 'password' : 'text'"
          hint=""
          v-model="newPassword"
          label="New password"
          dense
          outlin
          :rules="[val => !!val || 'Champ obligatoire']"
        >



          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <q-input
          v-model="confirmPassword"
          label="Confirm password"
          :type="isPwd ? 'password' : 'text'"
          dense
          outlin
          :rules="[val => !!val || 'Champ obligatoire', val => val === newPassword || 'Les mots de passe ne correspondent pas']"
        >



          <template v-slot:append>
            <q-icon :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd" />
          </template>
        </q-input>

        <q-btn style="background: #144899; border-radius: 20px"
          type="submit"
          label="Modify"
          color="primary"
          class="full-width"
          :disable="!formValid"
        />
        <q-btn style=" border-radius: 20px"
          label="Cancel"
          color="primary"
          flat
          class="full-width"
          @click="onCancel"
        />
      </q-form>

      <q-separator spaced />


    </q-card>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter()

    const oldPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");

    const formValid = ref(false);
    const isPwd= ref('true');
    const onCancel = () => {

        router.push('/edit_user')

    };

    function onSubmit() {
      // Logique pour soumettre le formulaire
      console.log("Formulaire soumis");
    }

   /* function onCancel() {
      // Logique pour annuler le changement de mot de passe
      console.log("Annulation");
    */



    return {

      oldPassword,
      newPassword,
      confirmPassword,
      formValid,
      onSubmit,

      onCancel,
      isPwd


    };
  }
};
</script>

<style scoped>
.full-width {
  width: 100%;
}
</style>
