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
                this.$router.push('/reserve');
                console.log('go to reserve')
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
        <router-link to="/detail" class="thai first text-primary-600 hover:text-primary-600">รายละเอียด</router-link>
        <router-link to="/reserve" class="thai ml-8 text-gray-900 hover:text-primary-600">รายการจอง</router-link>

        <div class="card mx-8 mt-3 py-6 shadow-5 border-round-2xl bg-white">
            <div class="flex justify-content-around flex-wrap card-container">
                <div class="flex align-items-center justify-content-center">
                    <img src="../assets/img/auditorium.jpeg" class="w-30rem h-30rem border-round-2xl" alt="">
                </div>
                <div class="mt-3">
                    <div class="flex w-30rem bg-transparent font-bold text-6xl text-gray-900 border-round">
                        Auditorium</div>
                    <div class="thai flex w-30rem bg-transparent font-semi-bold text-3xl text-gray-900 border-round mt-6">
                        รายละเอียด</div>
                    <div class="thai">ชั้น : 1</div>
                    <div class="thai">จำนวนที่นั่ง : 222</div>
                    <div class="thai">อุปกรณ์ : เยอะ ถามยามดู</div>
                    <div class="thai">มักใช้ในโอกาส : กินข้าว</div>
                    <Button @click="saveRoomName"
                        class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl absolute w-12rem h-4rem justify-content-center shadow-5 mt-8">ยืนยันการจอง</Button>
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
