<script>
import Navbar from '../components/Navbar.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios';

export default {
    components: {
        Navbar,

    },
    data() {
        return {
            userId: null,
            reservation: [],
            columns: [
                { field: 'User.studentId', header: 'รหัสนักศึกษา' },
                { field: 'Room.name', header: 'ห้องที่จอง' },
                { field: 'dateTimeStart', header: 'วันที่จอง' },
                { field: 'dateTimeStart', header: 'เวลาที่เริ่มจอง' },
                { field: 'dateTimeEnd', header: 'เวลาที่สิ้นสุดการจอง' },
            ]
        };
    },
    mounted() {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));
        this.student = JSON.parse(localStorage.getItem("user")).studentId
        this.userId = user.id
        this.allreserve()
        if (token) {
            this.username = user.firstName;
            this.isLoggedIn = true;

        }
    },
    computed: {
        pendingReservations() {
            console.log(this.student);
            return this.reservation.filter(reservation => reservation.status === "approved");
        }

    },
    created: function () {
    },
    methods: {
        async allreserve() {
            const res = await axios.get(`http://localhost:3000/api/user/history/${this.userId}`)
            console.log(res.data[0].status);
            console.log(res.data)

            if (res.data != null) {
                this.reservation = res.data[0].Reservation
            } else {
                this.reservation = []
            }
        },
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
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl mt-6">
        <router-link to="/reserve" class="thai first text-primary-600">รายการจอง</router-link>

        <div class="flex flex-column card mx-8 mt-3 py-6 shadow-5 border-round-sm bg-white justify-content-center">
            <label class="thai flex justify-content-center text-center text-5xl my-4" for="">ตารางจองคิว</label>
            <div class="flex thai justify-content-center">
                <DataTable :value="pendingReservations" showGridlines tableStyle="min-width: 50rem">
                    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
                </DataTable>

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

table,
th,
td {
    border: 1px solid black;
    border-collapse: collapse;
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
