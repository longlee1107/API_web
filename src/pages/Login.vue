<template>
<div class="background">
    <form action="" class="border-1 text-left border-black" @submit.prevent="false">
        <div class="container w-3/4 lg:w-1/2">
            <h1 class="font-bold text-2xl mb-7">Log In</h1>
            <hr class="border-1 border-solid border-slate-100">
            <label for="email"><b>Email</b></label>
            <input v-model="LoginEmail" type="text" placeholder="Enter Email" name="email" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label for="psw"><b>Password</b></label>
            <input v-model="LoginPassword" type="password" placeholder="Enter Password" name="psw" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <div class="flex justify-between">
                <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>
            <p>
                Don't have an account?
                <router-link to="/register">
                    <a href="#" class="text-red-500">Register</a>
                </router-link>
            </p>
            </div>
            <p class="my-4">By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
            <div class="clearfix">
                <button @click="login()" type="submit" class="loginbtn bg-green-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left">Log In</button>
                <button @click="goToHome()" type="button" class="cancelbtn bg-red-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left">Cancel</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import {loginService} from '@/services/loginService'
export default {
    data() {
        return {
            LoginEmail: '',
            LoginPassword: '',
            url:'http://localhost/api/v1/login',
        }
    },
    methods: {
        async login() {
            const user = {
                email: this.LoginEmail,
                password: this.LoginPassword
            }
            try {
                const resp = await loginService.login(user);
                alert(resp.data.message);
                if (resp.status === 200) {
                    localStorage.setItem('token', resp.data.token);
                    this.$router.push('/');
                }
            } catch (error) {
                alert(error.response.data.message);
            }
        },
        goToHome() {
            this.$router.push('/')
        },
    }
}
</script>
