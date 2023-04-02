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
        <router-link to="/detail" class="thai first text-gray-900 hover:text-primary-600">รายละเอียด</router-link>
        <router-link to="/reserve" class="thai ml-8 text-primary-600 hover:text-primary-600">รายการจอง</router-link>

        <div class="flex flex-column card mx-8 mt-3 py-6 shadow-5 border-round-sm bg-white justify-content-center">
            <label class="flex justify-content-center text-center text-5xl" for="">Room name</label>
            <DataTable class="flex justify-content-center my-4" :value="queue" showGridlines tableStyle="min-width: 50rem">
                <Column field="name" header="ชื่อผู้จอง"></Column>
                <Column field="date" header="วันที่จอง"></Column>
                <Column field="time" header="เวลาที่จอง"></Column>
            </DataTable>
        </div>


    </div>
    <div
        class="flex absolute footerbg bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
        <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
        Space Creator
    </div>
</template>

<!-- <template>
    <Navbar></Navbar>

    <div class="relative text-left justify-text-center font-bold text-2xl mt-6">
        <router-link to="/detail" class="thai first text-primary-600 hover:text-primary-600">รายละเอียด</router-link>
        <router-link to="/reserve" class="thai ml-8 text-gray-900 hover:text-primary-600">รายการจอง</router-link>

        <div class="cardbg mt-4 shadow-5">

            <div class="justify-content-center">
                <div class="grid justify-content-center">
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                </div>

            </div>
            <div class="ml-6 mt-4">
                <label for="startdate" class="thai text-xl ml-8">วันที่เริ่มจอง</label>
                <InputText id="startdate" v-model="startdate" name="startdate" type="date"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2 mb-4" style="width: 30%;" />

                <label for="enddate" class="thai text-xl ml-8">วันที่เริ่มจอง</label>
                <InputText id="enddate" v-model="enddate" name="enddate" type="date"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2 mb-4" style="width: 30%;" />
            </div>
            <div class="ml-6 mt-4">
                <label for="starttime" class="thai text-xl ml-8 mr-6">ตั้งแต่</label>
                <InputText id="starttime" v-model="starttime" name="starttime" type="time"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2" style="width: 30%;" />

                <label for="endtime" class="thai text-xl ml-8 mr-3">ถึงเวลา</label>
                <InputText id="endtime" v-model="endtime" name="endtime" type="time"
                    class="p-inputtext-lg shadow-2 mr-8 ml-6 mt-2 mb-6" style="width: 30%;" />
            </div>

            <label for="comment" class="absolute thai text-xl" style="margin-left: 6%;">หมายเหตุ</label>
            <div class="text-center">
                <Textarea v-model="value" class="shadow-5" style="margin-left: 10%; margin-bottom: 3.2%;" rows="5"
                    cols="136" />
            </div>

            <Button @click="saveInputs" class="thai border-round-xl text-xl absolute w-12rem h-3rem justify-content-center"
                style="right: 45%; top: 90%; background-color: rgb(35, 87, 165);">ยืนยันการจอง</Button>
        </div>

    </div>
</template> -->

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
