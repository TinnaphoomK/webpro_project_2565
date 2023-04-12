<template>
    <div>
      <router-link to="/detail" class="z-1 mx-2 flex flex-wrap gap-5">
        <div  v-for="(value,index) in room " :key="index" class="card border-round-2xl shadow-5">
            <div class="flex justify-content-start flex-wrap">
                    <img class="flex w-18rem h-10rem border-round-top-2xl" src="../assets/img/auditorium.jpeg" alt="">
            </div>
            <div class="flex bg-white w-18rem h-4rem border-round-bottom-2xl">
             
                <div   class="flex justify-content-between p-4 w-full"> 
                    <p class="text-sm text-gray-900 w-7">{{value.name}}</p>
                    <i class="flex pi pi-search text-gray-900 text-2xl  align-items-center"></i>
                </div>
            </div>
        </div></router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        room:{}
    };
  },
  mounted() {
    this.allroom()
  },

  methods:{
   async allroom(){
    const res = await axios.get('http://localhost:3000/api/room/')
    console.log(res.data);
    this.room = res.data
  
    
    }

  }
}
</script>
