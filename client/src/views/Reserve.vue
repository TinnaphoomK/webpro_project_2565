<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
import axios from 'axios';

export default {
    components: {
        Navbar,
        CardItem
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
        this.roomId = this.$route.params.id
        this.userId = JSON.parse(localStorage.getItem("user")).id
        this.student = JSON.parse(localStorage.getItem("user")).studentId
    },
    methods: {
        async reserve() {
            try {
                console.log({
                    dateTimeStart: new Date(this.startdate + ' ' + this.starttime).toISOString(),
                    dateTimeEnd: new Date(this.enddate + ' ' + this.endtime).toISOString(),
                    roomId: this.roomId,
                    userId: this.userId
                })
                const res = await axios.post(`http://localhost:3000/api/reservation`, {
                    dateTimeStart: new Date(this.startdate + ' ' + this.starttime).toISOString(),
                    dateTimeEnd: new Date(this.enddate + ' ' + this.endtime).toISOString(),
                    roomId: parseInt(this.roomId),
                    userId: this.userId
                })
                console.log(res.data);
                this.$router.push(`/history/${this.student}`)

            }
            catch (err) {
                console.log(err);
            }
        }
    }
};
</script>

<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-2xl mt-6">
        <router-link to="/reserve" class="thai first text-primary-600">ทำการจอง</router-link>

        <div class="card mx-8 my-3 py-6 shadow-5 border-round-sm bg-white">
            <div class="flex justify-content-center flex-wrap card-container">
                <div class="flex align-items-center justify-content-center">
                    <img src="../assets/img/auditorium.jpeg" class="w-30rem h-30rem border-round-2xl my-4 mx-8" alt="">
                    <div class="flex flex-column card-container mt-3 mx-7 justify-content-start">
                        <div class="flex">
                            <div class="mt-2 mx-4 flex flex-column">
                                <label for="startdate" class="thai text-xl">วันที่เริ่มจอง</label>
                                <InputText id="startdate" v-model="startdate" name="startdate" type="date"
                                    class="p-inputtext-lg shadow-2 w-12rem" />
                            </div>
    
                            <div class="mt-2 mx-4 flex flex-column">
                                <label for="enddate" class="thai text-xl">สิ้นสุดการจอง</label>
                                <InputText id="enddate" v-model="enddate" name="enddate" type="date"
                                    class="p-inputtext-lg shadow-2 w-12rem" />
                            </div>
                        </div>
                        <div class="flex">
                            <div class="mt-2 mx-4 flex flex-column">
                                <label for="starttime" class="thai text-xl">ตั้งแต่เวลา</label>
                                <InputText id="starttime" v-model="starttime" name="starttime" type="time"
                                    class="p-inputtext-lg shadow-2 w-12rem" />
                            </div>
    
                            <div class="mt-2 mx-4 flex flex-column">
                                <label for="endtime" class="thai text-xl">จนถึงเวลา</label>
                                <InputText id="endtime" v-model="endtime" name="endtime" type="time"
                                    class="p-inputtext-lg shadow-2 w-12rem" />
                            </div>
                        </div>
                        <div class="mt-2 mx-4 flex flex-column">
                            <label for="starttime" class="thai text-xl">หมายเหตุ</label>
                            <InputText id="starttime" v-model="detail" name="starttime" type="text"
                                class="p-inputtext-lg shadow-2 w-27rem" />
                        </div>
                        <div class="justify-content-center flex">
                            <Button @click.prevent="reserve()"
                                class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl w-16rem h-4rem justify-content-center shadow-5 mt-8">ยืนยันการจอง</Button>
                        </div>

                    </div>
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
