<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
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

    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(35, 87, 165);">รอดำเนินการ</div>
        RoomId &emsp;&emsp;&emsp;&emsp; Auditorium &emsp;&emsp;&emsp;&emsp; เครื่องเสียมีปัญหา
        &emsp;&emsp;&emsp;&emsp;
        #10000
        <div class="absolute w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-green-700"
            style="right: 21.5%; top: 38%;">เสร็จสิ้น</div>
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13.5%;"></i></a>
    </div>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(35, 87, 165);">รอดำเนินการ</div>
        RoomId &emsp;&emsp;&emsp;&emsp; Auditorium &emsp;&emsp;&emsp;&emsp; เครื่องเสียมีปัญหา
        &emsp;&emsp;&emsp;&emsp;
        #10000
        <div class="absolute w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-green-700"
            style="right: 21.5%; top: 49.5%;">เสร็จสิ้น</div>
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13.5%;"></i></a>
    </div>

    <div class="" style="margin-left: 17.5%; margin-top: 4.5%;">Completed (3)</div>
    <div class="bar" style="margin-top: 18%;"></div>

    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(15, 120, 19);">อนุมัติ</div>
        RoomId &emsp;&emsp;&emsp;&emsp; Auditorium &emsp;&emsp;&emsp;&emsp; เครื่องเสียมีปัญหา &emsp;&emsp;&emsp;&emsp;
        #10000
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1.5%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(164, 17, 17);">ไม่อนุมัติ</div>
        RoomId &emsp;&emsp;&emsp;&emsp; Auditorium &emsp;&emsp;&emsp;&emsp;&emsp; ไมค์ไม่ติด
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        #10002
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
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

