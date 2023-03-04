
<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- search bar -->
    <div class="py-6 text-center w-full flex justify-content-center align-items-center">

            <InputText id="search" type="text" class="p-inputtext-lg shadow-2" style="width: 50%;" v-model="value" />
            <a href="/reporthistory"><i class="pi pi-search px-3"></i></a>

    </div>

    <!-- 1st floor -->
    <div class="relative text-left justify-text-center font-bold text-3xl pt-8">
        <a class="text-gray-900 first hover:text-primary-600" href="/">1ST FLOOR</a>
        <a class="text-gray-900 ml-8 hover:text-primary-600" href="/reporthistory">M FLOOR</a>
        <a class="text-gray-900 ml-8 hover:text-primary-600" href="/history">2ND FLOOR</a>
        <a class="text-gray-900 ml-8 hover:text-primary-600" href="/reportrequest">3RD FLOOR</a>

        <div class="tunatun mt-4 shadow-5">

            <!-- card loop -->
            <div class="grid justify-content-center">
                <div class="absolute w-10 h-11rem border-round-xl"
                    style="background-color: rgb(112, 130, 198); margin-top: 7%;"></div>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
            </div>
            <div class="grid justify-content-center mt-8">
                <div class="absolute w-10 h-11rem border-round-xl"
                    style="background-color: rgb(112, 130, 198); margin-top: 7%;"></div>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
            </div>

        </div>

    </div>
</template>

<style setup>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
    font-family: 'Inter', sans-serif;
    margin: 0;
}

.tunatun {
    background-color: rgb(233, 238, 246);
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 5%;
    border-radius: 15px;
    padding-top: 4%;
    padding-bottom: 4%;
}

.lalal {
    margin-left: 2%;
    margin-bottom: 5%;
}

.first {
    margin-left: 10%;
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
import Navbar from '../components/Navbar.vue'
import CardItem from '../components/CardItem.vue'
export default {
    components: {
        Navbar,
        CardItem
    },
};
</script>
