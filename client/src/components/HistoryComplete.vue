<template>
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container">
      <div
        class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
        <!-- approved -->
        <div
          class="thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
          อนุมัติ</div>
        <!-- not approved -->
        <!-- <div
        class="thai bg-red-700 font-normal text-white text-center justify-content-center align-items-center h-2rem w-7rem mx-2">
        ไม่อนุมัติ</div> -->
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