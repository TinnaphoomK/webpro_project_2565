<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div v-for="(value, index) in reservation" :key="index"
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <div
          class="thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
          อนุมัติ</div>
        <!-- <div
        class="thai bg-red-700 font-normal text-white text-center justify-content-center align-items-center h-2rem w-7rem mx-2">
        ไม่อนุมัติ</div> -->
        <label class="thai ml-6" for="">ห้อง : {{ value.roomId }}</label>
        <label class="thai ml-6" for="">วันที่จอง : {{ value.dateTimeStart }}</label>
        <label class="thai ml-6" for="">เวลาที่จอง : {{ value.dateTimeStart }} - {{ value.dateTimeEnd }}</label>
        <label class="thai ml-6" for="">รหัสจอง : #{{ value.id }}</label>
        <label class="thai ml-6" for="">รายละเอียด : {{ value.detail }}</label>
        <router-link to="/report">
          <i class="pi pi-ellipsis-h mx-6 text-xl text-900"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
    return {
      reservation: {},
    };
  },
  created: function () {
    console.log(this.roomId)
    console.log(this.reservation)
    this.allreserve(this.roomId)
  },
  methods: {
    async allreserve(roomId) {
      const res = await axios.get('http://localhost:3000/api/reservation/')
      console.log(res.data);

      if (roomId) {
        console.log(this.roomId)
        this.reservation = res.data.filter(reservation => reservation.roomId == this.roomId)
      } else {
        this.reservation = res.data
      }
    }
  }
}
</script>