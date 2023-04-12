<script lang="ts">
import Navbar from '../components/Navbar.vue';
import reserve from '../components/reserve.json'

export default {
    components: {
        Navbar,

    },
    data() {
        return {
            reservations: [],
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            value: '',
            id: 1, // initialize id to 1
            roomNames: [],
            queue: [
                {
                    name: 'นายธรรมปพน ประทุม',
                    date: '29/03/2566',
                    time: '11:50 - 13:50'
                },
                {
                    name: 'นายติณณภูมิ เกิดอินทร์',
                    date: '29/03/2566',
                    time: '11:50 - 13:50'
                },
                {
                    name: 'ไก่จ๋า',
                    date: '29/03/2566',
                    time: '11:50 - 13:50'
                },
                {
                    name: 'ไข่เจียว',
                    date: '29/03/2566',
                    time: '11:50 - 13:50'
                },
                {
                    name: 'ทูน่า',
                    date: '29/03/2566',
                    time: '11:50 - 13:50'
                },
            ]
        }
    },
    created() {
        const storedReservations = localStorage.getItem('reservations');
        if (storedReservations) {
            this.reservations = JSON.parse(storedReservations);
        }
        const storedRoomNames = localStorage.getItem('roomNames');
        if (storedRoomNames) {
            this.roomNames = JSON.parse(storedRoomNames);
        }
    },
    methods: {
        saveInputs() {

            const reservation = {
                id: this.id,
                startdate: this.startdate,
                enddate: this.enddate,
                starttime: this.starttime,
                endtime: this.endtime,
                value: this.value
            };
            const roomNames = {
                roomNames: this.roomNames
            }
            // increment id for next item
            this.id++;
            // add reservation to localStorage
            localStorage.setItem(`reservation-${reservation.id}`, JSON.stringify(reservation));
            localStorage.setItem(`{roomNames.roomNames}`, JSON.stringify(roomNames));


            this.$router.push('/history');



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
            <label class="flex justify-content-center text-center text-5xl" for="">Room name</label>
            <DataTable class="flex justify-content-center my-4" :value="queue" showGridlines tableStyle="min-width: 50rem">
                <Column field="name" header="ชื่อผู้จอง"></Column>
                <Column field="date" header="วันที่จอง"></Column>
                <Column field="time" header="เวลาที่จอง"></Column>
            </DataTable>
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
