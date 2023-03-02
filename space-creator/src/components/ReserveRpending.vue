<template>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-left text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1.5%;padding-top: 1.7%;">
        &emsp;&emsp; &emsp;&emsp;Auditorium &emsp;&emsp;&emsp;&emsp; 9 JAN,2023 &emsp;&emsp;&emsp;&emsp; 11:00 - 13:00
        &emsp;&emsp;&emsp;&emsp;
        #10000
        <a href="">
            <div class="inline-block w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-green-700 hover:bg-green-800 hover:text-400"
                style="margin-left: 10%;">อนุมัติ</div>
        </a>
        <a href="">
            <div class="inline-block w-7rem h-3rem text-center pt-2 text-white border-round-2xl shadow-5 his bg-red-700 hover:bg-red-800 hover:text-400"
                style="margin-left: 1.5%;">ไม่อนุมัติ</div>
        </a>
        <a href=""><i class="inline-block pi pi-ellipsis-h" style="margin-left: 7.5%;"></i></a>
    </div>
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