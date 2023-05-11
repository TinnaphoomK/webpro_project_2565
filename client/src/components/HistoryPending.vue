<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div v-for="(value, index) in reservation" :key="index" class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
                <div class="thai bg-primary-700 text-white text-lg font-normal text-center align-items-center h-2rem w-7rem border-round-right-lg">รอดำเนินการ</div>
                <label class="thai ml-6" for="">ห้อง : {{ value.roomId }}</label>
                <label class="thai ml-6" for="">วันที่จอง : {{ value.dateTimeStart.slice(0, 10) }}</label>
                <label class="thai ml-6" for="">เวลาที่จอง : {{ value.dateTimeStart.slice(value.dateTimeStart.indexOf('T') + 1, -5) }} - {{ value.dateTimeEnd.slice(value.dateTimeEnd.indexOf('T') + 1, -5) }}</label>
                <label class="thai ml-6" for="">รหัสจอง : #{{ value.id }}</label>
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
    this.allreserve()
  },
  methods: {
    async allreserve() {
      const res = await axios.get('http://localhost:3000/api/reservation/')
      console.log(res.data[0].status);

      if (res.data != null) {
        this.reservation = res.data
      } else {
        this.reservation = null
      }
    }
  }
}
</script>