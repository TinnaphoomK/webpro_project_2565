<template>
    <div  class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(15, 120, 19);">อนุมัติ</div>
        {{ spacedata.roomid }} &emsp;&emsp;&emsp;&emsp; {{ spacedata.startdate }} &emsp;&emsp;&emsp;&emsp; {{ spacedata.starttime }} - {{ spacedata.endtime }} &emsp;&emsp;&emsp;&emsp;
        #{{ spacedata.id }}
        <a href="/report"><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import spacedata from '../components/db.json';



export default {
  components: {
    Navbar,
  },
  data() {
  return {
  };
},
created() {
  this.spacedata = JSON.parse(JSON.stringify(spacedata));
},
};
</script>