<template>
  <q-page view="hHh lpR fFf">
    <q-header elevated class="barH">
      <q-toolbar>
        <q-toolbar-title>Notifications</q-toolbar-title>
        <q-input rounded outline dense placeholder="Search..." style="background: white; border: black; border-radius: 20px" >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>

    <div >
      <div >

        <q-card class="q-py-md q-px-xl" flat  >
          <q-tabs
            no-caps
            v-model="tab"

            style="border-radius: 30px; "
            class=" bg-grey-5"
            indicator-color="transparent"
            align="center"

          >

            <q-tab name="general_chat" class="q-px-xs ">
              <q-btn
                :flat="tab === 'new_requests' ? 'flat' :'false' "
                :class=" tab === 'general_chat' ? 'bg-primary ':'' " class="full-width text-white" rounded label="General chats" no-caps style="">

              </q-btn>
            </q-tab>



            <q-tab name="new_requests"   >
              <q-btn
                :flat="tab === 'general_chat' ? 'flat' :'false' "
                :class=" tab === 'new_requests' ? 'bg-primary ':'' " class="full-width text-white" rounded label="New Requests" no-caps style="">

                <q-badge floating color="red" >2</q-badge>
              </q-btn>
            </q-tab>
          </q-tabs>
        </q-card>

        <q-card flat>
          <q-tab-panels v-model="tab" animated>


            <q-tab-panel name="general_chat">
              <div class="text-h6">
                <div v-for="message in messages" :key="message.code" class="q-mb-md">
                  <q-card  flat >
                    <q-card-section class="row no-wrap items-center">
                      <q-avatar>
                        <img :src="message.avatar" />
                      </q-avatar>
                      <div class="col q-ml-sm" style="color: black;" >
                        <div class="text-h6">{{ message.name }}</div>
                        <div class="text-subtitle2">{{ message.text }}</div>
                      </div>
                      <div class="text-right" style="color:black ;"  >
                        <div class="text-caption">{{ message.time }}</div>
                        <q-badge :color="message.statusColor" :label="message.statusLabel" />
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel v-model="tabs" name="new_requests">
              <div class="text-h6">Alarms</div>

              <div v-for="message in messagess" :key="message.code" class="q-mb-md">
                <q-card  flat >
                  <q-card-section class="row no-wrap items-center">
                    <q-avatar>
                      <img :src="message.avatar" />
                    </q-avatar>
                    <div class="col q-ml-sm" style="color: black;" >
                      <div class="text-h6">{{ message.name }}</div>
                      <div class="text-subtitle2">{{ message.text }}</div>
                    </div>
                    <div class="text-right" style="color:black ;"  >
                      <div class="text-caption">{{ message.time }}</div>
                      <q-badge :color="message.statusColor" :label="message.statusLabel" />
                    </div>
                  </q-card-section>
                </q-card>
              </div>


            </q-tab-panel>



          </q-tab-panels>
        </q-card>
        <!--
        <div class="q-mb-lg" style="position: relative; top: 20px; left: 30px; border-radius: 20px">
          <q-btn  style="border-radius: 20px">
            <q-btn label="General Chat"/>
            <q-btn label="New Request" color="primary">
              <q-badge color="red" floating>2</q-badge>
            </q-btn>
          </q-btn>
        </div> -->






      </div>
    </div>
    <BottomNavigationBar />
  </q-page>
</template>

<script>
import BottomNavigationBar from "components/BottomNavigationBar.vue";
import photoProfilInitiale from 'src/assets/AX.jpg';
import photoS from 'src/assets/marie.jpg';

export default {
  components: {
    BottomNavigationBar,
  },
  data() {
    return {
      tab: "general_chat",
      messages: [
        {
          name: 'Marvin McKinney',
          code: 'Mila-102',
          text: 'Hello, My kitchen tab are not working...',
          time: '3:10',
          avatar: photoProfilInitiale,
          status: 1,
          statusColor: 'primary',
          statusLabel: '1'
        },
        {
          name: 'Bessie Cooper',
          code: 'Hmkd-100',
          text: 'Need to change window 1 part...',
          time: '2:00',
          avatar: photoS,
          status: 2,
          statusColor: 'primary',
          statusLabel: '2'
        },
        {
          name: 'Axelle',
          code: 'xxKF-4',
          text: 'WELL Come to hgtfj .....',
          time: '5:00',
          avatar: 'https://cdn.quasar.dev/img/avatar.png',
          status: 3,
          statusColor: 'primary',
          statusLabel: '1'
        },
      ],
      tabs: "new_requests",
      messagess: [
        {
          name: 'Marvin McKinney',
          code: 'Mila-102',
          text: 'Hello, My kitchen tab are not working...',
          time: '3:10',
          avatar: photoProfilInitiale,
          status: 1,
          statusColor: 'red',
          statusLabel: '1'
        },
        {
          name: 'Bessie Cooper',
          code: 'Hmkd-100',
          text: 'Need to change window 1 part...',
          time: '2:00',
          avatar: photoS,
          status: 2,
          statusColor: 'red',
          statusLabel: '2'
        },

      ],

    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.q-page {
  background-color: #2a2a2a;
  color: #fff;
}
.barH{
  background: #144899 ;
}
.body{
  background: #144899;
}
.q-page {
  background-color: #fff;
  color: #000;
}

.q-card {
  background-color: #f9f9f9;
  color: #000;
}

.q-toolbar-title, .q-input input {
  color: #000;
}



.q-btn-group .q-btn {
  color: #000;
}

.q-btn-group .q-btn.q-btn--outline.q-btn--rectangle {
  border-color: #000;
}

.q-btn-group .q-btn.q-btn--outline.q-btn--rectangle.q-btn--no-uppercase {
  color: #000;
}
</style>



