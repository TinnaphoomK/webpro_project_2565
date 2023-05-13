<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import ManageRoomOpen from '../components/ManageRoomOpen.vue'
import ManageRoomClose from '../components/ManageRoomClose.vue'
export default {
    components: {
        Navbar,
        ManageRoomOpen,
        ManageRoomClose
    },

    methods: {
        async checkrole() {
            const role = JSON.parse(localStorage.getItem("user")).role
            if (role != "admin") {
                this.$router.push("/");
            }
        },
    },
    mounted() {
        this.checkrole()
    },
}
</script>

<template>
    <!-- navbar -->
    <Navbar></Navbar>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container my-4">
            <div
                class="flex align-items-center justify-content-center bg-white text-primary-800 shadow-5 w-16rem h-6rem text-4xl font-bold border-round-2xl">
                OFFICER</div>
        </div>
    </div>
    <div class="gridbg mx-4 mt-4 py-6 shadow-5 border-round-sm">
        <div class="flex justify-content-end mx-6">
            <router-link to="/reportrequest">
                <Button class="thai bg-primary-700 hover:bg-primary-800 mx-2">คำร้อง</Button>
            </router-link>
            <router-link to="/reserverequest">
                <Button class="thai bg-primary-700 hover:bg-primary-800 mx-2">รายการจอง</Button>
            </router-link>
            <router-link to="/addroom">
                <Button class="thai bg-primary-700 hover:bg-primary-800 mx-2">เพิ่มห้อง</Button>
            </router-link>
        </div>
        <!-- open and close card -->
        <div class="card mt-4 ml-6">
            <div class="flex justify-content-start flex-wrap card-container my-4">
                <!-- use props!!!! -->
                <ManageRoomOpen></ManageRoomOpen>
            </div>
            <div class="flex justify-content-start flex-wrap card-container my-4">
                <ManageRoomClose></ManageRoomClose>
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
    background-color: white;
}

.thai {
    font-family: 'Mitr', sans-serif;
}

.navbg {
    background-image: linear-gradient(to right, rgb(35, 87, 165), rgb(3, 8, 16), rgb(35, 87, 165));
}

Button {
    border-color: transparent;
}

.gridbg {
    background-color: rgba(35, 87, 165, 0.1);
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