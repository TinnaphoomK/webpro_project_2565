<template>
    <div
        class="thai bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-center w-5 h-4rem border-round-xl mx-4 mt-2 shadow-3">
        <Button class="thai bg-green-700 hover:bg-green-800 h-2rem w-7rem mx-6 justify-content-center">เปิดใช้งาน</Button>
        <label class="thai mx-2" for="">Auditorium</label>
        <label class="thai mx-2" for="">ชั้น 1</label>
        <router-link to="/editroom">
            <i class="pi pi-ellipsis-h ml-6 text-xl text-900"></i>
        </router-link>
        <Button @click="deleteroom()" class="thai bg-primary-700 hover:bg-primary-800 mx-2">ลบห้อง</Button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    method:{
        async deleteroom() {
            try {
                if (room != null) {
                const res = await axios.delete(`http://localhost:3000/room/${room}`)
                if (res.data.status == "success") {
                    alert("ลบห้องสำเร็จ")
                    window.location.reload()
                } else {
                    alert("ไม่พบหมายเลขห้องที่ต้องการลบ")
                }
            }
            } catch (error) {
                alert("ไม่พบหมายเลขห้องที่ต้องการลบ")
            }
        }
    }
    }
</script>