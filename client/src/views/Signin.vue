<template>
  <div class="flex justify-content-center align-items-center h-screen">
    <div class="flex justify-content-center">
      <div
        class="flex flex-column align-items-center justify-content-center w-30rem h-30rem p-8 bglinear border-round-left-xl shadow-5">
        <img class="flex flex-column w-5 my-4" src="../assets/img/logo.png" alt="">
        <label class="flex flex-column bg-transparent text-4xl font-bold text-white my-2" for="">SPACE CREATOR</label>
        <div class="flex flex-column bar bg-white my-2"></div>
        <label class="flex flex-column bg-transparent text-lg font-bold text-yellow-400 my-2" for="">your space, your
          choice</label>
      </div>
      <div
        class="flex flex-column align-items-center justify-content-center w-30rem h-30rem bg-white font-normal text-white border-round-right-xl shadow-5">
        <label class="flex text-black-alpha-90 text-4xl font-bold mt-6 mb-2" for="">Welcome back!</label>
        <form class="flex flex-column w-full justify-content-center" action="">

          <div class="my-2">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="email">Email</label>
            <div class="flex">
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="email"
                v-model="loginData.email" />
            </div>
          </div>

          <div class="my-2">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="password">Password</label>
            <div class="flex">
              <InputText type="password" class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="password"
                v-model="loginData.password" />
            </div>
          </div>
          <Button @click.prevent="signin()"
            class="flex bg-primary-800 text-white hover:bg-primary-900 hover:text-gray-300 justify-content-center text-bold shadow-1 mt-4 mb-2 mx-4">Sign
            in</Button>
          <div class="flex justify-content-end">
            <router-link to="/forgotpassword"
              class="flex text-sm text-primary-700 hover:text-primary-900 bg-transparent mx-4 mt-1">
              Forget password ?
            </router-link>
          </div>
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
import axios from "axios";
export default {
  data() {
    return {
      loginData: {
        email: "",
        role: "",
        password: ""
      }
    };
  },
  methods: {
    async signin() {
      try {
        if (this.loginData.email == "" || this.loginData.password == "") {
          alert("Please fill in all fields")
          return
        }
        if (!this.loginData.email.includes("@")) {
          alert("Please enter a valid email address")
          return
        }
        if (!this.loginData.email.includes(".")) {
          alert("Please enter a valid email address")
          return
        }
        if (this.loginData.email.indexOf("@") > this.loginData.email.indexOf(".")) {
          alert("Please enter a valid email address")
          return
        }

        if (this.loginData.Role == "admin"){
          const res = await axios.post("http://localhost:3000/api/auth/login", this.loginData);
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          this.$router.push("/managepage");
        }
        
        const res = await axios.post("http://localhost:3000/api/auth/login", this.loginData);
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // Check the role here
        if (res.data.user.role === "admin") {
          this.$router.push("/manageroom");
        } else {
          this.$router.push("/");
        }
      } catch (error) {
        alert(error.response.data.error)
        console.log(error.response.data.error);

      }
    },
  },
};
</script>