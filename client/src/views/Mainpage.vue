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
            search: ''
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
    <div
        class="flex justify-content-center align-items-center pt-4 mt-4 text-center w-full fadeindown animation-duration-200">
        <span class="p-float-label">
            <InputText id="search" type="text" class="p-inputtext-lg shadow-2"
                :style="{ width: '50rem', textAlign: 'center' }" v-model="search" />
            <label for="search">Search here !</label>
        </span>
    </div>
    <div class="flex justify-content-between  font-bold text-2xl pt-4 mx-8 my-4 fadeindown animation-duration-200">
        <div>
            <label class="flex text-6xl" for="">Room</label>
        </div>
        <div class="flex">
            <select @input="floorselection($event)" name="floorSelect" placeholder="Select Floor ..." id="floorSelect"
                class="flex justify-content-center text-center border-round-lg border-gray-400 w-10rem h-3rem font-bold text-lg cursor-pointer shadow-2 hover:border-blue-500">
                <option value="0">All Room</option>
                <option value="1">1st Floor</option>
                <option value="M">M Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
            </select>
        </div>
    </div>

    <div class="flex mx-7 mb-2 px-5 py-6 border-round-xl shadow-5 cardbg gap-5 fadeindown animation-duration-200">
        <CardItem :floor='selectFloor' :searchRoom='search' />
    </div>

    <div
        class="flex justify-content-center mx-7 my-6 px-2 py-2 border-round-xl shadow-5 cardbg fadeindown animation-duration-200">
        <div class="flex flex-column justify-content-start align-self-center card-container text-lg mx-6 my-6">
            <label class="flex flex-column w-30rem my-3 bg-transparent font-bold text-5xl text-gray-900 border-round">
                Auditorium Room</label>
            <label class="my-4" for="">For the event and meeting for each important things in faculty. Exclusively for IT
                students 🖥️</label>
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
            <div class="flex text-lg my-8 mx-6 justify-content-center align-items-center fadeindown animation-duration-200">
                <img src="/src/assets/img/auditorium.jpeg"
                    class="w-full h-full border-round-2xl my-4 mx-8 shadow-3 hover:shadow-5" alt="">
            </div>
        </router-link>
    </div>

    <div
        class="flex flex-column align-items-center mx-7 my-6 px-2 py-2 border-round-xl shadow-5 cardbg fadeindown animation-duration-200">
        <div class="flex flex-column">
            <label class="flex text-6xl font-bold my-6" for="">About Us</label>
        </div>
        <div class="flex justify-content-center">
            <div class="flex flex-column justify-content-center mx-6 w-3">
                <a href="https://www.facebook.com/thampaponn/" class="flex justify-content-center">
                    <img class="flex justify-content-center border-circle w-full shadow-3 hover:shadow-6"
                        src="../assets/img/tun1.png" alt="">
                </a>
                <label class="flex justify-content-center mt-4 font-bold text-lg" for="">Front-end Developers</label>
                <label class="flex justify-content-center mt-2 mb-6 font-bold text-lg" for="">Thampapon Prathum
                    64070046</label>
            </div>
            <div class="flex flex-column justify-content-center mx-6 w-3">
                <a href="https://www.facebook.com/Lazend3r" class="flex justify-content-center">
                    <img class="flex justify-content-center border-circle w-full shadow-3 hover:shadow-6"
                        src="../assets/img/tinz2.png" alt="">
                </a>
                <label class="flex justify-content-center mt-4 font-bold text-lg" for="">Back-end Developers</label>
                <label class="flex justify-content-center mt-2 mb-6 font-bold text-lg" for="">Tinnaphoom Kirdin
                    64070152</label>

            </div>
        </div>
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
    background-color: rgba(35, 87, 165, 0.1);
}

.thai {
    font-family: 'Mitr', sans-serif;
}

.cardbg {
    background-color: rgb(255, 255, 255);
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

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
}
</style>

