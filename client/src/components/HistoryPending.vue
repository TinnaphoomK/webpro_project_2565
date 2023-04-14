<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
                <div
                    class="thai bg-primary-700 text-white text-lg font-normal text-center align-items-center h-2rem w-7rem border-round-right-lg">
                    รอดำเนินการ</div>
                <label class="thai ml-6" for="">ห้อง : {{ reservation.name }}</label>
                <label class="thai ml-6" for="">วันที่จอง : {{  }}</label>
                <label class="thai ml-6" for="">เวลาที่จอง : {{  }} - {{  }}</label>
                <label class="thai ml-6" for="">รหัสจอง : #{{  }}</label>
                <label class="thai ml-6" for="">รายละเอียด : {{  }}</label>
                <router-link to="/report">
                    <i class="pi pi-ellipsis-h mx-6 text-xl text-900"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
   
}
</script>