
<template>
  <!-- login -->
  <div class="rectangle">
    <div class="blue-half border-round-left-2xl shadow-5">
      <h1 class="bg-transparent text-white text-center">SPACE CREATOR</h1>
      <div class="bar"></div>
      <h2 class="bg-transparent text-yellow-400 text-center">your space, your choice</h2>
      <center class="bg-transparent">
        <img class="itpic border-round-xl" src="../assets/img/itkmitl.jpeg" alt="">
      </center>
    </div>
    <div class="white-half border-round-right-2xl shadow-5">
      <form class="absolute h-30rem">

        <label for="username"  class="text-xl mx-7">Username</label>
        <InputText id="username" v-model="username" placeholder="Fill your username" name="username" type="text" class="p-inputtext-lg shadow-2 mx-7" style="width: 80%;" />
        <br>
        <label for="password" class="text-xl mx-7">Password</label>
        <InputText id="password" v-model="password" placeholder="Set your password" name="password" type="password" class="p-inputtext-lg shadow-2 mx-7"
          style="width: 80%;" />
        <br><br> 
        <router-link to="/">
          <Button @click='signup()' class="absolute text-center justify-content-center text-bold text-2xl mx-7"
            style="width: 76%; height: 12%;background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165));">Sign
            up</Button><br><br><br><br><br>
        </router-link>
        <label for="password" class="text-center">already have an account ?<a class="bg-transparent" href="./"> Sign
            in</a></label>
      </form>
    </div>
  </div>

  <!-- footer -->
  <div class="footer h-3rem fixed text-white text-center pt-3">
    <img src="../assets/img/cc.png" class="bg-transparent" style="width: 0.9%;" alt=""> All Right Reserved | Space Creator
  </div>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  background-color: rgb(213, 219, 231);
  font-family: 'Inter', sans-serif;
  margin: 0;
}

h1 {
  font-size: 3.5rem;
  margin-top: 15%;
}

h2 {
  font-size: 2rem;
  margin-top: 3%;
  margin-bottom: 4%;
}

.centered-element {
  margin-top: 10%;
  position: absolute;
}

.footer {
  background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165), rgb(3, 8, 16));
  bottom: 0;
  width: 100%;
}

.rectangle {
  height: 75vh;
  width: 75vw;
  /* Position the rectangle in the center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.itpic {
  width: 640px;
  height: 425px;
  object-fit: cover;
}

.bar {
  height: 0.7vh;
  width: 30vw;
  /* Position the rectangle in the center */
  position: absolute;
  top: 25%;
  left: 25%;
  background-color: white;
  transform: translate(-50%, -50%);
}

/* Set the blue and white split color scheme */
.blue-half {
  height: 100%;
  width: 50%;
  float: left;
  background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165));
}

.white-half {
  height: 100%;
  width: 50%;
  float: right;
  background-color: white;
}

/* Style the form */
form {
  width: 50%;
  margin: 0 auto;
  margin-top: 6%;
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

input[type="submit"] {
  background-color: blue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
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

        // Navigate to the sign-in page
        this.$router.push('/signin');
      }
    }
  }
};
</script>