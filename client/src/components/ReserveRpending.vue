<template>
    <div class="card fadeinright animation-duration-200">
        <div class="flex justify-content-center flex-wrap card-container">
            <div v-for="(value, index) in allReservations" :key="index"
                class="bg-white text-primary-800 text-xl font-bold flex align-items-center justify-content-between w-full h-6rem border-round-2xl m-2 shadow-5">
                <label class="thai text-base ml-4" for="">รหัสจอง : #{{ value.id }}</label>
                <label class="thai text-base ml-4" for="">ห้อง : {{ value.Room.name }}</label>
                <label class="thai text-base ml-4" for="">วันที่จอง : {{ value.dateTimeStart.slice(0, 19).replace("T", " เวลา ") + value.dateTimeEnd.slice(10, 19).replace("T", " ถึง ") }}</label>
                <label class="thai text-base mx-4" for="">รายละเอียด : {{ value.detail }}</label>
                <div class="flex mr-4">
                    <Button @click="reserveAccept(value.id)"
                        class="flex thai text-sm bg-green-700 hover:bg-green-800 h-2rem w-5rem mx-1 justify-content-center">Accept</Button>
                    <Button @click="reserveReject(value.id)"
                        class="flex thai text-sm bg-red-700 hover:bg-red-800 h-2rem w-5rem mx-1 justify-content-center">Reject</Button>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            allReservations: [],
            userId: ""
        };
    },
    created: async function () {
        this.userId = JSON.parse(localStorage.getItem("user")).id;
        await this.getAllReservations();
    },
    methods: {
        async reserveAccept(id) {
            try {
                const response = await axios.put(`http://localhost:3000/api/reservation/${id}`, {
                    status: 'approved'
                });
                console.log(response.data);
                window.location.reload()
                // Handle success or perform any additional operations
            } catch (error) {
                console.log(error);
                // Handle error
            }
        },
        async reserveReject(id) {
            try {
                const response = await axios.put(`http://localhost:3000/api/reservation/${id}`, {
                    status: 'rejected'
                });
                console.log(response.data);
                window.location.reload()
                // Handle success or perform any additional operations
            } catch (error) {
                console.log(error);
                // Handle error
            }
        },
        async getAllReservations() {
            try {
                const res = await axios.get(`http://localhost:3000/api/reservation/admin?status=pending`);
                console.log(res.data);

                if (res.data != null) {
                    this.allReservations = res.data;
                } else {
                    this.allReservations = [];
                }
                this.$emit('pending-count-updated', this.allReservations.length);
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>
  