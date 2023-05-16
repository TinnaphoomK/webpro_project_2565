<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div v-for="(value, index) in allReservations" :key="index"
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <div
          class="thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
          อนุมัติ</div>
        <label class="thai text-base ml-6" for="">ห้อง : {{ value.Room.name }}</label>
        <label class="thai text-base ml-6" for="">วันที่จอง : {{ new Date(value.dateTimeStart).toLocaleDateString('th-TH', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }) }}</label>
        <label class="thai text-base ml-6" for="">เวลาที่จอง : {{ value.dateTimeStart.slice(value.dateTimeStart.indexOf('T') + 1,
          -5) }} - {{ value.dateTimeEnd.slice(value.dateTimeEnd.indexOf('T') + 1, -5) }}</label>
        <label class="thai text-base ml-6" for="">รหัสจอง : #{{ value.id }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            allReservations: [],
            userId: ""
        };
    },
    created: async function () {
        this.userId = JSON.parse(localStorage.getItem("user")).id;
        await this.getAllReservations();
    },
    methods: {
        async getAllReservations() {
            try {
                const res = await axios.get(`http://localhost:3000/api/reservation/approved`);
                console.log(res.data);

                if (res.data != null) {
                    this.allReservations = res.data;
                } else {
                    this.allReservations = [];
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>
  