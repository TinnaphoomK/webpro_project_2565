<template>
  <div
    class="bg-white shadow-5 w-8 h-6rem justify-content-center text-center text-xl align-items-center border-rounded-2xl"
    style="margin-left: 17%; margin-top: 1%; padding-top: 1.7%">
    <div class="absolute w-10rem h-3rem text-white pt-2 border-rounded-right-2xl shadow-5 his"
      style="background-color: rgb(15, 120, 19)">
      อนุมัติ
    </div>
    {{ roomNames }} &emsp;&emsp;&emsp;&emsp; {{ startdate }} -
    {{ enddate }} &emsp;&emsp;&emsp;&emsp; {{ starttime }} - {{ endtime }} &emsp;&emsp;&emsp;&emsp;
    #{{ id }}
    <a href=""><i class="absolute pi pi-ellipsis-h" style="margin-left: 13%"></i></a>
  </div>
</template>

<script>
export default {
  props: ['roomNames', 'startdate', 'starttime', 'enddate', 'endtime', 'id']
}
</script>
