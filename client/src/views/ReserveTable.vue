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
                { field: 'createdAt', header: 'วันที่จอง' },
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
            this.reservation.map((index) => {
                index.createdAt = index.createdAt.split("T")[0]
                index.dateTimeStart = index.dateTimeStart.slice(11,19)
                index.dateTimeEnd = index.dateTimeEnd.slice(11,19)
                console.log(index);
            })
            return this.reservation.filter(reservation => reservation.status === "approved");
        }

    },
    created: function () {
    },
    methods: {
        async allreserve() {
            const res = await axios.get('http://localhost:3000/api/reservation');
            console.log(res.data);

            if (res.data != null) {
                this.reservation = res.data ;
            } else {
                this.reservation = [];
            }
        },
    }
}
</script>

<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl mt-6">
        <div class="flex flex-column card mx-8 mt-4 pb-8 shadow-5 border-round-sm bg-white justify-content-center">
            <label class="flex thai text-primary-800 justify-content-center text-center text-7xl mt-6" for="">ตารางจองห้อง</label>
            <div class="flex text-left justify-text-center justify-content-end font-bold text-2xl mx-8 my-2">
                <!-- <div class="flex">
                    <select @input="floorselection($event)" name="floorSelect" placeholder="Select Floor ..." id="floorSelect"
                        class="flex justify-content-center text-center border-round-2xl w-10rem h-3rem font-bold text-lg cursor-pointer">
                        <option value="0" disabled selected>Select Floor...</option>
                        <option value="1">1st Floor</option>
                        <option value="M">M Floor</option>
                        <option value="2">2nd Floor</option>
                        <option value="3">3rd Floor</option>
                    </select>
                </div> -->
            </div>
            <div class="flex thai justify-content-center mt-4">
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
