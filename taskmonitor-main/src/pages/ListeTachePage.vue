<template>
  <q-page class="task-list-page">
    <q-header class="bg-orange-7 text-white">
      <q-toolbar>
        <q-btn flat round icon="menu" @click="toggleDrawer" />
        <q-menu>
        <q-item clickable v-close-popup>
          <q-item-section  @click="quit"  >Quit</q-item-section>
        </q-item>

        </q-menu>


        <q-toolbar-title>
          Task List
        </q-toolbar-title>


        <q-btn   @click="prompt = true"
                 rounded icon="add" label="New" />
      </q-toolbar>
    </q-header>






      <div >

      <q-list class="q-pa-md">
        <q-item v-for="task in tasks" :key="task.id" class="task-item">
          <q-item-section avatar>
            <q-circular-progress
              :value="task.progress"
              size="20px"
              :thickness="0.2"
              color="orange"
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




      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Créer une tache</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <!-- <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" /> -->

            <q-input outlined bottom-slots v-model="text" label="Titre" counter maxlength="14" :dense="dense">
              <template v-slot:before>
                <q-icon name="event" />
              </template>



            </q-input>
            <br>

            <q-input
              v-model="textareaModel"

              clearable
              outlined
              type="textarea"
              color="red-12"
              label="Description"
              hint=""
              :shadow-text="textareaShadowText"
              @keydown="processTextareaFill"
              @focus="processTextareaFill"
            />
            <br>
            <div class="">
              <div class="q-gutter-md row">
                <q-select
                  filled
                  v-model="model"
                  label="Priorité"
                  :options="periode"
                  style="width: 45%"
                  behavior="dialog"
                />

                <q-select
                  filled square
                  v-model="statut"
                  input-debounce="0"
                  label="Statut"
                  :options="options"

                  style="width: 45%"

                >

                </q-select>
              </div>

            </div>
            <br>
            <q-input filled v-model="date" mask="date" :rules="['date']">
              <template v-slot:append>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Annuler" v-close-popup  />
            <q-btn flat label="Créer" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-page-sticky @click="scan= true" position="bottom-right" :offset="[18, 18]">
        <q-fab color="amber" text-color="black" icon="add" direction="left">


          <q-dialog v-model="scan" persistent>
            <q-card style="min-width: 350px; border-radius: 30px; height: 230px">
              <q-card-section>
                <div class="text-h6"><font color="#144899">
                  Type de scan
                </font>
                </div>
                <div style="position: relative; top: 120px">
                  <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Annuler" v-close-popup class="cursor-pointer"  />
                  </q-card-actions>
                </div>

                <div style="margin-left: 110px;" >




                  <div style="margin-top: -20px;" >
                    <q-btn
                      rounded
                      margin-left="20px"
                      label="Arrivé"
                      @click="goTo()"
                      style="margin-right: 2px;"
                    >
                    </q-btn>
                  </div>

                  <div  style="margin-top: 30px;" >
                    <q-btn
                      rounded
                      margin-left="25px"
                      label="Départ"
                      @click="goTo()"
                      style="margin-right: 2px; "
                    >

                    </q-btn>
                  </div>

                </div>


              </q-card-section>
            </q-card>
          </q-dialog>

        </q-fab>

      </q-page-sticky>
      </div>

  </q-page>
</template>

<script>
import {ref} from "vue";

export default {
  data() {
    return {
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

    goTo() {
        this.$router.push('/identifyPage');
      }

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
