<template>
<div class="background">
    <form action="" class="border-1 text-left border-black">
        <div class="container w-3/4 lg:w-1/2">
            <h1 class="font-bold text-2xl mb-7">Sign Up</h1>
            <hr class="border-1 border-solid border-slate-100">
            <label for="email"><b>Name</b></label>
            <input v-model="signupName" type="text" placeholder="Enter Name" name="name" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label for="email"><b>Phone</b></label>
            <input v-model="signupPhone" type="text" placeholder="Enter Phone" name="phone" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label for="email"><b>Email</b></label>
            <input v-model="signupEmail" type="text" placeholder="Enter Email" name="email" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label for="psw"><b>Password</b></label>
            <input v-model="signupPassword" type="password" placeholder="Enter Password" name="psw" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label for="psw-repeat"><b>Repeat Password</b></label>
            <input v-model="signupRepeatPassword" type="password" placeholder="Repeat Password" name="psw-repeat" required class="inline-block border-0 bg-white focus:outline-none focus:bg-gray-300 w-full p-4 mt-1.5 mb-5">
            <label>
                <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
            </label>
            <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
            <div class="clearfix">
                <button @click="signup()" type="submit" class="signupbtn bg-green-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left">Sign Up</button>
                <button type="button" class="cancelbtn bg-red-600 text-white p-3 mt-2 border-0 cursor-pointer w-full lg:w-1/2 opacity-90 hover:opacity-100 float-left">Cancel</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    data() {
        return {
            signupEmail: '',
            signupPassword: '',
            signupRepeatPassword: '',
            signupName: '',
            signupPhone: '',
        }
    },
    methods: {
        signup() {
            const signupData = {
                email: this.signupEmail,
                password: this.signupPassword,
                full_name: this.signupName,
                phone: this.signupPhone
            }
            if (this.signupName == '' || this.signupPhone == '' || this.signupEmail == '' || this.signupPassword == '' || this.signupRepeatPassword == '') {
                alert('Please fill all the fields')
            } 
            else if (this.signupName <= 2 || this.signupName >= 20) {
                alert('Name must be between 2 and 20 characters')
            } else if (this.signupPhone.length != 10) {
                alert('Phone number must be 10 digits')
            } else if (this.signupEmail.indexOf('@') == -1 || this.signupEmail.indexOf('.') == -1) {
                alert('Please enter a valid email')
            } else if (this.signupPassword != this.signupRepeatPassword) {
                alert('Passwords do not match')
            } else if (this.signupPassword.length < 6) {
                alert('Password must be at least 6 characters')
            } else if (this.signupPassword.length > 20) {
                alert('Password must be less than 20 characters')
            } else if (this.signupPassword.indexOf(' ') != -1 || this.signupPassword.indexOf('@') != -1) {
                alert('Password must not contain spaces')
            } else if(localStorage.getItem('signupData')== null){
                localStorage.setItem('signupData', JSON.stringify(signupData))
                this.$router.push('/login')
            } else if(localStorage.getItem('signupData')!= null){
                if(JSON.parse(localStorage.getItem('signupData')).email == this.signupEmail || JSON.parse(localStorage.getItem('signupData')).phone == this.signupPhone){
                    alert('Email or Phone already exists')
                } else {
                    localStorage.setItem('signupData', JSON.stringify(signupData))
                    this.$router.push('/login')
                }
            }
            }
            // else {
            //     fetch('http://localhost/api/v1/signup',
            //     {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         body: JSON.stringify(signupData)
            //     }) .then(() =>{
            //         alert('Signup Successful')
            //         this.$router.push('/login')
            //     })
            //     }
                // else{
                //         fetch('http://localhost/api/v1/signup',{
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json'
                //         },
                //         body: JSON.stringify(signupData)
                //     }) .then(() =>{
                //         alert('Signup Successful')
                //         this.$router.push('/login')
                //     })
                //     .catch(err => {
                //         console.log(err)
                //     })
                    // localStorage.setItem('signupData', JSON.stringify(signupData))
                // }

            }
        }
    

</script>

<style scope>

</style>
