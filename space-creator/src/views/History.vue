<template>
    <Navbar></Navbar>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container mt-4">
            <div
                class="flex align-items-center justify-content-center thai bg-white text-primary-800 shadow-5 w-16rem h-6rem text-4xl border-round-2xl">
                ประวัติการจอง</div>
        </div>
    </div>
    <div>
        <!-- badge -->
        <div class="thai" style="margin-left: 18%; margin-top: 3.4%;">รอดำเนินการ (2)</div>
        <HistoryPending></HistoryPending>
        <HistoryPending></HistoryPending>

        <div class="thai" style="margin-left: 18%; margin-top: 4.5%;">เสร็จสิ้น (3)</div>

        <HistoryComplete></HistoryComplete>
        <HistoryComplete></HistoryComplete>
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