<template>
  <div v-if="article">
    <h5>Détails de l'article identifiant {{ articleId__ }}</h5>

    <h2>{{ article.title }}</h2>
    <p>{{ article.body }}</p>
  </div>
  <div v-else>
    <p>Article introuvable.</p>
  </div>

  <h4>COMMENTAIRES</h4>

  <div v-if="!loadingComment">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g stroke="currentColor">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke-linecap="round"
          stroke-width="3"
        >
          <animate
            attributeName="stroke-dasharray"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0 150;42 150;42 150;42 150"
          />
          <animate
            attributeName="stroke-dashoffset"
            calcMode="spline"
            dur="1.5s"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            keyTimes="0;0.475;0.95;1"
            repeatCount="indefinite"
            values="0;-16;-59;-59"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          dur="2s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        />
      </g>
    </svg>
  </div>
  <ul v-else>
    <li v-for="(item, index) in comments" :key="index">
      <div>
        <div>NOM: {{ item.name }}</div>
        <div>EMAIL: {{ item.email }}</div>
        <div>BODY: {{ item.body }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { api } from "boot/axios"; // Importer l'instance Axios configurée

export default {
  name: "ArticleCommentaire",
  props: {
    articleId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      article: null,
      loading: false,
      loadingComment: false,
      articleId__: null,
      comments: [],
    };
  },
  async mounted() {
    await this.getParams();
    await this.getSinglePost();
    await this.getPostComments();
  },

  methods: {
    async getParams() {
      this.articleId__ = this.$route.params.articleId;
    },
    async getSinglePost() {
      this.loading = true;
      try {
        if (
          this.articleId__ != undefined ||
          this.articleId__ != null ||
          this.articleId__ != ""
        ) {
          const response = await api.get(`/posts/${this.articleId__}`);
          console.log("-----------------------------");
          console.log(response);
          console.log("-----------------------------");

          if (response.status === 200) {
            this.article = response.data;
          } else {
            this.loading = false;
          }
        }
      } catch (error) {
        this.loading = false;
        console.error("Erreur lors de la récupération de l'article:", error);
      }
    },
    async getPostComments() {
      this.loadingComment = true;
      try {
        if (
          this.articleId__ != undefined ||
          this.articleId__ != null ||
          this.articleId__ != ""
        ) {
          const response = await api.get(`/posts/${this.articleId__}/comments`);

          if (response.status === 200) {
            this.comments = response.data;
          } else {
            this.loadingComment = false;
          }
          console.log("-----------------------------");
          console.log("LA VALEUR DE COMMENTS", this.comments);
          console.log("-----------------------------");
        }
      } catch (error) {
        this.loadingComment = false;
        console.error("Erreur lors de la récupération de l'article:", error);
      }
    },
  },
};
</script>
<style scoped>
h1 {
  color: #2c3e50;
}
.comment-list {
  list-style-type: none;
  padding: 0;
}
.comment-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.comment-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
h2 {
  margin: 0;
  font-size: 1.2em;
}
p {
  margin: 0.5em 0;
}
</style>
