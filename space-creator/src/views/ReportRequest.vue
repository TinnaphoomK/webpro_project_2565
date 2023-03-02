<script>
import Navbar from '../components/Navbar.vue';
import ReportRpending from '../components/ReportRpending.vue';
import ReportRcomplete from '../components/ReportRcomplete.vue';
export default {
    components: {
        Navbar,
        ReportRpending,
        ReportRcomplete
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

<template>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="his bg-white shadow-5 w-3 h-6rem justify-content-center text-center text-5xl align-items-center border-round-2xl"
        style="margin-left: 37%; margin-top: 3%;padding-top: 1%;">
        คำร้องรายงานห้อง
    </div>
    <div class="" style="margin-left: 18%; margin-top: 3.4%;">Pending (2)</div>
    <div class="bar"></div>
    <ReportRpending></ReportRpending>
    <ReportRpending></ReportRpending>
    <div class="" style="margin-left: 17.5%; margin-top: 4.5%;">Completed (3)</div>
    <div class="bar" style="margin-top: 18%;"></div>
    <div class="pb-6">
        <ReportRcomplete></ReportRcomplete>
        <ReportRcomplete></ReportRcomplete>
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

