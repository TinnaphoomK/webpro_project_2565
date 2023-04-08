<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'

export default {
    components: {
        Navbar,
        CardItem
    },
    methods: {
        saveRoomName() {
            // Check if user is logged in
            const isLoggedIn = localStorage.getItem('isLoggedIn');

            if (isLoggedIn) {
                // Get the current list of room names from local storage, or initialize it to an empty array if it doesn't exist yet
                const roomNames = JSON.parse(localStorage.getItem('roomNames')) || [];

                // Add the room name to the list
                roomNames.push(document.getElementById('roomname').innerText);

                // Save the updated list to local storage
                localStorage.setItem('roomNames', JSON.stringify(roomNames));
                this.$router.push('/history');
                console.log('go to history')
            } else {
                // Display alert message
                alert('Please login first');
                this.$router.push('/signin');
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
                        <div class="mt-2 flex flex-column">
                            <label for="startdate" class="thai text-xl">วันที่เริ่มจอง</label>
                            <InputText id="startdate" v-model="startdate" name="startdate" type="date"
                                class="p-inputtext-lg shadow-2 w-30rem" />
                        </div>

                        <div class="mt-2 flex flex-column">
                            <label for="enddate" class="thai text-xl">สิ้นสุดการจอง</label>
                            <InputText id="enddate" v-model="enddate" name="enddate" type="date"
                                class="p-inputtext-lg shadow-2 w-30rem" />
                        </div>

                        <div class="mt-2 flex flex-column">
                            <label for="starttime" class="thai text-xl">ตั้งแต่เวลา</label>
                            <InputText id="starttime" v-model="starttime" name="starttime" type="time"
                                class="p-inputtext-lg shadow-2 w-30rem" />
                        </div>

                        <div class="mt-2 flex flex-column">
                            <label for="endtime" class="thai text-xl">จนถึงเวลา</label>
                            <InputText id="endtime" v-model="endtime" name="endtime" type="time"
                                class="p-inputtext-lg shadow-2 w-30rem" />
                        </div>
                        <div class="justify-content-center flex">
                            <Button @click="saveRoomName"
                                class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl w-16rem h-4rem justify-content-center shadow-5 mt-4">ยืนยันการจอง</Button>
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
