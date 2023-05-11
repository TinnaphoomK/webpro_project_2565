<script>
import Navbar from '../components/Navbar.vue';
import HistoryPending from '../components/HistoryPending.vue';
import HistoryComplete from '../components/HistoryComplete.vue';
import HistoryReject from '../components/HistoryReject.vue';

export default {
    components: {
        Navbar,
        HistoryPending,
        HistoryComplete,
        HistoryReject
    },
    data() {
        return {
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            roomId: '',
        }
    },
    mounted() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        this.student = JSON.parse(localStorage.getItem("user")).studentId

        if (token) {
            this.username = user.firstName;
            this.isLoggedIn = true;

        }
    },
    methods: {
        tohistory() {
            this.isLoggedIn = true;
            this.$router.push(`/history/${this.student}`)
        },
        toreporthistory() {
            this.isLoggedIn = true;
            this.$router.push(`/reporthistory/${this.student}`)
        }
    }

}
</script>

<template>
    <Navbar></Navbar>

    <div class="relative text-left justify-text-center font-bold text-2xl my-6">
        <a @click.prevent="tohistory" class="thai first text-primary-600 hover:text-primary-600 cursor-pointer">ประวัติการจอง</a>
        <a @click.prevent="toreporthistory"
            class="thai ml-8 text-gray-900 hover:text-primary-600">ประวัติการรายงาน</a>

        <div class="card mx-6 my-3 py-8 shadow-5 border-round-sm bg-white">
            <div>
                <div class="mx-8">
                    <div class="thai text-lg font-normal text-gray-600 mx-4">รอดำเนินการ</div>
                    <HistoryPending></HistoryPending>
                </div>

                <div class="mx-8">
                    <div class="thai text-lg font-normal text-gray-600 mx-4 mt-6">เสร็จสิ้น</div>
                    <HistoryComplete></HistoryComplete>
                    <HistoryReject></HistoryReject>
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

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
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
