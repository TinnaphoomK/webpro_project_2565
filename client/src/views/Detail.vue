<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'

export default {
    components: {
        Navbar,
        CardItem
    },
    data(){
        
    }
};
</script>

<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl mt-6">
        <router-link to="/detail" class="thai first text-primary-600 hover:text-primary-600">รายละเอียด</router-link>
        <router-link to="/reservetable" class="thai ml-8 text-gray-900 hover:text-primary-600">รายการจอง</router-link>

        <div class="card mx-8 my-3 py-6 shadow-5 border-round-sm bg-white">
            <div class="flex justify-content-center flex-wrap card-container">
                <div class="flex align-items-center justify-content-center">
                    <img src="../assets/img/auditorium.jpeg" class="w-30rem h-30rem border-round-2xl my-4 mx-8" alt="">
                    <div class="flex flex-column card-container mx-7 my-6 justify-content-start align-self-start">
                        <div class="flex flex-column w-30rem bg-transparent font-bold text-6xl text-gray-900 border-round">
                            Auditorium</div>
                        <div
                            class="thai flex flex-column w-30rem bg-transparent font-semi-bold text-3xl text-gray-900 border-round mt-6">
                            รายละเอียด</div>
                        <div class="thai flex flex-column text-gray-500">ชั้น : 1</div>
                        <div class="thai flex flex-column text-gray-500">จำนวนที่นั่ง : 222</div>
                        <div class="thai flex flex-column text-gray-500">อุปกรณ์ : เยอะ ถามยามดู</div>
                        <div class="thai flex flex-column text-gray-500">มักใช้ในโอกาส : กินข้าว</div>
                        <router-link to="/reserve">
                            <Button
                                class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl w-16rem h-4rem justify-content-center shadow-5 mt-6">ยืนยันการจอง</Button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
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

.thai {
    font-family: 'Mitr', sans-serif;
}

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
}

.first {
    margin-left: 10%;
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
