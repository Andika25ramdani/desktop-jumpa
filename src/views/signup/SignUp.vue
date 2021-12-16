<template>
	<div class="sign-up">
		<div class="bg-white rounded-px5 p-px25 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-5 xl:mb-px30">Sign Up</h2>
			<form @submit.prevent="signUp" class="flex flex-col gap-2.5 xl:gap-5 px-2.5 text-xs xl:text-sm">
				<div class="flex flex-col gap">
					<input type="email" v-model="signUpData.email" placeholder="Email" id="inputEmail" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.signUpData.email.$error" class="text-red ">{{ v$.signUpData.email.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="signUpData.displayName" placeholder="Display Name" id="inputDisplayName" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.signUpData.displayName.$error" class="text-red ">{{ v$.signUpData.displayName.$errors[0].$message }}</span>
				</div>
				<button type="submit" class="mt-5 xl:mt-px30 bg-primary font-bold uppercase py-px9 text-white rounded-px5 hover:shadow-custom">SIGN UP</button>
			</form>
			<p class="text-xs xl:text-sm text-grey-dark my-2.5 ml-2.5">Already have an account? 
				<router-link to="/sign-in" class="font-bold hover:underline">Sign In</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
	name: 'SignUp',
	data() {
		return{
            v$: useValidate(),
			signUpData: {
				email: '',
				displayName: '',
			}
		}
	},
    validations() {
        return {
			signUpData: {
				email: { required, email },
				displayName: { required },
			}
        }
    },
	methods: {
		signUp: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
				this.$router.push({path: '/check-your-email', query: {email: this.signUpData.email, displayName: this.signUpData.displayName}})
                // let res = await this.$store.dispatch('auth/signUp', {
                //     email: this.email,
                //     displayName: this.displayName,
                //     nickname: this.nickname
                // });
                // console.log(res);
            }
        }
	}
}
</script>