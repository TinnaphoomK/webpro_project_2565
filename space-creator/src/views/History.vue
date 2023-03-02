<template>
  <div>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="his bg-white shadow-5 w-2 h-6rem justify-content-center text-center text-5xl align-items-center border-round-2xl"
        style="margin-left: 42%; margin-top: 3%;padding-top: 1%;">
        ประวัติการจอง
    </div>
    <block v-for="reservation in reservations" :key="reservation.id" :roomName="reservation.roomName" :startdate="reservation.startdate" :enddate="reservation.enddate" :starttime="reservation.starttime" :endtime="reservation.endtime" :id="reservation.id"></block>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import block from '../components/block.vue';

export default {
  components: {
    Navbar,
    block
  },
  data() {
    return {
      reservations: [],
      reservation: {
        startdate: '',
        starttime: '',
        enddate: '',
        endtime: '',
        id: ''
      },
      roomNames: [],
      roomName: {
        roomName: ''
      }
    }
  },
  created() {
    const storedReservations = localStorage.getItem('reservations');
    if (storedReservations) {
      this.reservations = JSON.parse(storedReservations);
    }
    const storedRoomNames = localStorage.getItem('roomNames');
    if (storedRoomNames) {
      this.roomNames = JSON.parse(storedRoomNames);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.his {
    font-family: 'Mitr', sans-serif;
    color: rgb(35, 87, 165);
}

.bar {
    height: 0.2vh;
    width: 58vw;
    /* Position the rectangle in the center */
    position: absolute;
    top: 33%;
    left: 53%;
    background-color: #9E9999;
    transform: translate(-50%, -50%);
}

a:link {
    text-decoration: none;
}

a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

a:active {
    text-decoration: none;
}
</style>

