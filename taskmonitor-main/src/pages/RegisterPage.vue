<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="body" >
      <q-page padding class="wrapper">
        <q-banner v-if="isSuccess" class="bg-green text-white">
          Registration successful! You can now login.
        </q-banner>
        <div  style="position: absolute; top: 40px">
          <q-btn  margin-left="20px" @click="back" round
                  style="margin-right: 2px; border: 1px solid #607d8b; background: white; left: 20px ">
            <q-icon name="chevron_left" color="black" size="md" class="q-ml-sm" style="margin-left: 1px;"></q-icon>
          </q-btn>
        </div>
        <div class="q-pa-md" style="max-width: 400px; margin: auto;">
          <q-card flat border style=" margin-top: 80px;">
            <q-card-section class="text-center q-pt-xs">
              <q-avatar size="80px" style="padding-top: 1px;" rounded>
                <img src="../assets/task-monitor.png" alt="Avatar" />
              </q-avatar>
            </q-card-section>
            <div class="text-h6 text-center">
              <font color="#144899">Register</font>
            </div>

            <!-- Error Banner -->
            <q-banner v-if="isError" class="bg-red-8 text-white">
              {{ errorMessage }}
            </q-banner>

            <q-card-section>
              <q-form @submit.prevent="register">
                <q-input v-model="name_u" label="Name" filled :rules="[val => !!val || 'Name is required']" />
                <q-input v-model="email_u" label="Email" type="email" filled :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Email must be valid']" />
                <q-input v-model="password_u" :type="showPassword ? 'text' : 'password'" label="Password" filled :rules="[val => !!val || 'Password is required', val => val.length >= 8 || 'Password must be at least 8 characters']">
                  <template v-slot:append>
                    <q-icon :name="showPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="togglePasswordVisibility" />
                  </template>
                </q-input>
                <q-input v-model="password_confirmation_u" :type="showConfirmPassword ? 'text' : 'password'" label="Confirm Password" filled :rules="[val => !!val || 'Confirm Password is required', val => val === password_u || 'Passwords do not match']">
                  <template v-slot:append>
                    <q-icon :name="showConfirmPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="toggleConfirmPasswordVisibility" />
                  </template>
                </q-input>

                <div class="q-mt-md text-center">

                  <q-btn  label="Register" type="submit" style="background: #144899; color: white;border-radius: 30px; width: 270px; top: -8px" />
                </div>
                <div class="signUp-link"> <p>

                  Already don't have an account ?

                  <router-link :to="{ path: '/login' }" style="color: #ed6e08">Login</router-link>

                </p>

                </div>
              </q-form>
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

export default {
  setup() {

    const name_u = ref('');
    const email_u = ref('');
    const password_u = ref('');
    const password_confirmation_u = ref('');
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const isError = ref(false);
    const isSuccess = ref(false); // Nouvelle donnée réactive pour gérer l'alerte de succès
    const errorMessage = ref('');
    const router = useRouter();

    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    const toggleConfirmPasswordVisibility = () => {
      showConfirmPassword.value = !showConfirmPassword.value;
    };

    const register = async () => {
      isError.value = false;
      isSuccess.value = false; // Réinitialisation de l'alerte de succès
      errorMessage.value = '';

      // Validation
      if (password_u.value !== password_confirmation_u.value) {
        isError.value = true;
        errorMessage.value = 'Passwords do not match.';
        return;
      }

      if (password_u.value.length < 8) {
        isError.value = true;
        errorMessage.value = 'Password must be at least 8 characters long.';
        return;
      }

      try {
        // Example of registration API call (replace with actual API function)
        // const response = await registerUser(name_u.value, email_u.value, password_u.value);
        const response = { status: 200 }; // Simulated response for testing
        console.log('Registration successful:', response);
        isSuccess.value = true; // Déclenche l'alerte de succès
        router.push('/home'); // Redirect after successful registration
      } catch (error) {
        isError.value = true;
        errorMessage.value = error.message || 'Registration failed. Please try again.';
        if (error.response && error.response.data) {
          errorMessage.value += ` ${error.response.data.message || ''}`;
        }
      }
    };


    const back = () => {
      router.go(-1); // Assurez-vous que router est défini correctement ici
    };
    return {
      name_u,
      email_u,
      password_u,
      password_confirmation_u,
      showPassword,
      showConfirmPassword,
      isError,
      isSuccess,
      errorMessage,
      togglePasswordVisibility,
      toggleConfirmPasswordVisibility,
      register,
      back,
    };
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


.q-card {
  max-width: 500px;
  margin: 20px auto;
}
.signUp-link{
  color: darkgrey;
  position: relative;
  top: 15px;
  left: 50px;
}

.body{
  background-image: url('../assets/taskP.jpg'); /* Update this path as necessary */
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: relative;
  justify-content: center;

}
</style>
