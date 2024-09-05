<template>
  <q-page padding>
    <div class="row justify-center q-gutter-md">
      <div class="col-md-6" >
        <img   src="../assets/CoWorking3-2.webp" alt="Calendar" class="rounded-borders" style=" width: 400px;
  height: 380px;">
      </div>
      <div class="col-md-6">
        <h1 class="text-h3">Manage your work easily</h1>
        <p style="top: 10px">
          Stop juggling multiple tasks and start working smarter. Our management application is your solution for better organization.
        </p>

        <q-btn color="primary" label="Get Started" @click="start" no-caps style="width: 270px; background: #144899; color: white; border-radius: 30px; left: 40px"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  methods: {
    start() {
      this.$router.push('/home');
    }
  }
}
</script>
