<template>
  <!-- navbar -->
  <Navbar></Navbar>

  <!-- top bar-->
  <div class="flex justify-content-center align-items-center h-screen">
    <div class="flex justify-content-center">
      <div
        class="flex flex-column align-items-center justify-content-center w-30rem h-30rem p-8 bglinear border-round-left-xl shadow-5">
        <img class="flex flex-column w-5 my-4" src="../assets/img/logo.png" alt="">
        <label class="flex flex-column bg-transparent text-4xl font-bold text-white" for="">SPACE CREATOR</label>
        <div class="flex flex-column bar bg-white mb-2"></div>
        <label class="flex flex-column bg-transparent text-lg font-bold text-yellow-400" for="">your space, your
          choice</label>
      </div>
      <div
        class="flex flex-column align-items-center justify-content-center w-30rem h-30rem bg-white font-normal text-white border-round-right-xl shadow-5">
        <form class="flex flex-column w-full justify-content-center" action="">

          <div class="my-2">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="email">Email</label>
            <div class="flex">
              <InputText class="flex w-full shadow-1 mx-4 mt-1" id="email" v-model="value" />
            </div>
          </div>

          <div class="my-2">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="password">Password</label>
            <div class="flex">
              <InputText class="flex w-full shadow-1 mx-4 mt-1" id="password" v-model="value" />
            </div>
          </div>
          <Button @click.prevent="signin()"
            class="flex bg-primary-800 text-white hover:bg-primary-900 hover:text-gray-300 justify-content-center text-bold shadow-1 my-4 mx-4">Sign
            in</Button>
          <router-link to="/forgotpassword"
            class="flex text-sm text-primary-700 hover:text-primary-900 justify-content-end bg-transparent mx-4">
            Forget password ?
          </router-link>
          <div class="flex justify-content-center mt-4">
            <label for="password" class="flex justify-content-center text-gray-500 text-sm">don't have an account yet
              ?</label>
            <router-link class="flex text-sm text-primary-700 hover:text-primary-900 mx-2" to="/signup">Sign up
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div
    class="flex footerbg absolute bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
    <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
    Space Creator
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

* {
  font-family: 'Inter', sans-serif;
  margin: 0;
}

body {
  background-color: rgba(35, 87, 165, 0.1);
}

.bar {
  height: 2%;
  width: 100%;
}

.thai {
  font-family: 'Mitr', sans-serif;
}

.footerbg {
  background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165), rgb(3, 8, 16));
}

.bglinear {
  background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165))
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
export default {
  data() {
    return {
      username: "",
      password: "",
      accounts: []
    };
  },
  methods: {
    signup() {
      // Check if an account with the same username already exists
      const existingAccount = this.accounts.find(account => {
        return account.username === this.username;
      });

      if (existingAccount) {
        alert("An account with this username already exists.");
      } else {
        // Create a new account with the next available ID
        const newAccount = {
          id: this.accounts.length + 1,
          username: this.username,
          password: this.password
        };

        // Add the new account to the accounts array and save to local storage
        this.accounts.push(newAccount);
        localStorage.setItem('accounts', JSON.stringify(this.accounts));

        // Save the entered username and password to local storage
        localStorage.setItem('username', this.username);
        localStorage.setItem('password', this.password);

        // Navigate to the sign-in page
        this.$router.push('/signin');
      }
    }
  },
  created() {
    const localStorageAccounts = localStorage.getItem("accounts");
    if (localStorageAccounts) {
      this.accounts = JSON.parse(localStorageAccounts);
    }
  }
};
</script>