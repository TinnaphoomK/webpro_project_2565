<script>
import SignupButton from '../components/SignupButton.vue';
import LoginButton from '../components/LoginButton.vue';

export default {
  name: 'Navbar',
  components: {
    SignupButton,
    LoginButton
  },
  data() {
    return {
      isLoggedIn: false,
      username: null // initialize username to null
    };
  },
  props: {
    display: true,
  },
  created() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      this.isLoggedIn = JSON.parse(isLoggedIn);
      if (this.isLoggedIn) {
        const signedInAccount = JSON.parse(localStorage.getItem('signedInAccount'));
        if (signedInAccount) {
          this.username = signedInAccount.username;
          console.log(signedInAccount)
        }
      }
    }
  },


  methods: {
    signout() {
      this.isLoggedIn = false;
      this.username = null; // reset username to null on logout
      localStorage.removeItem('isLoggedIn'); // remove isLoggedIn from localStorage
      localStorage.removeItem('signedInAccount');
      this.$router.push('/');
    },
  }
};
</script>


<template>
  <!-- navbar -->
  <div>
    <header>
      <div class="card">
        <div class="flex card-container">
          <!-- home -->
          <div>
            <img class="absolute w-full h-6rem" src="../assets/img/navbar.png" alt="">
          </div>
          <div class="z-1">
            <a class="text-white font-bold flex align-items-center justify-content-left ml-4"
              style="min-width: 200px; min-height: 100px" href="/">
              <img src="../assets/img/logonavbar.png" class="h-4rem" alt="" />
            </a>
          </div>


          <template v-if="isLoggedIn">
            <a class="z-1 bg-transparent text-white border-round-3xl ml-6 my-4 text-2xl font-bold flex align-items-center justify-content-center"
              style="min-width: 125px; min-height: 25px" href="/history">
              <i class="pi pi-history mr-2"></i>
              History
            </a>


            <a class="z-1 bg-transparent text-white border-round-3xl ml-6 my-4 text-2xl font-bold flex align-items-center justify-content-center"
              style="min-width: 125px; min-height: 25px" href="/manageroom">
              <i class="pi pi-user mr-2"></i>
              {{ username }}
            </a>

            <a @click.prevent="signout"
              class="z-1 bg-transparent text-white border-round-3xl ml-6 my-4 text-2xl font-bold flex align-items-center justify-content-center"
              style="min-width: 125px; min-height: 25px" href="/signin">
              <i class="pi pi-power-off mr-2"></i>
              Log out
            </a>


          </template>

          <template v-if="!isLoggedIn">
            <router-link to="/signin">
              <LoginButton></LoginButton>
            </router-link>

            <!-- sign up button -->
            <router-link to="/signup">
              <SignupButton></SignupButton>
            </router-link>
          </template>
        </div>
      </div>
    </header>
  </div>
</template>
<style>
Button {
  border-color: transparent;
}
</style>