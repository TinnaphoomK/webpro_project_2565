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
        <form class="flex flex-column w-full justify-content-center" action="">

          <div class="flex flex-column my-1">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="email">Email</label>
            <div class="flex">
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="email" name="email"
                v-model="registerData.email" />
            </div>
          </div>

          <div class="flex flex-column my-1">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="studentid">Student ID</label>
            <div class="flex">
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="studentid" name="studentid"
                v-model="registerData.studentId" />
            </div>
          </div>

          <div class="flex my-1 justify-content-between">
            <div class="flex flex-column justify-content-center mx-4">
              <label class="flex text-black-alpha-90 justify-content-start" for="firstname">Firstname</label>
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mt-1" id="firstname" name="firstname"
                v-model="registerData.firstName" />
            </div>
            <div class="flex flex-column justify-content-center mx-4">
              <label class="flex text-black-alpha-90 justify-content-start" for="lastname">Lastname</label>
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mt-1" id="lastname" name="lastname"
                v-model="registerData.lastName" />
            </div>
          </div>

          <div class="flex flex-column my-1">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" type="password"
              for="password">Password</label>
            <div class="flex">
              <InputText type="password" class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="password"
                name="password" v-model="registerData.password" />
            </div>
          </div>

          <div class="flex flex-column my-1">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="confirmpassword">Confirm
              Password</label>
            <div class="flex">
              <InputText type="password" class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="confirmpassword"
                name="confirmpassword" v-model="registerData.confirmPassword" />
            </div>
          </div>

          <Button @click.prevent="signup()"
            class="flex bg-primary-800 text-white hover:bg-primary-900 hover:text-gray-300 justify-content-center text-bold shadow-1 mt-4 mx-4">Sign
            up</Button>
          <div class="flex justify-content-center mt-4">
            <label for="password" class="flex justify-content-center text-gray-500 text-sm">already have an account
              ?</label>
            <router-link class="flex text-sm text-primary-700 hover:text-primary-900 mx-2" to="/signin">Sign in
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
      registerData: {
        email: "",
        studentId: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: ""
      },
    };
  },
  methods: {

    async signup() {
      try {
        if (this.registerData.password !== this.registerData.confirmPassword) {
          alert("Password not match");
          return;
        }
        if (this.registerData.email === "" || this.registerData.studentId === "" || this.registerData.firstname === "" || this.registerData.lastname === "" || this.registerData.password === "" || this.registerData.confirmPassword === "") {
          alert("Please fill all fields");
          return;
        }
        if (this.registerData.password.length < 8) {
          alert("Password must be at least 8 characters");
          return;
        }
        if (this.registerData.studentId.length !== 8) {
          alert("Student ID must be 8 characters");
          return;
        }
        if (this.registerData.password === this.registerData.studentId) {
          alert("Password cannot be the same as Student ID");
          return;
        }
        if (this.registerData.password === this.registerData.firstname) {
          alert("Password cannot be the same as Firstname");
          return;
        }
        if (this.registerData.password === this.registerData.lastname) {
          alert("Password cannot be the same as Lastname");
          return;
        }
        if (this.registerData.password === this.registerData.email) {
          alert("Password cannot be the same as Email");
          return;
        }
        if (this.registerData.email.indexOf("@") === 0) {
          alert("Please enter a valid email address");
          return;
        }
        if (this.registerData.email.indexOf("@") === -1) {
          alert("Please enter a valid email address");
          return;
        }
        if (this.registerData.email.indexOf(".") === -1) {
          alert("Please enter a valid email address");
          return;
        }
        if (this.registerData.email.indexOf("@") > this.registerData.email.indexOf(".")) {
          alert("Please enter a valid email address");
          return;
        }
        if (this.registerData.email.indexOf("@") === this.registerData.email.indexOf(".") - 1) {
          alert("Please enter a valid email address");
          return;
        }
        if (this.registerData.email.indexOf("@") === this.registerData.email.indexOf(".") + 1) {
          alert("Please enter a valid email address");
          return;
        }

        const res = await axios.post("http://localhost:3000/api/auth/register", this.registerData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.$router.push("/");
      } catch
      (error) {
        alert(error.response.data.error)
        console.log(error.response.data.error);
      }
    },
  },
};
</script>
