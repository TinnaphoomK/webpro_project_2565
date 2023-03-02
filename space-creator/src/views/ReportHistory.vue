<script>
import Navbar from '../components/Navbar.vue';
import RepHispending from '../components/RepHispending.vue';
import RepHiscomplete from '../components/RepHiscomplete.vue';
export default {
    components: {
        Navbar,
        RepHispending,
        RepHiscomplete
        
    },

    computed: {
    reportData() {
      return JSON.parse(localStorage.getItem('report')) || {};
    }
  }
  };
</script>

<template>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="his bg-white shadow-5 w-3 h-6rem justify-content-center text-center text-5xl align-items-center border-round-2xl"
        style="margin-left: 37%; margin-top: 3%;padding-top: 1%;">
       {{report.topic}}
    </div>
</template>











<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.his {
    font-family: 'Mitr', sans-serif;
    color: rgb(35, 87, 165);
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
