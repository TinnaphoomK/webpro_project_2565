<template>
    <div
        class="thai bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-center w-5 h-4rem border-round-xl mx-4 mt-2 shadow-3">
        <input type="checkbox" id="room1" class="mx-2">
        <Button class="thai bg-green-700 hover:bg-green-800 h-2rem w-7rem mx-6">เปิดใช้งาน</Button>
        <label class="thai mx-2" for="">Auditorium</label>
        <label class="thai mx-2" for="">ชั้น 1</label>
        <router-link to="/report">
            <i class="pi pi-ellipsis-h ml-8 text-xl text-900"></i>
        </router-link>
    </div>
</template>