<template>
	<div class="join-meeting">
		<div class="bg-white rounded-px5 p-px25 shadow-custom">
			<h2 class="font-bold text-grey-dark text-2xl text-center mb-5">Join Meeting</h2>
			<form @submit.prevent="onSubmit" class="flex flex-col gap-2.5">
					<input type="text" name="meetId" id="meetId" placeholder="Enter the Meeting ID" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<input type="text" name="name" id="name" placeholder="Enter Your Name" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
					<input type="password" name="meetPassword" id="meetPassword"  placeholder="Meeting Password (If Required)" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
				<button type="submit" class="mt-5 bg-primary text-xs font-bold uppercase py-2 px-px94 text-white rounded-px5 hover:shadow-custom">JOIN MEETING</button>
			</form>
			<p class="text-xs text-grey-dark mt-2.5">Are you a host? 
				<router-link to="/host-meeting" class="font-bold underline">Host Meeting</router-link>
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