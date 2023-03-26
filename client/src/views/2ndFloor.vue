<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- search bar -->
    <div class="pt-4 text-center w-full flex justify-content-center align-items-center">

        <InputText placeholder="Search here!" id="search" type="text" class="p-inputtext-lg shadow-2" style="width: 50%;"
            v-model="value" />

    </div>

    <!-- 1st floor -->
    <div class="relative text-left justify-text-center font-bold text-2xl pt-6">
        <router-link to="/" class="text-gray-900 ml-8 hover:text-primary-800">1ST FLOOR</router-link>
        <router-link to="/mfloor" class="text-gray-900 ml-6 hover:text-primary-800">M FLOOR</router-link>
        <router-link to="/2ndfloor" class="text-primary-600 ml-6">2ND FLOOR</router-link>
        <router-link to="/3rdfloor" class="text-gray-900 ml-6 hover:text-primary-800">3RD FLOOR</router-link>

        <div class="mx-7 my-2 px-2 py-8 border-round-xl shadow-5" style="background-color: rgba(35, 87, 165, 0.1);">

            <!-- card loop -->
            <div class="grid justify-content-center">
                <!-- <div class="absolute w-10 h-6rem border-round-xl" style="background-color: rgb(112, 130, 198); margin-top: 7%;"></div> -->
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
            </div>
            <div class="grid justify-content-center mt-8">
                <!-- <div class="absolute w-10 h-6rem border-round-xl" style="background-color: rgb(112, 130, 198); margin-top: 7%;"></div> -->
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
                <router-link to="/detail" class="z-1 mx-2">
                    <CardItem></CardItem>
                </router-link>
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
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
export default {
    components: {
        Navbar,
        CardItem
    },
};
</script>
