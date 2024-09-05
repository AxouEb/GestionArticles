<template>
  <q-page class="sign-in-page">
    <div class="background">
      <div class="overlay">
        <div class="" style="">

          <q-card-section class="text-center buttom-center q-pt-xs" style=" top: 45px; height: 100px;position: absolute; left: 148px;background: white; border-radius: 56px">
            <q-avatar size="80px" style="padding-top: 8px;" round>
              <img src="../assets/task-monitor.png" />
            </q-avatar>
          </q-card-section>
        </div>

        <div class="text-container">
          <h1><strong> Welcome to Taskmonitor </strong></h1>
          <q-btn rounded  class="sign-in-btn" label="Sign in" @click="signIn" flat />
          <q-btn class="create-account-btn" label="Create an account" @click="createAccount" flat />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SignInPage',
  methods: {
    signIn() {
      this.$router.push('/login');
    },

    createAccount() {
      this.$router.push('/register');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.sign-in-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.background {
  background-image: url('../assets/taskP.jpg'); /* Update this path as necessary */
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: relative;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  text-align: center;
  color: white;

}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.sign-in-btn, .create-account-btn {
  width: 200px;
  margin: 10px 0;
}

.sign-in-btn {
  background: #144899;
  position: relative;
  top: 150px;
  //background-color: transparent !important;
  border: 2px solid #144899;
  color: white;
  font-weight: bold;
  border-radius: 20px;
}

.create-account-btn {
  border: 2px solid #144899;
  position: relative;
  top: 160px;
  color: white;
  background-color: transparent !important;
  border-radius:20px ;

}
</style>
