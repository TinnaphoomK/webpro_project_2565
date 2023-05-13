<script lang="ts">
import axios from 'axios';
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
    methods: {
        async checkrole() {
            const role = JSON.parse(localStorage.getItem("user") || "").role
            if (role != "admin") {
                this.$router.push("/");
            }
        }
    },
    mounted() {
        this.checkrole()
    },
    created() {
        const storedReservations = localStorage.getItem('reservations');
        if (storedReservations) {
            this.reservations = JSON.parse(storedReservations);
        }
    },
}
</script>

<template>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container mt-4">
            <div
                class="flex align-items-center justify-content-center thai bg-white text-primary-800 shadow-5 w-18rem h-6rem text-4xl border-round-2xl">
                คำร้องรายงานห้อง</div>
        </div>
    </div>
    <div class="thai" style="margin-left: 18%; margin-top: 3.4%;">รอดำเนินการ (2)</div>
    <div>
        <ReportRpending></ReportRpending>
        <ReportRpending></ReportRpending>
    </div>
    <div class="thai" style="margin-left: 18%; margin-top: 4.5%;">เสร็จสิ้น (3)</div>
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

body {
    background-color: rgba(35, 87, 165, 0.1);
}

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
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

