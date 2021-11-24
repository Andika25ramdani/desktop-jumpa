<template>
	<div class="sign-uo">
		<div class="bg-white rounded-px5 p-px25 shadow-custom">
			<h2 class="font-bold text-grey-dark text-2xl text-center mb-5">Sign Up</h2>
			<form @submit.prevent="onSubmit" class="flex flex-col gap-2.5">
					<input type="email" name="email" id="email" placeholder="Email" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<input type="text" name="displayName" id="displayName" placeholder="Display Name" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<input type="text" name="nickname" id="nickname" placeholder="Nickname" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<select name="country" id="country" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
						<option value="idn">IDN</option>
						<option value="eng">ENG</option>
						<option value="usa">USA</option>
					</select>
				<button type="submit" class="mt-5 bg-primary text-xs font-bold uppercase py-2 px-px94 text-white rounded-px5 hover:shadow-custom">SIGN UP</button>
			</form>
			<p class="text-xs text-grey-dark mt-2.5">Already have an account? 
				<router-link to="/sign-in" class="font-bold underline">Sign In</router-link>
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
      .get('https://api.ipvideotalk.com/api/v1.0.0/account/login')
      .then(response => (this.info = response))
			.catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>