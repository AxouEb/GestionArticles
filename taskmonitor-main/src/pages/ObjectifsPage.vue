<template>
  <q-page class="task-list-page">
    <q-header class="bg-blue-7 text-white">
      <q-toolbar>
        <q-btn flat round icon="arrow_back" @click="back()" />


        <q-toolbar-title style="padding-left: 38px"  >
          Objectives lists
        </q-toolbar-title>


        <q-btn round icon="more_vert" @click="toggleDrawer">
          <q-menu
            transition-show="rotate"
            transition-hide="rotate"
          >
            <q-list style="">

              <q-item clickable>
                <q-item-section  @click="quit" >Quit</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Aide</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>












      </q-toolbar>
    </q-header>


    <div >
      <q-list class="q-pa-md">
        <q-item v-for="task in tasks" :key="task.id" class="task-item" style="border-radius: 30px; height: 75px">
          <q-item-section avatar>
            <q-circular-progress
              :value="task.progress"
              size="20px"
              :thickness="0.2"
              color="warning "
            >
              <div>{{ task.progress }}% </div>
            </q-circular-progress>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ task.title }}</q-item-label>
            <q-item-label caption>{{ task.description }}</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              flat
              round
              icon="keyboard_arrow_down"
              v-if="!task.completed"
              @click="markAsComplete(task.id)"
            />

            <q-btn
              flat
              round
              icon="check_circle"
              color="green"
              v-if="task.completed"
            />
            <q-btn
              flat
              round
              color="red"
              icon="delete"
              @click="deleteTask(task.id)"
            />

          </q-item-section>
        </q-item>
      </q-list>





    </div>

  </q-page>
</template>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
      menu: false, // ajout de la variable pour contrôler l'état du menu
      tasks: [
        {
          id: 1,
          progress: 75,
          title: "Add Your Task List",
          description: "Description of the task.",
          completed: false
        },
        {
          id: 2,
          progress: 50,
          title: "Add Your Task List",

          description: "Description of the task.",
          completed: false
        },
        {
          id: 3,
          progress: 100,
          title: "Your Completed Task Name",
          description: "Description of the task.",
          completed: true
        },
        {
          id: 4,
          progress: 100,
          title: "Your Completed Task Name",
          description: "Description of the task.",
          completed: true
        },
        {
          id: 3,
          progress: 100,
          title: "Your Completed Task Name",
          description: "Description of the task.",
          completed: false
        },
        {
          id: 4,
          progress: 100,
          title: "Your Completed Task Name",
          description: "Description of the task.",
          completed: true
        },
        {
          id: 5,
          progress: 60,
          title: "Add Your Task List",
          description: "Description of the task.",
          completed: false
        },
        {
          id: 6,
          progress: 25,
          title: "Add Your Task List",
          description: "Description of the task.",
          completed: false
        }
      ]
    };
  },

  setup () {

    return {

      scan: ref(false),
      prompt: ref(false),
      address: ref(''),
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
      date: ref('2024/07/29'),
      opened: ref(false),
      model: ref(null),
      statut: ref(null),
      options: [
        'En attente', 'En cours', 'Terminé'
      ],
      periode: [
        'Fortes', 'Moyennes', 'Faibles'
      ],
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    toggleDrawer() {

    },
    quit() {
      this.$router.push('/home');
    },

    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    markAsComplete(taskId) {
      const task = this.tasks.find(t => t.id === taskId);
      if (task) {
        task.completed = true;
        task.progress = 100;
      }
    },



  }
};
</script>

<style scoped>
.task-list-page {
  background-color: #f5f5f5;
}

.q-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.task-item {
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
}
</style>
