<template>
    <div class="card fadeinright animation-duration-200">
      <div class="flex justify-content-center flex-wrap card-container">
        <div v-for="(value, index) in pendingReport" :key="index"
          class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
          <div
          class="flex justify-content-center thai bg-primary-700 text-white text-lg font-normal text-center align-items-center h-2rem w-7rem border-round-right-lg">
          รอดำเนินการ</div>
          <!-- <div
            class="thai bg-red-700 font-normal text-white text-center justify-content-center align-items-center h-2rem w-7rem mx-2">
            ไม่อนุมัติ</div> -->
          <label class="thai text-base ml-4" for="">ห้อง : {{ value.Room.name }}</label>
          <label class="thai text-base ml-6" for="">วันที่รายงาน : {{ new Date(value.createdAt).toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }) }}</label>
          <label class="thai text-base ml-6" for="">รหัสรายงาน : #{{ value.id }}</label>
          <label class="thai text-base ml-6" for="">รายละเอียด : {{ value.detail }}</label>
          <div class="flex">
                <Button @click="done(value.id)" class="thai text-xs bg-green-700 hover:bg-green-800 h-2rem w-6rem ml-4 mr-6 justify-content-center">เสร็จสิ้น</Button>
            </div>
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
    };
  },
  computed: {
    pendingReport() {
      return this.report.filter(report => report.status === "pending");
    }
  },
  created() {
    this.getAllReports();
  },
  methods: {
    async getAllReports() {
      try {
        const res = await axios.get(`http://localhost:3000/api/report/`);
        console.log(res.data);

        if (res.data != null) {
          this.report = res.data;
        } else {
          this.report = [];
        }
      } catch (error) {
        console.log(error);
      }
    },
    async done(id) {
      try {
        const res = await axios.put(`http://localhost:3000/api/report/${id}`, {
          status: "done"
        });
        console.log(res.data);
        this.getAllReports();
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>