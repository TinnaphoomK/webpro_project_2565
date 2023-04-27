<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
import { ref as storageRef, getDownloadURL, listAll, deleteObject, uploadBytes } from "firebase/storage";
import { useFirebaseStorage } from "vuefire";
const storage = useFirebaseStorage();

export default {
    data() {
        return {
            image: "",
        };
    },
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
        },
        async uploadFile(event) {
            try {
                this.roading = true;
                const file = event.target.files[0];
                const starsRef = storageRef(storage, `users/${this.userId}/${file.name}`);
                await uploadBytes(starsRef, file);
                this.getFile(this.userId);
                this.roading = false;
            } catch (error) {
                console.log(error);
            }
        },
        async getFile(userId) {
            try {
                const starsRef = storageRef(storage, "users/" + userId);
                const search = await listAll(starsRef);
                const download = (await getDownloadURL(search.items[0])).toString();
                this.image = download;
            } catch (error) {
                console.log(error);
            }
        },
        async removeFile(userId) {
            try {
                this.roading = true;
                const starsRef = storageRef(storage, "users/" + userId);
                const search = await listAll(starsRef);
                const remove = await deleteObject(search.items[0]);
                console.log(remove);
                this.roading = false;
                this.image = "";
            } catch (error) {
                console.log(error);
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
                    <div class="flex">
                        <input type="file" @change="(event) => {uploadFile(event);}">
                    </div>

                    <div class="flex flex-column card-container my-6 justify-content-center align-self-start">
                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">ชื่อห้อง</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="room" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">ชั้น</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="room" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">รายละเอียด</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="room" />
                            </div>
                        </div>

                        <div class="my-2">
                            <label class="thai flex text-sm text-black-alpha-90 justify-content-start mx-8"
                                for="room">รายละเอียดเพิ่มเติม</label>
                            <div class="flex">
                                <InputText type="room" class="flex p-inputtext-sm w-30rem shadow-1 mx-8 mt-1" id="room"
                                    v-model="room" />
                            </div>
                        </div>

                        <router-link to="/manageroom">
                            <Button
                                class="thai bg-primary-800 hover:bg-primary-900 border-round-xl text-xl w-30rem h-4rem justify-content-center shadow-5 mt-6 mx-8">ยืนยัน</Button>
                        </router-link>
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
