<template>


  <q-page padding class="container">
    <header class="wrapper">


      <q-toolbar>
        <q-btn flat margin-left="60px" @click="back" rounded
               style="margin-right: 2px; border: 3px solid white; right: 15px ">
          <q-icon name="arrow_back" color="black" size="sm" class="q-ml-sm" style="margin-left: 1px;"></q-icon>
        </q-btn>

        <q-toolbar-title
          style=" margin-left: 25px;padding-left: 15px;">Nouvelle tâche
        </q-toolbar-title>

        <q-btn flat margin-left="20px"
               dense icon="more_vert" style="margin-right: 2px; border: 2px solid white; ">

        </q-btn>


      </q-toolbar>

      <q-card-section class="q-px-xs">
        <q-item-label class="text-grey-8 q-mb-sm">
          Task Name </q-item-label>
        <q-input rounded outlined label="Create Task Management App" v-model="taskName"/>
      </q-card-section>
      <q-card-section class="q-px-xs">
        <q-item-label class="text-grey-8 q-mb-sm">
          Description  </q-item-label>
        <q-input type="textarea" rounded outlined label="Description" v-model="description"/>
      </q-card-section>

      <div class="">

        <q-card-section class="row q-pa-xs">
          <div class="col q-pa-xs">
            <q-card flat bordered class="bg-grey-2" style="border-radius: 12px;">
              <q-card-section class=" q-pa-sm">
                <q-btn icon="event" round color="primary">
                  <q-popup-proxy @before-show="updateProxy" cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date_task">
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn label="Cancel" color="primary" flat v-close-popup />
                        <q-btn label="OK" color="primary" flat @click="save" v-close-popup />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-btn>

                <!--  <q-icon name="event" size="lg" color="primary"/>
                 <div class="q-ml-sm">
                   <q-card-section>
                     {{ dueDate }} <br> March 12, 2023
                   </q-card-section>
           </div> -->
               <div>
                 {{date_task}}
               </div>
              </q-card-section>
            </q-card>
          </div>
          <!--
          <div class="col q-pa-xs">
            <q-card flat bordered class="bg-grey-2" style="height: 150px; border-radius: 12px;">
              <q-card-section class="row items-center">

                <q-icon name="insert_drive_file" size="lg" color="primary"/>
                <div class="q-ml-sm">

                  <q-card-section>
                    {{ filesCount }} <br> Files attached
                  </q-card-section>
                </div>
              </q-card-section>
            </q-card>
          </div>
          -->
        </q-card-section>



        <q-card-section>
          <div class="row">
            <div class="col">

              <q-btn flat round margin-left="20px"
                     style="margin-right: 2px; border: 1px solid black; margin-right: 15px; height: 50px; width:50px;"
                     color="black" icon="add" @click="addMember"/>
              Add Member

            </div>
            <div class="col items-center" v-for="(member, index) in teamMembers" :key="index">
              <q-avatar>
                <img :src="member.avatar"/>
              </q-avatar>
              <div class="text-center">
                {{ member.name }}
                <br/>
                {{ member.role }}
              </div>
            </div>
          </div>
        </q-card-section>




        <q-card-actions>

          <q-btn clickable v-ripple rounded class="text-white full-width bg-primary q-ma-sm"
                 style="width: 50px; height: 60px;"
                 color="primary" label="Create Task" @click="createTask"


          />
        </q-card-actions>
      </div>
    </header>
  </q-page>
</template>

<script>
import {ref} from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'NewTask',
  setup() {
    const router = useRouter()
    const taskName = ref('');
    const description = ref('');
    const teamMembers = ref([
      {name: 'You', role: 'Designer', avatar: 'https://cdn.quasar.dev/img/avatar2.jpg'},
      {name: 'Colin', role: 'Designer', avatar: 'https://cdn.quasar.dev/img/avatar3.jpg'},
      {name: 'Max', role: 'Manager', avatar: 'https://cdn.quasar.dev/img/avatar4.jpg'},
      {name: 'Nick', role: 'Manager', avatar: 'https://cdn.quasar.dev/img/avatar5.jpg'}
    ]);
    const dueDate = ref('10:00PM');
    const filesCount = ref(0);

    const addMember = () => {
      // Implement logic to add a new member to teamMembers array
      // Example:
      // teamMembers.value.push({ name: 'New Member', role: 'Role', avatar: 'https://cdn.quasar.dev/img/avatar6.jpg' });
    };
    const createTask = () => {

      console.log('Creating Task');
    };


    const back = () => {
      router.go(-1); //
    };

    return {
      taskName,
      description,
      teamMembers,
      dueDate,
      filesCount,
      addMember,
      createTask,
      back,

    };
  },
  data(){
    return{
      date_task: null
    }
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');


.go {
  top: -100px;
}

</style>
