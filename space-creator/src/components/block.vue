<template>
    <div class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-round-2xl"
        style="margin-left: 17%; margin-top: 1%;padding-top: 1.7%;">
        <div class="absolute w-10rem h-3rem text-white pt-2 border-round-right-2xl shadow-5 his"
            style="background-color:rgb(15, 120, 19);">อนุมัติ</div>
        {{ roomNames }} &emsp;&emsp;&emsp;&emsp; {{ reservation.startdate }} &emsp;&emsp;&emsp;&emsp; {{ reservation.starttime }} - {{ reservation.endtime }} &emsp;&emsp;&emsp;&emsp;
        #{{ reservation.id }}
        <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%;"></i></a>
    </div>
</template>

<script>
export default {
  props: {
    reservation: Object // pass reservation object as a prop
  },
  data() {
  return {
    reservations: [],
    startdate: '',
    enddate: '',
    starttime: '',
    endtime: '',
    value: '',
    id: 1, // initialize id to 1
    roomNames: [],
    blockList: [], // add new property to store list of blocks
  }
},
methods: {
  // ...existing methods...
  addBlock() {
    this.blockList.push({});
  },
},

  created() {
    const roomNames = JSON.parse(localStorage.getItem('roomNames')) || [];
    this.roomNames = roomNames;
  }
}
</script>
