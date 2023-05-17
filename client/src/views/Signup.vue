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



        <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid" action="">

          <div class="field">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="email" :class="{ 'p-error': v$.email.$invalid && submitted }">Email</label>
            <div class="flex">
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="email" name="email"
                v-model="v$.email.$model" :class="{ 'p-invalid': v$.email.$invalid && submitted }" />
                <small v-if="(v$.email.$invalid && submitted) || v$.email.$pending.$response" class="p-error">{{
                  v$.email.required.$message.replace('Value', 'Email') }}</small>
            </div>
          </div>

          <div class="field">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="studentid" :class="{ 'p-error': v$.studentId.$invalid && submitted }">Student ID</label>
            <div class="flex">
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="studentid" name="studentid"
                v-model="v$.studentId.$model" :class="{ 'p-invalid': v$.studentId.$invalid && submitted }" />
                <small v-if="(v$.studentId.$invalid && submitted) || v$.studentId.$pending.$response" class="p-error">{{
                  v$.studentId.required.$message.replace('Value', 'Student ID') }}</small>
            </div>
          </div>

          <div class="flex my-1 justify-content-between">
            <div class="field">
              <label class="flex text-black-alpha-90 justify-content-start" for="firstname"
                :class="{ 'p-error': v$.firstname.$invalid && submitted }">Firstname</label>
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mt-1" id="firstname" name="firstname"
                v-model="v$.firstname.$model" :class="{ 'p-invalid': v$.firstname.$invalid && submitted }" />
              <small v-if="(v$.firstname.$invalid && submitted) || v$.firstname.$pending.$response" class="p-error">{{
                v$.firstname.required.$message.replace('Value', 'First name') }}</small>

            </div>
            <div class="field">
              <label class="flex text-black-alpha-90 justify-content-start" for="lastname">Lastname</label>
              <InputText class="flex p-inputtext-sm h-2rem w-full shadow-1 mt-1" id="lastname" name="lastname"
                v-model="v$.lastname.$model" :class="{ 'p-invalid': v$.lastname.$invalid && submitted }"/>
              <small v-if="(v$.lastname.$invalid && submitted) || v$.lastname.$pending.$response" class="p-error">{{
                v$.lastname.required.$message.replace('Value', 'Last name') }}</small>
            </div>
          </div>

          <div class="field">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" type="password"
              for="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }">Password</label>
            <div class="flex">
              <InputText type="password" class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="password"
                name="password" v-model="v$.password.$model" :class="{ 'p-invalid': v$.password.$invalid && submitted }"/>
                <small v-if="(v$.password.$invalid && submitted) || v$.password.$pending.$response" class="p-error">{{
                  v$.password.required.$message.replace('Value', 'Password') }}</small>
            </div>
          </div>

          <div class="field">
            <label class="flex text-black-alpha-90 justify-content-start mx-4" for="confirmPassword" :class="{ 'p-invalid': v$.confirmPassword.$invalid && submitted }">Confirm
              Password</label>
            <div class="flex">
              <InputText type="password" class="flex p-inputtext-sm h-2rem w-full shadow-1 mx-4 mt-1" id="confirmPassword"
                name="confirmPassword" v-model="v$.confirmPassword.$model" :class="{ 'p-invalid': v$.confirmPassword.$invalid && submitted }"/>
                <small v-if="(v$.confirmPassword.$invalid && submitted) || v$.confirmPassword.$pending.$response" class="p-error">{{
                  v$.confirmPassword.required.$message.replace('Value', 'Confirm password') }}</small>
            </div>
          </div>

          <Button type="submit"
            class="flex justify-content-center bg-primary-700 hover:bg-primary-800 text-white p-button-text p-button-plain">Sign
            up</Button>
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      studentId: "",
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      submitted: false,
    };
  },
  validations() {
    return {
      firstname: { required },
      lastname: { required },
      studentId: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs(this.password) }
    }
  },
  methods: {
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (!isFormValid) {
        console.log("asd")
        return;
      }
      this.signup();
    },
    resetForm() {
      this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.submitted = false;
    },
    async signup() {
      try {

        const res = await axios.post("http://localhost:3000/api/auth/register", this.registerData);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        this.resetForm();
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
