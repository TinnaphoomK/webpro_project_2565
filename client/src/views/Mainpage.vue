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
        <router-link to="/" class="text-primary-600 ml-8">1ST FLOOR</router-link>
        <router-link to="/mfloor" class="text-gray-900 ml-6 hover:text-primary-800">M FLOOR</router-link>
        <router-link to="/2ndfloor" class="text-gray-900 ml-6 hover:text-primary-800">2ND FLOOR</router-link>
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
        <div class="flex flex-column justify-content-center mx-7 my-6 px-2 py-8 border-round-xl shadow-5"
            style="background-color: rgba(35, 87, 165, 0.1);">
            <div class="flex flex-column card-container text-lg mx-7 my-4 justify-content-start align-self-start">
                <div class="flex flex-column w-30rem bg-transparent font-bold text-5xl text-gray-900 border-round">
                    Auditorium Room</div>
                <ul class="list-none">
                    <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </li>
                    <li>
                        Vitae sapien pellentesque habitant morbi tristique senectus et netus. Vitae proin sagittis nisl
                        rhoncus mattis.
                    </li>
                    <li>
                        Maecenas pharetra convallis posuere morbi leo urna molestie.
                    </li>
                </ul>
            </div>
        </div>

    </div>
    <div
        class="flex footerbg bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
        <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
        Space Creator
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

.footerbg {
    background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165), rgb(3, 8, 16));
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

