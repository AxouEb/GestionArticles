<template>
  <nav class="bottom-nav">
    <q-btn class="nav-item" :class="{ active: currentItem === 'home' }" @click="setCurrentItem('home')">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
      <span>Home</span>
    </q-btn>
    <q-btn class="nav-item" :class="{ active: currentItem === 'calendar' }" @click="setCurrentItem('calendar')">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
      </svg>
      <span>Calendar</span>
    </q-btn>
    <q-btn class="nav-item" :class="{ active: currentItem === 'document' }" @click="setCurrentItem('document')">
      <svg class="icon" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
      </svg>
      <span>Documents</span>
    </q-btn>
    <q-btn class="nav-item" :class="{ active: currentItem === 'settings' }" @click="setCurrentItem('settings')">
      <svg class="icon" viewBox="0 0 24 24">
        <path
          d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
        />
      </svg>
      <span>Settings</span>
    </q-btn>
  </nav>
</template>


import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/settings',
name: 'Settings',
component: Settings
}
]

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

export default router


<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

const currentItem = ref("home");
const router = useRouter();

const setCurrentItem = (id) => {
  currentItem.value = id;
  if (id === "settings") {
    router.push('/profil');
  }
  else if (id === "calendar") {
    router.push('/calendar');
  } else if (id === "home") {
    router.push('/home');
  }


  // Ajoutez ici d'autres navigations si nécessaire
};

const navItems = [
  { id: "home", icon: "icon-home", label: "Home" },
  { id: "calendar", icon: "icon-calendar", label: "Calendar" },
  { id: "document", icon: "icon-document", label: "Documents" },
  { id: "settings", icon: "icon-settings", label: "Settings" },
];

</script>

<!--
<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: white; */
  /* border-radius: 20px 20px 0 0; */
  padding: 10px;
  /* box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.nav-item.active {
  color: #ff6347;
}

/* Remplacez ces classes par vos propres icônes ou une bibliothèque d'icônes */
.icon-home::before {
  content: "🏠";
}
.icon-calendar::before {
  content: "📅";
}
.icon-document::before {
  content: "📄";
}
.icon-settings::before {
  content: "⚙️";
}
</style> -->

<style scoped>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 30px;
  padding: 10px;
  max-width: 320px;
  height: 80px;
  margin: 20px auto;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* background-color: white; */
  /* border-radius: 20px 20px 0 0; */
  /* box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1); */
}
/* .bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 30px;
  padding: 10px;
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
} */

.nav-item {
  /* display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 15px;
  color: #999;
  transition: all 0.3s ease; */
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 15px;
  color: #999;
  background-color: #f3f0f0;
  transition: all 0.3s ease;
  border-radius: 30px;
  height: 50px;
}

.nav-item.active {
  color: #000;
  background-color: #fff;
  border-radius: 30px;
  height: 50px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
}

.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  margin-right: 5px;
}

.nav-item span {
  font-size: 14px;
}

.nav-item:not(.active) span {
  display: none;
}
</style>
