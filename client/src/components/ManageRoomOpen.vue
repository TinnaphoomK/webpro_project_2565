<template>
    <div
        class="thai bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-center w-28rem h-4rem border-round-xl mx-2 shadow-3">
        <Button class="thai bg-red-700 hover:bg-red-800 h-2rem w-7rem mx-6 justify-content-center">ปิดใช้งาน</Button>
        <label class="thai mx-2" for="">{{ room.name }}</label>
        <label class="thai mx-2" for="">ชั้น : {{ room.floor }}</label>
        <router-link to="/editroom">
            <i class="pi pi-ellipsis-h ml-6 text-xl text-900"></i>
        </router-link>
        <Button @click="deleteRoom(room.id)" class="thai bg-primary-700 hover:bg-primary-800 mx-2">ลบห้อง</Button>
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
        }
    },
}
</script>
