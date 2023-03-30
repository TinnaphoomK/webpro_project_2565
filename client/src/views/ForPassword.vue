<template>
    <!-- navbar -->
    <Navbar></Navbar>

    <!-- top bar-->
    <div class="flex justify-content-center align-items-center h-screen">
        <div class="flex justify-content-center">
            <div
                class="flex flex-column align-items-center justify-content-center w-30rem h-30rem p-8 bglinear border-round-left-xl shadow-5">
                <img class="flex flex-column w-5 my-4" src="../assets/img/logo.png" alt="">
                <label class="flex flex-column bg-transparent text-4xl font-bold text-white my-2" for="">SPACE
                    CREATOR</label>
                <div class="flex flex-column bar bg-white my-2"></div>
                <label class="flex flex-column bg-transparent text-lg font-bold text-yellow-400 my-2" for="">your space,
                    your
                    choice</label>
            </div>
            <div
                class="flex flex-column align-items-center justify-content-center w-30rem h-30rem bg-white font-normal text-white border-round-right-xl shadow-5">
                <form class="flex flex-column w-full justify-content-center" action="">

                    <div class="my-2">
                        <label class="flex text-black-alpha-90 justify-content-start mx-4" for="username">Username</label>
                        <div class="flex">
                            <InputText class="flex p-inputtext-sm w-full shadow-1 mx-4 mt-1" id="username" name="username"
                                v-model="username" />
                        </div>
                    </div>

                    <div class="my-2">
                        <label class="flex text-black-alpha-90 justify-content-start mx-4" for="newPassword">New
                            Password</label>
                        <div class="flex">
                            <InputText type="password" class="flex p-inputtext-sm w-full shadow-1 mx-4 mt-1"
                                id="newpassword" name="newpassword" v-model="newPassword" />
                        </div>
                    </div>

                    <div class="my-2">
                        <label class="flex text-black-alpha-90 justify-content-start mx-4" for="confirmpassword">Confirm
                            Password</label>
                        <div class="flex">
                            <InputText type="password" class="flex p-inputtext-sm w-full shadow-1 mx-4 mt-1"
                                id="confirmpassword" name="confirmpassword" v-model="confirmPassword" />
                        </div>
                    </div>
                    <Button @click="resetPassword()"
                        class="flex bg-primary-800 text-white hover:bg-primary-900 hover:text-gray-300 justify-content-center text-bold shadow-1 mt-4 mb-2 mx-4">Change
                        Password</Button>
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

<!-- <template>
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
                <label for="username" class="text-xl mx-7">Username</label>
                <InputText v-model="username" id="username" name="username" type="text" class="p-inputtext-lg shadow-2 mx-7"
                    style="width: 80%;" />
                <br>
                <label for="password" class="text-xl mx-7">New Password</label>
                <InputText v-model="newPassword" id="newpassword" name="newpassword" type="password" class="p-inputtext-lg shadow-2 mx-7"
                    style="width: 80%;" />
                <br>
                <label for="password" class="text-xl mx-7">Confirm Password</label>
                <InputText v-model="confirmPassword" id="conpassword" name="conpassword" type="password" class="p-inputtext-lg shadow-2 mx-7"
                    style="width: 80%;" />
                <br><br>

                    <Button @click="resetPassword" class="absolute text-center justify-content-center text-bold text-2xl mx-7 mt-3"
                        style="width: 76%; height: 12%;background-image: linear-gradient(to right, rgb(3, 8, 16), rgb(35, 87, 165));">Change
                        Password</Button><br><br><br><br><br>

                <label for="password" class="text-center mt-6">already have an account ?<a class="bg-transparent" href="/signin">
                        Sign
                        in</a></label>
            </form>
        </div>
    </div>

    <div class="footer h-3rem fixed text-white text-center pt-3">
        <img src="../assets/img/cc.png" class="bg-transparent" style="width: 0.9%;" alt=""> All Right Reserved | Space
        Creator
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
            newPassword: "",
            confirmPassword: "",
            accounts: []
        };
    },
    methods: {
        resetPassword() {
            const account = this.accounts.find(account => {
                return account.username === this.username;
            });

            if (account) {
                account.password = this.newPassword;

                localStorage.setItem('accounts', JSON.stringify(this.accounts));

                this.$router.push('/signin');
                alert("Password's changed!")
            } else {
                alert("This username does not exist.");
            }
        }
    },
    created() {
        // Load the accounts from local storage
        const accountsJson = localStorage.getItem('accounts');
        if (accountsJson) {
            this.accounts = JSON.parse(accountsJson);
        }
    }
};
</script>




