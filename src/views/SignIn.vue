<template>
	<div class="sign-in">
		<div class="bg-white rounded-px5 p-px25 shadow-custom">
			<h2 class="font-bold text-grey-dark text-2xl text-center mb-5">Sign In</h2>
			<form @submit.prevent="onSubmit" class="flex flex-col gap-2.5">
					<input type="email" name="email" id="email"  placeholder="Email" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<input type="password" name="password" id="password"  placeholder="Password" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
        <p class="text-xs underline text-grey-dark">
          <router-link to="/">Forgot your password?</router-link>
        </p>
				<button type="submit" class="mt-5 bg-primary text-xs font-bold uppercase py-2 px-px94 text-white rounded-px5 hover:shadow-custom">SIGN IN</button>
			</form>
			<p class="text-xs text-grey-dark mt-2.5">Need an account? 
				<router-link to="/sign-up" class="font-bold underline">Sign Up</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'SignIn',
	data(){
		return{
			info: null,
			loading: true,
			errored: false,
			signInForm: {
				email: '',
				password: ''
			}
		}
	},
	mounted () {
    axios
      .get('https://dinda.jumpa.id/api/v1.0.0/account/login')
      .then(response => (this.info = response))
			.catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>