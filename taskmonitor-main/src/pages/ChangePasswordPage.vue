<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page padding class="container">
        <div class="row justify-center items-center q-pa-sm" style="position: relative;">
          <!-- Avatar -->
          <q-card-section style="top: -10px; height: 100px; padding-top: 1px; position: absolute; top: 30px">
            <q-avatar size="80px" style="padding-top: 30px;" rounded>
              <img src="../assets/TOOCEKA.jpeg" />
            </q-avatar>
          </q-card-section>

          <!-- New Password -->
          <q-card bordered style="width: 260px; position: relative; top: 150px">
            <q-banner rounded class="bg-red-8 text-white" v-if="isError">
              Veuillez remplir tous les champs
            </q-banner>
            <q-input v-model="new_password" type="password" :dense="dense" label="New Password" required />
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-card>

          <!-- Confirm Password -->
          <q-card bordered style="width: 260px; position: relative; top: 150px">
            <q-banner rounded class="bg-red-8 text-white" v-if="isError">
              Veuillez remplir tous les champs
            </q-banner>
            <q-card-section class="q-pa-sm" style="padding-top: 30px;">
              <q-input v-model="current_password" label="Current Password" :dense="dense" :type="isPwd ? 'password' : 'text'" hint="" required />
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-card-section>

            <!-- Reset Password Button -->
            <q-card-section class="q-pl-lg">
              <q-btn color="primary" label="Reset Password" @click="handleResetPassword" style="width: 170px;" />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { resetPassword } from 'src/services/apiMethodes';

export default {
  setup() {
    const new_password = ref('');
    const current_password = ref('');
    const isPwd = ref(true);
    const isError = ref(false);
    const router = useRouter();
    const dense = ref(true);

    const handleResetPassword = async () => {
      if (!current_password.value || !new_password.value) {
        isError.value = true;
        return;
      }

      try {
        const response = await resetPassword({ nouveauPass: new_password.value, acteulPass: current_password.value });
        console.log('Response:', response);
        router.push('/hp'); // Redirect to home page after successful reset
      } catch (error) {
        console.error('Reset Password failed:', error.response ? error.response.data : error.message);
        isError.value = true;
        setTimeout(() => {
          isError.value = false;
        }, 2000);
      }
    };

    return { new_password, current_password, isPwd, isError, router, dense, handleResetPassword };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.container {
  background-image: url(../assets/visual.jpeg);
  background-size: cover;
  background-position: center;
  padding-top: 50px;
}
</style>
