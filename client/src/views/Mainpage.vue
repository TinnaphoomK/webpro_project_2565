<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
import axios from 'axios'

export default {
    components: {
        Navbar,
        CardItem,
    },
    data() {
        return {
            room: {},
            selectFloor: '0',
        }
    },
    methods: {
        async floorselection(e) {
            this.selectFloor = e.target.value
        },
    }
}
</script>

<template>
    <Navbar></Navbar>
    <!-- <div class="flex justify-content-center align-items-center pt-4 mt-4 text-center w-full fadeindown animation-duration-400">
        <span class="p-float-label">
            <InputText id="search" type="text" class="p-inputtext-lg shadow-2 w-30rem" v-model="search" />
            <label for="search">Search here !</label>
        </span>

    </div> -->
    <div class="flex justify-content-between font-bold text-2xl pt-4 mx-8 my-4 fadeindown animation-duration-400">
        <div>
            <label class="flex text-6xl" for="">Room</label>
        </div>
        <div class="flex">
            <select @input="floorselection($event)" name="floorSelect" placeholder="Select Floor ..." id="floorSelect"
                class="flex justify-content-center text-center border-round-2xl w-10rem h-3rem font-bold text-lg cursor-pointer shadow-2">
                <option value="0">All Room</option>
                <option value="1">1st Floor</option>
                <option value="M">M Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
            </select>
        </div>
    </div>

    <div class="flex mx-7 mb-2 px-5 py-6 border-round-xl shadow-5 cardbg gap-5 fadeindown animation-duration-400">
        <CardItem :floor='selectFloor' />
    </div>

    <div class="flex justify-content-center mx-7 my-6 px-2 py-4 border-round-xl shadow-5 cardbg fadeindown animation-duration-400">
        <div class="flex flex-column justify-content-start align-self-center card-container text-lg mx-6 my-6">
            <label class="flex flex-column w-30rem my-3 bg-transparent font-bold text-5xl text-gray-900 border-round">
                Auditorium Room</label>
            <label class="my-4" for="">For the event and meeting for each important things in faculty. Exclusive</label>
            <ul class="flex flex-column list-none align-items-start">
                <li class="flex my-2 align-items-center">
                    <img class="mx-2" src="../assets/img/itcirclelogo.png" alt="">
                    220 seats
                </li>
                <li class="flex my-2 align-items-center">
                    <img class="mx-2" src="../assets/img/itcirclelogo.png" alt="">
                    Wide screen projector
                </li>
                <li class="flex my-2 align-items-center">
                    <img class="mx-2" src="../assets/img/itcirclelogo.png" alt="">
                    Stage Setup
                </li>
                <li class="flex my-2 align-items-center">
                    <img class="mx-2" src="../assets/img/itcirclelogo.png" alt="">
                    Sound Control room
                </li>
            </ul>
        </div>
        <router-link to="/detail/37">
            <div class="flex text-lg my-8 mx-6 justify-content-center align-items-center fadeindown animation-duration-400"><img
                    src="/src/assets/img/auditorium.jpeg" class="w-full h-full border-round-2xl my-4 mx-8 shadow-5" alt="">
            </div>
        </router-link>
    </div>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.first {
    margin-left: 6%;
}

body {
    background-color: white;
}

.thai {
    font-family: 'Mitr', sans-serif;
}

.cardbg {
    background-color: rgba(35, 87, 165, 0.1);
}

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
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

