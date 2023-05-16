<template>
    <!-- แสดงห้องที่  เปิด  ใช้งานอยู่ !! -->
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-28rem h-6rem border-round-2xl mx-2 shadow-5">
                <Button @click="changeStatus(room.id)"
                    class="thai bg-green-700 hover:bg-green-800 text-sm h-2rem w-7rem justify-content-center ml-2">
                    เปิดใช้งาน
                </Button>
                <label class="thai text-sm ml-2" for="">{{ room.name }}</label>
                <label class="thai text-sm ml-2" for="">ชั้น : {{ room.floor }}</label>
                <router-link to="/editroom">
                    <i class="pi pi-ellipsis-h mx-2 text-xl text-900"></i>
                </router-link>
                <Button @click="deleteRoom(room.id)"
                    class="flex justify-content-center thai text-sm bg-primary-700 h-2rem w-6rem hover:bg-primary-800 mx-2">ลบห้อง</Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        room: Object
    },
    methods: {
        async deleteRoom(id) {
            console.log(id)
            try {
                if (id != null) {
                    const res = await axios.delete(`http://localhost:3000/api/room/${id}`, {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    })
                    console.log(res.data)
                    window.location.reload()
                }
            } catch (error) {
                alert("ห้องนี้มีการจองอยู่")
            }
        },
        async changeStatus(id) {
            console.log(id);
            try {
                if (this.room.status === true) { // Check if the room status is open
                    const res = await axios.put(
                        `http://localhost:3000/api/room/update/${id}`,
                        { status: false }, // Set the status to closed
                        {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token"),
                            },
                        }
                    );
                    console.log(res.data);
                    window.location.reload();
                }
            } catch (error) {
                alert("ห้องนี้มีการจองอยู่");
            }
        },
    },
}
</script>
