<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="thai bg-white text-primary-800 text-lg font-bold flex align-items-center justify-content-between w-8 h-6rem border-round-2xl m-2 shadow-5">
                <label class="thai mx-6" for="">Auditorium</label>
                <label class="thai mr-3" for="">13 FEB 2023</label>
                <label class="thai mx-3" for="">11:00 - 13:00</label>
                <label class="thai mx-3" for="">#10000</label>
                <Button
                    class="thai bg-green-700 hover:bg-green-800 justify-content-center align-items-center h-2rem w-7rem mx-1">อนุมัติ</Button>
                <Button
                    class="thai bg-red-700 hover:bg-red-800 justify-content-center align-items-center h-2rem w-7rem mx-1">ไม่อนุมัติ</Button>
                <router-link to="/report">
                    <i class="pi pi-ellipsis-h text-xl text-900 mx-6"></i>
                </router-link>
            </div>
        </div>
    </div>
    <!-- <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-left text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1.5%;padding-top: 1.7%;">
        &emsp;&emsp; &emsp;&emsp;{{ room }} &emsp;&emsp;&emsp;&emsp; {{ startdate }} &emsp;&emsp;&emsp;&emsp; {{ time }}
        &emsp;&emsp;&emsp;&emsp;
        {{ reportnum }}
        <a href="">
            <div class="inline-block w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-green-700 hover:bg-green-800 hover:text-400"
                style="margin-left: 10%;">อนุมัติ</div>
        </a>
        <a href="">
            <div class="inline-block w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-red-700 hover:bg-red-800 hover:text-400"
                style="margin-left: 1.5%;">ไม่อนุมัติ</div>
        </a>
        <a href=""><i class="inline-block pi pi-ellipsis-h" style="margin-left: 7.5%;"></i></a>
    </div> -->
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