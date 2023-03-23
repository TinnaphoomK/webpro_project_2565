<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div
        class="bg-white text-primary-800 text-lg font-bold flex align-items-center justify-content-between w-8 h-6rem border-round-2xl m-2 shadow-5">
        <label class="thai ml-6" for="">ห้อง : {{ spacedata.roomid }}</label>
        <label class="thai ml-6" for="">วันที่จอง : {{ spacedata.startdate }}</label>
        <label class="thai ml-6" for="">เวลาที่จอง : {{ spacedata.starttime }} - {{ spacedata.endtime }}</label>
        <label class="thai ml-6" for="">รหัสจอง : #{{ spacedata.id }}</label>
        <router-link to="/report">
          <i class="pi pi-ellipsis-h mx-6 text-xl text-900"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import spacedata from '../components/db.json';

export default {
  data() {
    return {
    };
  },
  created() {
    this.spacedata = JSON.parse(JSON.stringify(spacedata));
  },
};
</script>