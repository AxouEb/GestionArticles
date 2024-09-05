<template>
  <q-page class="bg-grey-1">
  <div class="q-pa-md">


    <q-toolbar>
      <q-btn bordered flat round icon="arrow_back" class="q-pr-lg" @click="back" />
      <q-toolbar-title >Presence calendar
      </q-toolbar-title>
      <q-btn flat icon="event" round class="q-mr-sm" />

    </q-toolbar>


    <div class="q-gutter-md row items-start justify-center q-mt-xs" style="position: absolute;top: 35px">
      <q-card flat class="full-width q-pa-md" style="border-radius: 30px;">
        <q-card-section class="row items-center q-pa-none">
          <q-date flat v-model="date" minimal class="full-width"  :events="eventsFn"
                  :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"/>

        </q-card-section>
      </q-card>
    </div>
  </div>

    <q-calendar
      v-model="selectedDate"
      locale="en-us"
      bordered
      :options="{
          events: [
            { id: 1, start: '2023-09-21', end: '2023-09-21', title: 'Daily call' },
            { id: 2, start: '2023-09-21', end: '2023-09-21', title: 'Project planning' },
            { id: 3, start: '2023-09-21', end: '2023-09-21', title: 'Send a design for review' }
          ]
        }"
    />

    <div class="bg-grey-3" style=" height: 720px; padding: 40px;border-radius: 50px 0px 0px 0px; "  >

      <div style="position: relative; top:280px">

      <q-list >
        <q-card flat bordered style=" border-radius: 20px; background: white; width: 350px; right: 20px; height: 70px; ">
          <q-item class="" v-ripple>
            <q-item-section>
              <q-item-label>Evaluation of objectives </q-item-label>
              <q-item-label caption>09:00 am - 11:00 am </q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="bleu" v-model="notifications" val="tal" />
            </q-item-section>
          </q-item>
        </q-card>

        <q-card flat bordered style=" border-radius: 20px; background: white; width: 350px; right: 20px; height: 70px;top: 10px">
          <q-item  v-ripple style="height: 70px">
          <q-item-section>
            <q-item-label>Project planning</q-item-label>
            <q-item-label caption>11:30 am - 12:30 pm </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle color="green" v-model="notifications" val="friend" />
          </q-item-section>
        </q-item>
        </q-card>

        <q-card flat bordered style=" border-radius: 20px; background: white; width: 350px; right: 20px; height: 70px;top: 20px">
          <q-item  v-ripple style="height: 70px">
            <q-item-section>
              <q-item-label>Project planning</q-item-label>
              <q-item-label caption>11:30 am - 12:30 pm </q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="red" v-model="notifications" val="boy" />
            </q-item-section>
          </q-item>
        </q-card>

        <q-card flat bordered style=" border-radius: 20px; background: white; width: 350px; right: 20px; height: 70px;top: 30px">
          <q-item  v-ripple style="height: 70px">
            <q-item-section>
              <q-item-label>Send a design for review</q-item-label>
              <q-item-label caption>01:00 pm - 03:00 pm </q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="bleu" v-model="notifications" val="tl" />
            </q-item-section>
          </q-item>
        </q-card>

        <q-card flat bordered style=" border-radius: 20px; background: white; width: 350px; right: 20px; ;top: 40px" >
          <q-item  v-ripple style="height: 70px">
            <q-item-section>
              <q-item-label>Filling products</q-item-label>
              <q-item-label caption>08:00 pm - 01:00 pm </q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-toggle color="bleu" v-model="notifications" val="tad" />
            </q-item-section>
          </q-item>
        </q-card>


      </q-list>
    </div>

    </div>

  </q-page>
  <btnPage/>
</template>

<script>
import btnPage from "components/btnPage.vue";
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import BottomNavigationBar from "components/BottomNavigationBar.vue";

export default {


  data() {
    return {
      selectedDate: '2023-09-21',
      todayEvents: [
        { id: 1, title: 'Daily call', time: '09:00 am - 11:00 am' },
        { id: 2, title: 'Project planning', time: '11:30 am - 12:30 pm' },
        { id: 3, title: 'Send a design for review', time: '01:00 pm - 03:00 pm' },
        { id: 3, title: 'task1', time: '01:00 am - 02:00 pm' }
      ]
    };
  },
  setup () {

    const router = useRouter();
    const back = () => {
      router.push('/home'); // Rediriger explicitement vers la page d'accueil
    };
    return {
      events: [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
      eventsFn (date) {
        if (date === '2019/02/01' ||
          date === '2019/02/05' ||
          date === '2019/02/06' ||
          date === '2019/02/09' ||
          date === '2019/02/23') {
          return true
        }
        return false
      },

      tasks: [
        { id: 1, date: '18/2024', name: 'Tâche 1', icon: 'event' },
        { id: 3, date: '19/2024', name: 'Tâche 3', icon: 'event' }
      ],
      calendarOptions: {
        view: 'month',
        locale: 'fr',
        events: [
          { start: '2024-06-11', end: '2024-06-11', title: 'Event 1' },
          { start: '2024-06-14', end: '2024-06-14', title: 'Event 2' }
        ],
        weekends: true
      },
      date: ref('2019/02/01'),
      notifications: ref(['friend']),
      back

    }


  }


}
</script>



<style scoped>

.custom-separator {
  border-top: 2px dashed #ed6e08; /* Change l'épaisseur, le style et la couleur du trait */

}
.full-width {
  width: 100%;
}

.q-pa-none {
  padding: 0 !important;
}
.bg-grey-1 {
  background-color: #f7f7f7;
}
.bg-grey-1 {
  background-color: #f7f7f7;
}

.text-primary {
  color: #007bff;
}

.q-pa-md {
  padding: 16px;
}

.q-ml-md {
  margin-left: 16px;
}

.q-mt-md {
  margin-top: 16px;
}

.q-mb-md {
  margin-bottom: 16px;
}
</style>

