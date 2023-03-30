<template>
  <!-- navbar -->
  <Navbar></Navbar>

  <!-- top bar-->
  <div class="flex justify-content-center align-items-center h-screen">
    <div class="flex justify-content-center">
      <div
        class="flex align-items-center justify-content-center w-30rem h-30rem bg-blue-800 font-bold text-white border-round-left-xl">
        <img class="w-4" src="../assets/img/logo.png" alt="">
        <label class="bg-transparent" for="">SPACE CREATOR</label>
      </div>
      <div
        class="flex align-items-center justify-content-center w-30rem h-30rem bg-white font-bold text-white border-round-right-xl">
        2</div>
    </div>
  </div>

  <div
    class="flex footerbg absolute bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
    <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
    Space Creator
  </div>
</template>
<!-- <template>
  <div class="flex column rectangle justify-content-center">
    <div class="flex flex-column blue-half border-round-left-2xl shadow-5 justify-content-center">
      <img class="flex flex-column justify-content-center w-4 bg-transparent" src="../assets/img/logo.png" alt="">
      <label
        class="flex flex-column bg-transparent text-white text-center justify-content-center text-6xl font-bold">SPACE
        CREATOR</label>
      <div class="flex flex-column h-1rem w-30rem bg-white justify-content-center align"></div>
      <label class="flex flex-column bg-transparent text-yellow-400 text-center">your space, your choice</label>
    </div>
    <div class="white-half border-round-right-2xl shadow-5">
      <form class="absolute">

        <label for="username" class="text-xl mx-7">Username</label>
        <InputText id="username" v-model="username" name="username" placeholder="Fill your username" type="text"
          class="p-inputtext-lg shadow-2 mx-7" style="width: 75%;" />
        <br>
        <label for="password" class="text-xl mx-7">Password</label>
        <InputText id="password" v-model="password" name="password" placeholder="Set your password" type="password"
          class="p-inputtext-lg shadow-2 mx-7" style="width: 75%;" />
        <br><br>

        <router-link to="/">
          <Button @click.prevent="signin" class="absolute text-center justify-content-center text-bold text-xl mx-7"
            style="width: 70%; height: 12%;background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165));">Sign
            in</Button><br><br><br><br>
        </router-link>

        <router-link to="/forgotpassword" class="right bg-transparent">
          Forget password ?
        </router-link>

        <label for="password" class="text-center mt-8">don't have an account yet ?<a class="bg-transparent"
            href="/signup">
            Sign
            up</a></label>
      </form>
    </div>
  </div>

  <div
    class="flex footerbg absolute bottom-0 w-full h-3rem text-white text-sm align-items-center justify-content-center text-center">
    <img src="../assets/img/cc.png" class="bg-transparent mx-2" style="width: 0.9%;" alt=""> All Right Reserved |
    Space Creator
  </div>
</template> -->

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

.thai {
  font-family: 'Mitr', sans-serif;
}

.footerbg {
  background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165), rgb(3, 8, 16));
}

/* Style the form */
form {
  width: 50%;
  margin: 0 auto;
  margin-top: 7%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
}

label,
input {
  display: block;
  position: relative;
  margin-bottom: 10px;
  background-color: white;
}

a {
  color: rgb(35, 87, 165);
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
    signin() {
      // Retrieve the entered username and password from local storage
      // const enteredUsername = localStorage.getItem('username');
      // const enteredPassword = localStorage.getItem('password');

      // Check if an account with the same username exists
      const existingAccount = this.accounts.find(account => {
        return account.username === this.username;
      });

      if (!existingAccount) {
        alert("An account with this username doesn't exist. Please sign up first.");
      } else if (existingAccount.password !== this.password) {
        alert("Incorrect password. Please try again.");
      } else {
        localStorage.setItem('signedInAccount', JSON.stringify(existingAccount));
        localStorage.setItem('isLoggedIn', 'true');
        this.$router.push("/");
      }
    },
    fetchAccounts() {
      const localStorageAccounts = localStorage.getItem("accounts");
      if (localStorageAccounts) {
        this.accounts = JSON.parse(localStorageAccounts);
      }
    }
  },
  created() {
    this.fetchAccounts();
  }
};
</script>
