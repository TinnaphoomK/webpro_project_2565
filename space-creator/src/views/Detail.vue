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
            // Get the current list of room names from local storage, or initialize it to an empty array if it doesn't exist yet
            const roomNames = JSON.parse(localStorage.getItem('roomNames')) || [];

            // Add the room name to the list
            roomNames.push(document.getElementById('roomname').innerText);

            // Save the updated list to local storage
            localStorage.setItem('roomNames', JSON.stringify(roomNames));
            this.$router.push('/reserve');

        }
    }
};
</script>
<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-3xl pt-6">
        <a class="thai first hover:text-primary-600 " style="color: rgb(35, 87, 165);" href="/detail">รายละเอียด</a>
        <a class="thai ml-8 hover:text-primary-600" style="color: rgb(35, 87, 165);" href="/reserve">รายการจอง</a>

        <div class="cardbg mt-4 shadow-5">

            <!-- detail -->
            <div class="justify-content-center pb-5">
                <div class="cardone bg-primary w-5 h-30rem border-round-2xl z-1 shadow-6">
                    <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                </div>

            </div>
            <div id="roomname" value="roomname" class="absolute text-6xl font-bold" style="right: 35%; top: 28%;">
                Auditorium
            </div>
            <div class="bar"></div>
            <div class="thai text-black absolute" style="right: 41%; top: 40%;">รายละเอียด</div>
            <div class="text-500 absolute" style="right: 32%; top: 47%;">
                <div class="thai">ชั้น : 1</div>
                <div class="thai">จำนวนที่นั่ง : 222</div>
                <div class="thai">อุปกรณ์ : เยอะ ถามยามดู</div>
                <div class="thai">มักใช้ในโอกาส : กินข้าว</div>
            </div>

                <Button @click="saveRoomName" class="thai border-round-xl text-xl absolute w-12rem h-4rem justify-content-center"
                    style="right: 37.5%; top: 76.5%; background-color: rgb(35, 87, 165);">ยืนยันการจอง</Button>
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

.thai {
    font-family: 'Mitr', sans-serif;
}

.cardbg {
    background-color: rgb(233, 238, 246);
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    border-radius: 10px;
    padding-top: 4%;
    padding-bottom: 4%;
}

.cardone {
    margin-left: 2%;
    margin-bottom: 1%;
}

.bar {
    height: 0.5vh;
    width: 34vw;
    /* Position the rectangle in the center */
    position: absolute;
    top: 37%;
    left: 69%;
    background-color: #000;
    transform: translate(-50%, -50%);
}

.first {
    margin-left: 13%;
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
