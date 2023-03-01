<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>

<template>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="his bg-white shadow-5 w-2 h-6rem justify-content-center text-center text-5xl align-items-center border-round-2xl"
        style="margin-left: 42%; margin-top: 3%;padding-top: 1%;">
        ประวัติการจอง
    </div>
    <div class="" style="margin-left: 18%; margin-top: 3.4%;">Pending (2)</div>
    <div class="bar"></div>

    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(35, 87, 165);">รอดำเนินการ</div>
        Auditorium &emsp;&emsp;&emsp;&emsp; 13 FEB,2023 &emsp;&emsp;&emsp;&emsp; 11:00 - 13:00 &emsp;&emsp;&emsp;&emsp;
        #10000
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1.5%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(35, 87, 165);">รอดำเนินการ</div>
        Auditorium &emsp;&emsp;&emsp;&emsp; 9 JAN,2023 &emsp;&emsp;&emsp;&emsp; 11:00 - 13:00 &emsp;&emsp;&emsp;&emsp;
        #10000
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
    <div class="" style="margin-left: 17.5%; margin-top: 4.5%;">Completed (3)</div>
    <div class="bar" style="margin-top: 18%;"></div>

    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(15, 120, 19);">อนุมัติ</div>
        Auditorium &emsp;&emsp;&emsp;&emsp; 13 FEB,2023 &emsp;&emsp;&emsp;&emsp; 11:00 - 13:00 &emsp;&emsp;&emsp;&emsp;
        #10001
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1.5%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(164, 17, 17);">ไม่อนุมัติ</div>
        Auditorium &emsp;&emsp;&emsp;&emsp; 25 FEB,2023 &emsp;&emsp;&emsp;&emsp; 09:00 - 12:00 &emsp;&emsp;&emsp;&emsp;
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

