<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
                <!-- approved -->
                <div
                    class="thai bg-green-700 font-normal text-lg text-white text-center align-items-center h-2rem w-7rem border-round-right-lg">
                    เสร็จสิ้น</div>
                <!-- not approved -->
                <!-- <div
          class="thai bg-red-700 font-normal text-white text-center justify-content-center align-items-center h-2rem w-7rem mx-2">
          ไม่อนุมัติ</div> -->
                <label class="thai ml-6" for="">ห้อง : Creative</label>
                <label class="thai ml-6" for="">วันที่จอง : 13 FEB 2023</label>
                <label class="thai ml-6" for="">เวลาที่จอง : 13:48 - 13:49</label>
                <label class="thai ml-6" for="">รหัสจอง : #1</label>
                <router-link to="/report">
                    <i class="pi pi-ellipsis-h mx-6 text-xl text-900"></i>
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