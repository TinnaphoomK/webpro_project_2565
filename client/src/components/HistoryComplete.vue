<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div v-for="(value, index) in pendingReservations" :key="index"
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <div
          class="thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
          อนุมัติ</div>
        <label class="thai text-base ml-6" for="">รหัสจอง : #{{ value.id }}</label>
        <label class="thai text-base ml-6" for="">ห้อง : {{ value.Room.name }}</label>
        <label class="thai text-base ml-6" for="">เวลาที่จอง : {{ value.dateTimeStart.slice(0, 19).replace("T", " เวลา ")}}</label>
        <label class="thai text-base ml-6" for="">รายละเอียด : {{ value.detail }}</label>
        <a @click.prevent="toreport(value.Room.id)">
          <i class="pi pi-ellipsis-h mx-6 text-xl text-900"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      reservation: [],
      userId: ""
    };
  },
  computed: {
    pendingReservations() {
      return this.reservation.filter(reservation => reservation.status === "approved");
    }
  },
  created: async function () {
    this.userId = await JSON.parse(localStorage.getItem("user")).id
    this.allreserve()
  },
  methods: {
    async allreserve() {
      try {
        const res = await axios.get(`http://localhost:3000/api/user/history/${this.userId}`)
        console.log(res.data);

        if (res.data != null) {
          this.reservation = res.data[0].Reservation
        } else {
          this.reservation = []
        }
      } catch (error) {
        console.log(error);
      }

    },
    toreport(roomId) {
      this.$router.push(`/report/${roomId}`)
    },
  }
}
</script>
