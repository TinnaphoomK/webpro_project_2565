<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
export default {
    components: {
        Navbar,
        CardItem
    },
};
</script>

<template>
    <!-- navbar -->
    <Navbar></Navbar>
    <!-- search bar -->
    <div class="pt-4 mt-4 text-center w-full flex justify-content-center align-items-center">
        <span class="p-float-label">
            <InputText id="search" type="text" class="p-inputtext-lg shadow-2 w-30rem" v-model="value" />
            <label for="search">Search here !</label>
        </span>

    </div>

    <!-- 1st floor -->
    <div class="relative text-left justify-text-center font-bold text-2xl pt-6">
        <router-link to="/" class="text-gray-900 ml-8">1ST FLOOR</router-link>
        <router-link to="/mfloor" class="text-gray-900 ml-6 hover:text-primary-800">M FLOOR</router-link>
        <router-link to="/2ndfloor" class="text-primary-600 ml-6">2ND FLOOR</router-link>
        <router-link to="/3rdfloor" class="text-gray-900 ml-6 hover:text-primary-800">3RD FLOOR</router-link>

            <div class="mx-7 my-2 px-5 py-6 border-round-xl shadow-5 cardbg flex gap-5">
                <CardItem/>
            </div>
            
        <div class="flex justify-content-center mx-7 my-6 px-2 py-4 border-round-xl shadow-5 cardbg">
            <div class="flex flex-column card-container text-lg mx-6 my-6 justify-content-start align-self-center">
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
            <div class="flex text-lg my-8 mx-6 justify-content-center align-items-center"><img
                    src="/src/assets/img/auditorium.jpeg" class="w-full h-full border-round-2xl my-4 mx-8" alt="">
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

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
}

.cardbg {
    background-color: rgba(35, 87, 165, 0.1);
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

