<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-center w-8 h-6rem border-round-2xl m-2 shadow-5"
                style="font-family: 'Mitr', sans-serif;">
                ห้อง : Creative | ปัญหาที่พบ : TV เปิดไม่ติด | รหัสรายงาน : #001
            </div>
        </div>
    </div>
</template>
<script>
import spacedata from '../components/db.json';

export default {
    data() {
        return {
        };
    },
    created() {
        this.spacedata = JSON.parse(JSON.stringify(spacedata));
    },
};
</script>