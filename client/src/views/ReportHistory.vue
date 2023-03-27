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
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl my-6">
        <router-link to="/history" class="thai first text-gray-900 hover:text-primary-600">ประวัติการจอง</router-link>
        <router-link to="/reporthistory"
            class="thai ml-8 text-primary-600 hover:text-primary-600">ประวัติการรายงาน</router-link>

        <div class="card mx-8 my-3 py-6 shadow-5 border-round-sm bg-white">
            <div>
                <div class="thai text-lg font-normal text-gray-600" style="margin-left: 18%; margin-top: 3.4%;">รอดำเนินการ
                    (2)</div>
                <RepHispending></RepHispending>
                <RepHispending></RepHispending>

                <div class="thai text-lg font-normal text-gray-600" style="margin-left: 18%; margin-top: 4.5%;">เสร็จสิ้น
                    (3)</div>

                <RepHiscomplete></RepHiscomplete>
                <RepHiscomplete></RepHiscomplete>
            </div>
        </div>
    </div>
    <div
        class="flex footerbg bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
        <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
        Space Creator
    </div>
</template>
<!-- <template>
    <Navbar></Navbar>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container mt-4">
            <div
                class="flex align-items-center justify-content-center thai bg-white text-primary-800 shadow-5 w-18rem h-6rem text-4xl border-round-2xl">
                ประวัติการรายงาน</div>
        </div>
    </div>
    <div class="mt-3">
        <div class="thai" style="margin-left: 18%;">รอดำเนินการ (2)</div>
        <RepHispending></RepHispending>
        <RepHispending></RepHispending>
        <div class="thai mt-4" style="margin-left: 18%;">เสร็จสิ้น (3)</div>
        <RepHiscomplete></RepHiscomplete>
        <RepHiscomplete></RepHiscomplete>
    </div>
    <router-link to="/" class="flex text-center justify-content-center mt-4">
        <Button
            class="thai bg-primary-800 hover:bg-primary-900 justify-content-center border-round-xl text-xl w-12rem h-3rem py-5 mb-2 justify-content-center shadow-5">
            กลับสู่หน้าหลัก
        </Button>
    </router-link>
</template> -->

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

.first {
    margin-left: 10%;
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
