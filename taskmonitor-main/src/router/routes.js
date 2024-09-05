const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/interfacePage.vue") },
      { path: "modifyMotPasse", component: () => import("pages/ModifyPasswordPage.vue") },


      { path: "/identifyPage", component: () => import("pages/identifyPage.vue") },

      { path: "/getP", component: () => import("pages/getStartedPage.vue") },



      { path: "/objectifsPage", component: () => import("pages/ObjectifsPage.vue") },

      { path: "/home", component: () => import("pages/HomePage.vue") },
      { path: "/calendar", component: () => import("pages/CalendarPage.vue") },
    { path: "/newTask", component: () => import("pages/NewTaskPage.vue") },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/interfaceApp", component: () => import("pages/interfacePage.vue") },
      { path: "/register", component: () => import("pages/RegisterPage.vue") },

      { path: "/notification", component: () => import("pages/NotificationPage.vue") },
      { path: "/edit_user", component: () => import("pages/EditUserPage.vue") },
      { path: "/change_password", component: () => import("pages/ChangePasswordPage.vue") },
      { path: "/motPasse", component: () => import("pages/MotPasseOubliePage.vue") },
      { path: "/profil", component: () => import("pages/Profil_userPage.vue") },
      { path: "/listeTache", component: () => import("pages/ListeTachePage.vue") },
      // { path: "/cal", component: () => import("pages/calPage.vue") },

    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;




