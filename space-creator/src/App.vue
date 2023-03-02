<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';

export default {

}
</script>

<template>
  <Navbar></Navbar>
  <Toast position="bottom-right" />

  <RouterView />
</template>


