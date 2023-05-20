<template>
    <div class="card">
      <div class="flex justify-content-center flex-wrap card-container">
        <div v-for="(value, index) in pendingReport" :key="index"
          class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
          <div
          class="flex justify-content-center thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-10rem border-round-right-lg">
          เสร็จสิ้น</div>
          <label class="thai text-base ml-6" for="">ห้อง : {{ value.Room.name }}</label>
          <label class="thai text-base ml-6" for="">วันที่รายงาน : {{ new Date(value.createdAt).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) }}</label>
          <label class="thai text-base ml-6" for="">รหัสรายงาน : #{{ value.id }}</label>
          <label class="thai text-base ml-6 mr-8" for="">รายละเอียด : {{ value.detail }}</label>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            report: [],
            userId: ""
        };
    },
    computed: {
        pendingReport() {
            return this.report.filter(report => report.status === "done");
        }
    },
    created: async function () {
        this.userId = await JSON.parse(localStorage.getItem("user")).id
        this.allreport()
    },
    methods: {
        async allreport() {
            try {
                const res = await axios.get(`http://localhost:3000/api/user/report/${this.userId}`)
                console.log(res.data);

                if (res.data != null) {
                    this.report = res.data[0].Report
                } else {
                    this.report = []
                }
            } catch (error) {
                console.log(error);
            }

        },
    }
}
</script>