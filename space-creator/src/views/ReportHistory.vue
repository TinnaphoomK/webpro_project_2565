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
    <Navbar></Navbar>
    <!-- badge -->
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container mt-4">
            <div
                class="flex align-items-center justify-content-center thai bg-white text-primary-800 shadow-5 w-18rem h-6rem text-4xl border-round-2xl">
                ประวัติการรายงาน</div>
        </div>
    </div>
    <div class="mt-4">
        <div class="thai" style="margin-left: 18%;">รอดำเนินการ (2)</div>
        <RepHispending></RepHispending>
        <RepHispending></RepHispending>
        <div class="thai mt-4" style="margin-left: 18%;">เสร็จสิ้น (3)</div>
        <RepHiscomplete></RepHiscomplete>
        <RepHiscomplete></RepHiscomplete>
    </div>
    <router-link to="/" class="flex text-center justify-content-center mt-4">
        <Button
            class="thai bg-primary-800 justify-content-center border-round-xl text-xl w-12rem h-3rem py-5 mb-4 justify-content-center shadow-5">
            กลับสู่หน้าหลัก
        </Button>
    </router-link>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.thai {
    font-family: 'Mitr', sans-serif;
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
