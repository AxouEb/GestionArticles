const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
     // { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'modifier', component: () => import('pages/ModifierPages.vue') },
      { path: 'enregister', component: () => import('pages/EnregistrerPages.vue') },

      { path: '', component: () => import('pages/ListeArticles.vue') },
      { path: 'users', component: () => import('pages/ListeUsers.vue') },
      { path: 'article-commentaire/:articleId',name:'article-commentaire', component: () => import('pages/ListeArticleCommentaires.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
