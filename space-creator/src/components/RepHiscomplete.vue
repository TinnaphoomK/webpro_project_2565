<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div class="bg-white text-green-700 text-xl font-bold flex align-items-center justify-content-center w-8 h-6rem border-round-2xl m-2 shadow-5"
                style="font-family: 'Mitr', sans-serif;">
                ห้อง : Creative | ปัญหาที่พบ : TV เปิดไม่ติด | รหัสรายงาน : #001
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