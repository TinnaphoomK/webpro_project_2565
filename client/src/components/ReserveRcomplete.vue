<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="thai bg-white text-primary-800 text-lg font-bold flex align-items-center justify-content-between w-8 h-6rem border-round-2xl m-2 shadow-5">
                <div
                    class="thai bg-green-700 text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
                    อนุมัติ</div>
                <!-- <div
                    class="thai bg-red-700 text-white text-center justify-content-center align-items-center h-2rem w-7rem mx-2">
                    ไม่อนุมัติ</div> -->
                <label class="thai mx-6" for="">Auditorium</label>
                <label class="thai mr-3" for="">13 FEB 2023</label>
                <label class="thai mx-3" for="">11:00 - 13:00</label>
                <label class="thai mx-3" for="">#10000</label>
                <router-link to="/report">
                    <i class="pi pi-ellipsis-h text-xl text-900 mx-6"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            room: 'auditorium',
            roomId: '113',
            startdate: '9 FEB 2023',
            time: '11:00 - 13:00',
            problem: 'เครื่องเสียปัญหา',
            reportnum: '#10000'
        }

    }
}
</script>