<template>
  <div>
    <div>
      <q-page class="body " >
        <header class="wrapper" >
          <div class=""  >

            <q-item
              clickable
              v-ripple
              style="
                border-radius: 25px;
                font-size: 22px;
                width: 130px;
                height: 15px;
                margin-right: -20px;
                border: 2px solid white;"
              class="absolute-top-left bg-primary text-white q-ma-md q-pa-lg"
            >
              <q-item-section side top="10px">
                <q-btn
                flat
                  round
                  color="black"
                  margin-left="20px"
                  icon="add"
                  style="
                    margin-right: 2px;
                    border: 2px solid white;
                    margin-left: -19px;
                  "
                />
              </q-item-section>
              <q-item-section>
                <q-item-label caption>
                  <q-btn
                    flat
                    round
                    dense
                    label="08.03"
                    color="white"
                    style="font-size: large"
                  />
                </q-item-label>
              </q-item-section>
            </q-item>


            <q-card flat border class="q-mb-md" style="border-radius: 30px">
              <q-card-section class="row items-center">

                <div class="q-ml-xl">
                  <div class="text-h6" style="color: #6c757d">Hello!</div>
                  <div class="text-subtitl1" style="color: black">
                    Marie Axelle
                  </div>
                </div>


            <div
              class="absolute-top-right bg-grey-transparent text-white q-pa-xl"
              style="top: -45px; margin-right: -25px">
              <q-btn @click="goToNotifications" size="15px"
                flat
                round
                margin-left="25px"
                icon="notifications"
                color="black"
                style="margin-right: 2px; border: 10px solid white; left: 70px"
              >
              <q-badge floating color="red" rounded />

              </q-btn>
              <q-btn round @click="edit"  style="right: 280px;  border: 5px solid white" >
              <q-avatar size="57px">
                <img
                  src="../assets/AX.jpg"
                />
              </q-avatar>
              </q-btn>
            </div>


            </q-card-section>
            </q-card>
          </div>


          <div class="text-h6" style="position: absolute;top:105px">Today's Attendance</div>

          <q-card flat bordered class="q-mb-md "
                  style="border-radius: 30px; height: 180px;background:powderblue;top: 25px ; width: 365px; ">
            <q-card-section>


              <div class="q-pl-xs q-gutter-sm absolute-left " style="height: 80px;margin-left: 190px;top: 10px;" >
                <q-avatar
                  style="border: 3px solid white;position: absolute"
                  v-for="n in 4"
                  :key="n"
                  size="40px"
                  class="overlapping "
                  :style="`left: ${n * 30}px`"
                >
                  <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
                </q-avatar>
              </div>







                  <div class="col-6" >
                    <q-btn style="border-radius: 40px; width: 120px"
                      color="primary"
                      icon="hourglass_disabled"
                      label="Clock In"
                      outline
                      no-caps
                    />
                  </div>

              <div class="row justify-between q-mt-md">
                <div class="q-pa-md" style="max-width: 142px; right: -20px">
                  <q-input filled v-model="date">
                    <template v-slot:prepend>

                    </template>

                    <template v-slot:append>
                      <q-icon name="access_time" class="cursor-pointer">
                        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                          <q-time v-model="date" mask=" HH:mm" format24h >
                            <div class="row items-center justify-end">
                              <q-btn v-close-popup label="Close" color="primary" flat />
                            </div>
                          </q-time>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </div>

                <q-separator vertical  style="height: 80px" />

                <q-circular-progress
                  show-value
                  class="text-light-blue q-ma-md"
                  :value="82"
                  size="80px"
                  color="light-white"
                  style="top: -25px"
                />
                <div class="text-black" style=" position: absolute; top: 155px ;  padding-right:220px" >
                  Total Hours 00
                </div>

                <div class="text-black" style=" position: absolute; top: 155px ;  padding-left:220px" >
                  Task Progress
                </div>

              </div>
                </q-card-section>
              </q-card>









          <div style="padding-top: 30px">


              <div class="row q-mb-md">


                <div class="" style="padding-left: 10px" >
                  <strong>
                  My Tasks </strong>  <span class="text-grey-9">
                <q-btn round dense color="warning "  @click="newTask">14
                </q-btn>
                </span></div>



                <div class="" style="padding-left: 150px" >

                    <strong>
                  Add Task </strong><span class="text-black-9">

                  <q-btn round dense color="primary" icon="add" @click="addTask">
                  </q-btn>
                </span></div>

                </div>



              <div class="row q-mb-md">

                <div class="q-mt-md" >
                  <q-chip color="secondary" text-color="white" icon="find_in_page">In Review 04</q-chip>
                </div>




                <div class="q-mt-md" style="padding-left: 108px">
                  <q-chip color="green" text-color="white" icon="new_releases">New: 03</q-chip>
                </div>



              </div>



              <div class="row q-mb-md">
                <div class="q-mt-md">
                  <q-chip color="orange" text-color="white" icon="rotate_right">To do 03 </q-chip>
                </div>

                <div class="q-mt-md" style="padding-left: 110px">
                  <q-chip color="blue" text-color="white" icon="rotate_right">In progress 06  </q-chip>
                </div>

              </div>

          </div>

          <div class="task-list-page" >
            <q-list class="q-pa-md">
              <q-item v-for="task in tasks" :key="task.id" class="task-item" style="border-radius: 30px; height: 65px">
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


                  <!--  <q-item-label caption>{{ task.description }}</q-item-label> -->


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






        </header>
      </q-page>
    </div>





    <BottomNavigationBar />
  </div>
</template>

<script>
import BottomNavigationBar from "components/BottomNavigationBar.vue";
import { userInfo } from 'src/services/apiMethodes';
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

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
  components: {
    BottomNavigationBar,
  },

  setup() {
    const dataUser = ref(null);
    const router = useRouter(); // Utilisation de useRouter pour obtenir la référence au routeur

    // Utilisation de onMounted pour appeler getData une fois que le composant est monté
    onMounted(getData);

    function getData() {
      // Appel de userInfo() et affectation à dataUser
      userInfo().then(response => {
        dataUser.value = response.data; // Supposons que userInfo() retourne une Promise avec un objet de données
      }).catch(error => {
        console.error("Error fetching user info:", error);
      });
    }

    // Méthodes du composant
    const goToNotifications = () => {
      router.push({ path: "/notification" }); // Utilisation de router pour naviguer vers la route 'notification'
    };
    const addTask  = () => {
      router.push({ path: "/newTask" }); // Utilisation de router pour naviguer vers la route 'notification'
    };
    const newTask  = () => {
      router.push({ path: "/listeTache" }); // Utilisation de router pour naviguer vers la route 'notification'
    };
    const edit = () => {
      router.push({ path: "/edit_user" }); // Utilisation de router pour naviguer vers la route 'edit_user'
    };

    // Retourner les variables et les méthodes que vous souhaitez exposer dans le template
    return {

      date: ref('12:44'),
      tab1: ref("mails"), // Exemple de variable réactive
      tab: ref("mails"),
      dataUser, // Données utilisateur réactives
      goToNotifications, // Méthode de navigation vers les notifications
      edit, // Méthode de navigation pour l'édition de l'utilisateur
      newTask,
      addTask
    };
  },
  methods: {


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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

.body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alignement en haut pour l'ensemble du contenu */
  box-sizing: border-box;
}
.wrapper {
  /* border: 1px solid rgb(213, 207, 207); */
  display: block;
  /* margin-left: 200%; */
  /* margin-top: -100px; */
  /* margin: 90px; */
  position: relative;
  /* width: 410px; */
  /* height: 600px; */

  /* box-shadow: 0 0 50px #2e3034; */
  padding: 20px;
  /* border-radius: 20px; */
}

.notfi {
  box-shadow: none;
}
.row {
  width: auto;
  height: auto;
}

.arriere-plan {
  filter: blur(5px);
}
.arriere-plan-d {
  filter: blur(1.5px);
}
.bas {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.axou {
  margin-left: 40px;
  padding-left: 40px;
}
.task-list-page {
  margin: 0;
  padding: 0;
    border-radius: 30px 0px 0px 0px;
    background-color: aliceblue;
    box-shadow: 0 0 10px lightgrey, 0 0 0 4px rgba(245, 249, 250, 0.95);
    box-sizing: border-box;

}

.task-item {
  margin-bottom: 10px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
}
</style>
