<template>
    <Navbar></Navbar>
    <!-- badge -->
    <div class="his bg-white shadow-5 w-2 h-6rem justify-content-center text-center text-5xl align-items-center border-round-2xl"
        style="margin-left: 42%; margin-top: 3%;padding-top: 1%; margin-bottom: 3%;">
        รายงาน
    </div>
    <div class="text-center">
        <label for="topic" class="thai text-xl ml-8">หัวข้อ</label>
        <InputText id="startdate" v-model="startdate" name="startdate" type="text"
            class="p-inputtext-lg shadow-2 mr-8 ml-4 mb-4" style="width: 30%;" />


        <label for="roomid" class="thai text-xl ml-8">หมายเลขห้อง</label>
        <InputText id="startdate" v-model="startdate" name="startdate" type="text"
            class="p-inputtext-lg shadow-2 mr-8 ml-4 mb-4" style="width: 30%;" /><br>

        <label for="comment" class="flex absolute thai text-xl" style="margin-left: 9%; margin-top: 3%;">หมายเหตุ</label>
        <Textarea v-model="value" class="shadow-5" style="margin-top: 2%; margin-left: 4%;" rows="20" cols="167" />
    </div>

    <router-link to="/reporthistory">
        <Button class="thai border-round-xl text-xl absolute w-12rem h-3rem justify-content-center shadow-5"
            style="right: 45%; top: 88%; background-color: rgb(35, 87, 165);">ยืนยันการจอง</Button>
    </router-link>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.his {
    font-family: 'Mitr', sans-serif;
    color: rgb(35, 87, 165);
}

.thai {
    font-family: 'Mitr', sans-serif;
}

.bar {
    height: 0.2vh;
    width: 58vw;
    /* Position the rectangle in the center */
    position: absolute;
    top: 33%;
    left: 53%;
    background-color: #9E9999;
    transform: translate(-50%, -50%);
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

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: {
        Navbar
    }
}
</script>