<template>
  <div class="card fadeinright animation-duration-200">
    <div class="flex justify-content-center flex-wrap card-container">
      <div v-for="(value, index) in pendingReservations" :key="index"
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <div
          class="thai bg-primary-700 text-white text-lg font-normal text-center align-items-center h-2rem w-7rem border-round-right-lg">
          รอดำเนินการ</div>
        <label class="thai text-base" for="">รหัสจอง : #{{ value.id }}</label>
        <label class="thai text-base ml-4" for="">ห้อง : {{ value.Room.name }}</label>
        <label class="thai text-base ml-4" for="">เวลาที่จอง : {{ value.dateTimeStart.slice(0, 19).replace("T", " เวลา ") + value.dateTimeEnd.slice(10, 19).replace("T", " - ") }}</label>
        <label class="thai text-base mx-4" for="">รายละเอียด : {{ value.detail }}</label>
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
      return this.reservation.filter(reservation => reservation.status === "pending");
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
    toreport() {
      this.isLoggedIn = true;
      this.$router.push(`/report/${this.roomId}`)
    },
  }
}
</script>
