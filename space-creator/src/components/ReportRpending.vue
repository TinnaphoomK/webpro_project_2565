<template>
    <div class="card">
        <div class="flex justify-content-center flex-wrap card-container">
            <div
                class="bg-white text-primary-800 text-lg font-bold flex align-items-center justify-content-between w-8 h-6rem border-round-2xl m-2 shadow-5">
                <label class="thai ml-4" for="">ห้อง : Auditorium</label>
                <label class="thai ml-6" for="">วันที่จอง : 13 FEB 2023</label>
                <label class="thai ml-6" for="">เวลาที่จอง : 11:00 - 13:00</label>
                <label class="thai ml-6" for="">รหัสจอง : #10000</label>
                <router-link to="/report">
                    <i class="pi pi-ellipsis-h mx-4 text-xl text-900"></i>
                </router-link>
            </div>
        </div>
    </div>
    <!-- <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(35, 87, 165);">รอดำเนินการ</div>
        &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;{{ roomId }} &emsp;&emsp;&emsp;&emsp; {{ room }}
        &emsp;&emsp;&emsp;&emsp;
        {{ problem }}
        &emsp;&emsp;&emsp;&emsp;
        {{ reportnum }}
        <a href="">
            <div class="inline-block w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-green-700 hover:bg-green-800 hover:text-400"
                style="margin-left: 10%;">เสร็จสิ้น</div>
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