<script>
import Navbar from '../components/Navbar.vue';
import axios from 'axios';

export default {
    components: {
        Navbar,

    },
    data() {
        return {
            reservation: [],
        };
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
    computed: {
        pendingReservations() {
            return this.reservation.filter(reservation => reservation.status === "approved");
        }
    },
    created: function () {
        this.allreserve()
    },
    methods: {
        async allreserve() {
            const res = await axios.get('http://localhost:3000/api/reservation/')
            console.log(res.data[0].status);
            console.log(res.data)

            if (res.data != null) {
                this.reservation = res.data
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
                <table>
                    <thead>
                        <tr class="text-center">
                            <th class="thai">ชื่อผู้จอง</th>
                            <th class="thai">วันที่จอง</th>
                            <th class="thai">เวลาที่จอง</th>
                        </tr>
                    </thead>
                    <tbody v-for="(value, index) in pendingReservations" :key="index">
                        <tr class="">
                            <td class="thai">{{ this.student }}</td>
                            <td class="thai">{{ value.dateTimeStart.slice(0, 10) }}</td>
                            <td class="thai">{{ value.dateTimeStart.slice(value.dateTimeStart.indexOf('T') + 1, -5) }} - {{
                                value.dateTimeEnd.slice(value.dateTimeEnd.indexOf('T') + 1, -5) }}</td>
                        </tr>
                    </tbody>
                </table>
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
}</style>
