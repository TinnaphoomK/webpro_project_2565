<template>
    <!-- แสดงห้องที่ เปิด ใช้งานอยู่ !! -->
    <div class="card">
<<<<<<< Updated upstream
      <div class="flex justify-content-center flex-wrap card-container">
        <div class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-28rem h-6rem border-round-2xl mx-2 shadow-5">
          <Button
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            @click="changeStatus(room.id)"
            :class="[
              'thai',
              'text-sm',
              'h-2rem',
              'w-7rem',
              'justify-content-center',
              'ml-2',
              hover ? 'bg-red-700 hover:bg-red-800' : room.status ? 'bg-green-700 hover:bg-red-800' : 'bg-green-700 hover:bg-green-800'
            ]"
          >
            {{ hover ? 'ปิดใช้งาน' : room.status ? 'เปิดใช้งาน' : 'เปิดใช้งาน' }}
          </Button>
          <label class="thai text-sm ml-2" for="">{{ room.name }}</label>
          <label class="thai text-sm ml-2" for="">ชั้น : {{ room.floor }}</label>
          <router-link to="/editroom">
            <i class="pi pi-ellipsis-h mx-2 text-xl text-900"></i>
          </router-link>
          <Button @click="deleteRoom(room.id)" 
          class="flex justify-content-center thai text-sm bg-primary-700 h-2rem w-6rem hover:bg-primary-800 mx-2">
            ลบห้อง
          </Button>
=======
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-28rem h-6rem border-round-2xl mx-2 shadow-5">
                <Button @click="changeStatus(room.id)"
                    class="thai bg-red-700 hover:bg-red-800 text-sm h-2rem w-7rem justify-content-center ml-2">
                    เปิดใช้งาน
                </Button>
                <label class="thai text-sm ml-2" for="">{{ room.name }}</label>
                <label class="thai text-sm ml-2" for="">ชั้น : {{ room.floor }}</label>
                <router-link to="/editroom">
                    <i class="pi pi-ellipsis-h mx-2 text-xl text-900"></i>
                </router-link>
                <Button @click="deleteRoom(room.id)"
                    class="flex justify-content-center thai text-sm bg-primary-700 h-2rem w-6rem hover:bg-primary-800 mx-2">ลบห้อง</Button>
            </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    props: {
      room: Object
    },
    data() {
      return {
        hover: false
      }
    },
    methods: {
      async deleteRoom(id) {
        console.log(id)
        try {
          if (id != null) {
            const res = await axios.delete(`http://localhost:3000/api/room/${id}`, {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
              }
            })
            console.log(res.data)
            window.location.reload()
          }
        } catch (error) {
          alert("ห้องนี้มีการจองอยู่")
        }
      },
      async changeStatus(id) {
        console.log(id);
        try {
          const newStatus = !this.room.status; // Toggle the status
          const res = await axios.put(
            `http://localhost:3000/api/room/update/${id}`,
            { status: newStatus }, // Set the new status
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          console.log(res.data);
          this.room.status = newStatus; // Update the room status locally
        } catch (error) {
          alert("ห้องนี้มีการจองอยู่");
        }
      },
    },
  }
  </script>
  