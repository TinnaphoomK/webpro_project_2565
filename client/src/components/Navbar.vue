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
  mounted() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    this.student = JSON.parse(localStorage.getItem("user")).studentId

    if (token) {
      this.username = user.firstName;
      this.isLoggedIn = true;

    }
  },


  methods: {
    signout() {
      this.isLoggedIn = false;
      this.username = null; // reset username to null on logout
      localStorage.removeItem('user'); // remove isLoggedIn from localStorage
      localStorage.removeItem('token');
      this.$router.push('/');
    },
    tohistory() {
      this.isLoggedIn = true;
      this.$router.push(`/history/${this.student}`)
    }
  }
};
</script>


<template>
  <!-- navbar -->
  <div>
    <header>
      <div class="card">
        <div class="flex justify-content-between card-container">
          <!-- home -->
          <div class="flex absolute w-full">
            <div class="flex top-0 w-full h-6rem navbg"></div>
          </div>
          <div class="z-1">
            <a class="text-white font-bold flex align-items-center justify-content-left ml-4"
              style="min-width: 200px; min-height: 100px" href="/">
              <img src="../assets/img/logonavbar.png" class="h-4rem" alt="" />
            </a>
          </div>


          <template v-if="isLoggedIn">
            <div class="flex mx-4">
              <a class="z-1 bg-transparent text-white border-round-3xl ml-6 my-4 text-2xl font-bold flex align-items-center justify-content-center"
                style="min-width: 125px; min-height: 25px" href="/reservetable">
                <i class="pi pi-list mr-2"></i>
              Queue
              </a>

              <a @click.prevent="tohistory"
               class="z-1 bg-transparent text-white border-round-3xl ml-6 my-4 text-2xl font-bold flex align-items-center justify-content-center"
                style="min-width: 125px; min-height: 25px" >
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
            </div>

          </template>
          <template v-if="!isLoggedIn">
            <div class="flex mx-4">
              <router-link to="/signin">
                <LoginButton></LoginButton>
              </router-link>

              <!-- sign up button -->
              <router-link to="/signup">
                <SignupButton></SignupButton>
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </header>
  </div>
</template>