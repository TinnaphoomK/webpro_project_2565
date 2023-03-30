<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl my-6">
        <router-link to="/history" class="thai first text-primary-600 hover:text-primary-600">ประวัติการจอง</router-link>
        <router-link to="/reporthistory"
            class="thai ml-8 text-gray-900 hover:text-primary-600">ประวัติการรายงาน</router-link>

        <div class="card mx-8 my-3 py-8 shadow-5 border-round-sm bg-white">
            <div>
                <div class="thai text-lg font-normal text-gray-600" style="margin-left: 18%; margin-top: 3.4%;">รอดำเนินการ
                    (2)</div>
                <HistoryPending></HistoryPending>
                <HistoryPending></HistoryPending>

                <div class="thai text-lg font-normal text-gray-600" style="margin-left: 18%; margin-top: 4.5%;">เสร็จสิ้น
                    (3)</div>

                <HistoryComplete></HistoryComplete>
                <HistoryComplete></HistoryComplete>
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
                class="flex align-items-center justify-content-center thai bg-white text-primary-800 shadow-5 w-16rem h-6rem text-4xl border-round-2xl">
                ประวัติการจอง</div>
        </div>
    </div>
    <div>
        <div class="thai" style="margin-left: 18%; margin-top: 3.4%;">รอดำเนินการ (2)</div>
        <HistoryPending></HistoryPending>
        <HistoryPending></HistoryPending>

        <div class="thai" style="margin-left: 18%; margin-top: 4.5%;">เสร็จสิ้น (3)</div>

        <HistoryComplete></HistoryComplete>
        <HistoryComplete></HistoryComplete>
    </div>
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

.footerbg {
    background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165), rgb(3, 8, 16));
}

.thai {
    font-family: 'Mitr', sans-serif;
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


<script>
import Navbar from '../components/Navbar.vue';
import HistoryPending from '../components/HistoryPending.vue';
import HistoryComplete from '../components/HistoryComplete.vue';

export default {
    components: {
        Navbar,
        HistoryPending,
        HistoryComplete
    },
    data() {
        return {
            reservations: []
        }
    },
    created() {
        const storedReservations = localStorage.getItem('reservations');
        if (storedReservations) {
            this.reservations = JSON.parse(storedReservations);
        }
    }
}
</script>