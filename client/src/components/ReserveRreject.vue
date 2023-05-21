<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div v-for="(value, index) in allReservations" :key="index"
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <div
          class="thai bg-red-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
          ไม่อนุมัติ</div>
          <label class="thai text-base ml-6" for="">รหัสจอง : #{{ value.id }}</label>
          <label class="thai text-base ml-6" for="">ห้อง : {{ value.Room.name }}</label>
          <label class="thai text-base ml-6" for="">เวลาที่จอง : {{ value.dateTimeStart.slice(0, 19).replace("T", " เวลา ") + value.dateTimeEnd.slice(10, 19).replace("T", " ถึง ") }}</label>
          <label class="thai text-base mx-6" for="">รายละเอียด : {{ value.detail }}</label>
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
                const res = await axios.get(`http://localhost:3000/api/reservation/admin?status=rejected`);
                console.log(res.data);

                if (res.data != null) {
                    this.allReservations = res.data;
                } else {
                    this.allReservations = [];
                }
                this.$emit('rejected-count-updated', this.allReservations.length);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>
  