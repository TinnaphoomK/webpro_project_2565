<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
import { ref as storageRef, getDownloadURL, listAll, deleteObject, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
import axios from 'axios';
const storage = useFirebaseStorage();

export default {
    data() {
        return {
            userId: "",
            image: "",
            chooseImage: "",
            roomData: {
                name: "",
                floor: "",
                detail: "",
                description: "",
                totalSeat: ""
            }
        };
    },
    components: {
        Navbar,
        CardItem
    },
    mounted() {
        this.checkrole()
        this.userId = localStorage.getItem('token')
    },
    methods: {
        addImage(event) {
            const file = event.target.files[0];
            this.image = file
            this.chooseImage = URL.createObjectURL(file);
            console.log(this.chooseImage);
        },
        removeImage() {
            this.image = ""
            this.chooseImage = ""
        },
        async createRoom() {
            try {
                console.log(this.roomData)
                const res = await axios.post("http://localhost:3000/api/room", this.roomData, {
                    headers: {
                        Authorization: "Bearer " + this.userId
                    }
                })
                if (this.image && res.data.id) {
                    await this.uploadFile(res.data.id)
                }
                this.$router.push("/manageroom")
                
            } catch (error) {
                console.log(error)
            }
        },
        async uploadFile(roomId) {
            try {
                const starsRef = storageRef(storage, `rooms/${roomId}/${this.image.name}`);
                await uploadBytes(starsRef, this.image);
            } catch (error) {
                console.log(error);
            }
        },
        async checkrole() {
            const role = JSON.parse(localStorage.getItem("user")).role
            if (role != "admin") {
                this.$router.push("/");
            }
        },
    }
};
</script>

<template>
    <Navbar></Navbar>

    <div class="relative text-left justify-text-center font-bold text-2xl my-6">
        <router-link to="/detail" class="thai first text-primary-600 hover:text-primary-600">เพิ่มห้อง</router-link>

        <div class="card mx-8 my-3 py-6 shadow-5 border-round-sm bg-white">
            <div class="flex justify-content-center">
                <div class="flex align-items-center justify-content-center">
                    <div class="flex flex-column card-container mx-8 my-6 justify-content-center align-items-center">
                        <div class="w-full flex flex-column align-items-center justify-content-center"
                            v-if="this.chooseImage">
                            <img class="w-5" :src="this.chooseImage" alt="">
                            <button class="flex justify-content-center w-4 mt-4" v-if="this.chooseImage"
                                @click="removeImage">Delete image</button>
                        </div>
                        <input v-else type="file" @change="(event) => { addImage(event); }">
                    </div>

                    <div class="flex flex-column card-container my-6 justify-content-center align-self-start">
                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">ชื่อห้อง</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="roomData.name" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">ชั้น</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="roomData.floor" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">รายละเอียด</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="roomData.detail" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">รายละเอียดเพิ่มเติม</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="roomData.description" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">จำนวนที่นั่ง</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="roomData.totalSeat" />
                            </div>
                        </div>

                        <a @click.prevent="createRoom()">
                            <Button
                                class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl w-30rem h-4rem justify-content-center shadow-5 mt-6 mx-8">ยืนยัน</Button>
                        </a>
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
