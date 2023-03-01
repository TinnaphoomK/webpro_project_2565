<script>
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
export default {
    components: {
        Navbar,
        CardItem
    },
    data() {
        return {
            startdate: '',
            enddate: '',
            starttime: '',
            endtime: '',
            value: '',
            reservations: [],
            account: []
        }
    },
    methods: {
        saveReservation() {
            const reservation = {
                startdate: this.startdate,
                enddate: this.enddate,
                starttime: this.starttime,
                endtime: this.endtime,
                value: this.value
            }
            this.reservations.push(reservation);
            localStorage.setItem('reservations', JSON.stringify(this.reservations));
        }
    }
};
</script>


<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="relative text-left justify-text-center font-bold text-3xl pt-6">
        <a class="thai first hover:text-primary-600 " style="color: rgb(35, 87, 165);" href="/detail">รายละเอียด</a>
        <a class="thai ml-8 hover:text-primary-600" style="color: rgb(35, 87, 165);" href="/reserve">รายการจอง</a>

        <div class="cardbg mt-4 shadow-5">

            <!-- detail -->
            <div class="justify-content-center">
                <div class="grid justify-content-center">
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                    <div class="cardone bg-primary w-20rem h-7rem border-round-2xl z-1 shadow-6">
                        <div class="absolute border-round-3xl" style="margin-left: 14.5%; margin-top: 10%;"></div>
                    </div>
                </div>

            </div>
            <div class="ml-6 mt-4">
                <label for="startdate" class="thai text-xl ml-8">วันที่เริ่มจอง</label>
                <InputText id="startdate" v-model="startdate" name="startdate" type="date"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2 mb-4" style="width: 30%;" />

                <label for="enddate" class="thai text-xl ml-8">วันที่เริ่มจอง</label>
                <InputText id="enddate" v-model="enddate" name="enddate" type="date"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2 mb-4" style="width: 30%;" />
            </div>
            <div class="ml-6 mt-4">
                <label for="starttime" class="thai text-xl ml-8 mr-6">ตั้งแต่</label>
                <InputText id="starttime" v-model="starttime" name="starttime" type="time"
                    class="p-inputtext-lg shadow-2 mr-8 ml-4 mt-2" style="width: 30%;" />

                <label for="endtime" class="thai text-xl ml-8 mr-3">ถึงเวลา</label>
                <InputText id="endtime" v-model="endtime" name="endtime" type="time"
                    class="p-inputtext-lg shadow-2 mr-8 ml-6 mt-2 mb-6" style="width: 30%;" />
            </div>

            <label for="comment" class="absolute thai text-xl" style="margin-left: 6%;">หมายเหตุ</label>
            <div class="text-center">
                <Textarea v-model="value" class="shadow-5" style="margin-left: 10%; margin-bottom: 3.2%;" rows="5"
                    cols="136" />
            </div>

            <router-link to="/history">
                <Button class="thai border-round-xl text-xl absolute w-12rem h-3rem justify-content-center shadow-5"
                    style="right: 45%; top: 90%; background-color: rgb(35, 87, 165);">ยืนยันการจอง</Button>
            </router-link>
        </div>

    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');


* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.thai {
    font-family: 'Mitr', sans-serif;
}

.cardbg {
    background-color: rgb(233, 238, 246);
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 5%;
    border-radius: 10px;
    padding-top: 4%;
    padding-bottom: 3%;
}

.cardone {
    margin-left: 2%;
    margin-bottom: 1%;
}

.bar {
    height: 0.5vh;
    width: 34vw;
    /* Position the rectangle in the center */
    position: absolute;
    top: 37%;
    left: 69%;
    background-color: #000;
    transform: translate(-50%, -50%);
}

.first {
    margin-left: 13%;
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
