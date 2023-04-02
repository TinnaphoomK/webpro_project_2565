<template>
  <Navbar></Navbar>
  <!-- badge -->
  <div class="card">
    <div class="flex justify-content-center flex-wrap card-container mt-4">
      <div
        class="thai flex align-items-center justify-content-center badge bg-white text-primary-800 shadow-5 w-16rem h-6rem text-4xl border-round-2xl">
        รายงาน</div>
    </div>
  </div>
  <div class="text-center justify-content-between mt-4">

    <div class="flex flex-column justify-content-center">
      <label class="flex thai mx-8 px-4" for="">เนื้อหา</label>
      <Textarea v-model="comment" class="flex flex-column shadow-5 justify-content-center my-4 mx-8 h-24rem" cols="100" />
    </div>
  </div>
  <div class="flex text-center justify-content-center mt-4">
    <Button
      class="thai bg-primary-800 hover:bg-primary-900 justify-content-center border-round-xl text-xl w-12rem h-3rem py-5 justify-content-center shadow-5"
      @click="saveReportToLocalStorage">
      ยืนยันการจอง
    </Button>
  </div>
</template>
  
  
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
  font-family: 'Inter', sans-serif;
  margin: 0;
}

body {
  background-color: rgba(35, 87, 165, 0.1);
}

.navbg {
  background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
}

.thai {
  font-family: 'Mitr', sans-serif;
}

.bar {
  height: 0.2vh;
  width: 58vw;
  /* Position the rectangle in the center */
  position: absolute;
  top: 33%;
  left: 53%;
  background-color: #9E9999;
  transform: translate(-50%, -50%);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      topic: "",
      roomid: "",
      comment: "",
    };
  },
  methods: {
    saveReportToLocalStorage() {
      const report = {
        topic: this.topic.toString(),
        roomid: this.roomid.toString(),
        comment: this.comment.toString()
      }
      localStorage.setItem("report", JSON.stringify(report));
      this.$router.push('/reporthistory');
    }
  },
};
</script>
