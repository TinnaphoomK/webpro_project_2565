<template>
  <div>
    <div class="z-1 mr-2 ml-5 flex flex-wrap gap-5">
      <div v-for="(value, index) in room " :key="index" class="card border-round-2xl shadow-5 cursor-pointer"
        @click="getdetail(value)">
        <div class="flex justify-content-start flex-wrap">
          <img class="flex w-17rem h-10rem border-round-top-2xl" src="../assets/img/auditorium.jpeg" alt="">
        </div>
        <div class="flex bg-white w-17rem h-4rem border-round-bottom-2xl">

          <div class="flex justify-content-between p-4 w-full">
            <p class="text-sm text-gray-900 w-7">{{ value.name }}</p>
            <p class="text-sm text-gray-900 w-7">{{ value.description }}</p>
            <i class="flex pi pi-search text-gray-900 text-2xl  align-items-center"></i>
          </div>
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
      room: {},
    };
  },
  props: {floor: String},
  created: function () {
    console.log(this.floor)
    console.log(this.room)
    this.allroom(this.floor)
  },
  watch: {
    floor: function () {
      this.allroom(this.floor)
    }
  },
  methods: {
    async allroom(floor) {
      const res = await axios.get('http://localhost:3000/api/room/')
      console.log(res.data);

      if (floor) {
        console.log(this.floor)
        this.room = res.data.filter(room => room.floor == this.floor)
      } else {
        this.room = res.data
      }
    },
    async getdetail(value) {
      const room = await axios.get(`http://localhost:3000/api/room/${value.id}`)
      console.log(room)
      this.$router.push(`/detail/${value.id}`);
    }
  }
}
</script>
