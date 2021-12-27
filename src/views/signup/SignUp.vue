<template>
	<div class="sign-up">
		<transition name="slide-up" appear>
			<div class="bg-white rounded-px5 p-px25 shadow-custom xl:p-10 max-w-lg">
				<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-5 xl:mb-px30">Sign Up</h2>
				<form @submit.prevent="signUp" class="flex flex-col gap-2.5 xl:gap-5 px-2.5 text-xs xl:text-sm">
					<div class="flex flex-col gap">
						<input type="email" v-model="signUpData.email" placeholder="Email" id="inputEmail" class="border border-grey-ce rounded-px5 red-input outline-none ">
						<span v-if="v$.signUpData.email.$error" class="text-red text-px8 xl:text-px10 mt-px5">{{ v$.signUpData.email.$errors[0].$message }}</span>
					</div>
					<div class="flex flex-col gap">
						<input type="text" v-model="signUpData.displayName" placeholder="Display Name" id="inputDisplayName" class="border border-grey-ce rounded-px5 red-input outline-none ">
						<span v-if="v$.signUpData.displayName.$error" class="text-red text-px8 xl:text-px10 mt-px5">{{ v$.signUpData.displayName.$errors[0].$message }}</span>
					</div>
					<div class="flex flex-col gap">
						<div class="flex justify-between items-center gap-4">
							<input type="text" v-model="signUpData.checkcode" placeholder="Display Name" id="inputDisplayName" minlength="4" maxlength="4" class="flex-1 border border-grey-ce rounded-px5 outline-none py-2 px-4">
							<img src="https://surampak.jumpa.id/checkcode">
						</div>
						<span v-if="v$.signUpData.checkcode.$error" class="text-red text-px8 xl:text-px10 mt-px5">{{ v$.signUpData.checkcode.$errors[0].$message }}</span>
					</div>
					<button v-if="v$.signUpData.displayName.$error || v$.signUpData.email.$error || v$.signUpData.checkcode.$error" type="submit" class="primary-button mt-2.5" disabled>SIGN UP</button>
					<button v-else type="submit" class="primary-button mt-2.5">SIGN UP</button>
				</form>
				<p class="text-xs xl:text-sm text-grey-dark my-2.5 ml-2.5">Already have an account? 
					<router-link to="/sign-in" class="font-bold hover:underline">Sign In</router-link>
				</p>
			</div>
		</transition>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import useValidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
export default {
	name: 'SignUp',
	data() {
		return{
            v$: useValidate(),
			signUpData: {
				email: '',
				displayName: '',
				checkcode: '',
			}
		}
	},
    validations() {
        return {
			signUpData: {
				email: { required, email },
				displayName: { required },
				checkcode: {
					required,
					minLength: minLength(4),
					maxLength: maxLength(4)
				}
			}
        }
    },
	computed: {
		...mapGetters({
			checkcode: 'auth/getCaptcha'
		}),
		checkEmptyInput: async function () {
			this.v$.$validate()
		}
	},
	async created() {
		await this.$store.dispatch('auth/getCheckcode')
	},
	methods: {
		signUp: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
                await this.$store.dispatch('auth/signUp', {
					email: this.signUpData.email,
					displayName: this.signUpData.displayName,
					name: '',
					enterprisePeople: '', 
					checkcode: '',
					checkcode: this.signUpData.checkcode,
					phone: 1,
					country: '',
					mac: '',
					province: '' ,
					companySize: ''
                });
				this.$router.push({name: 'SignUpCheckEmail', params: {email: this.signUpData.email, displayName: this.signUpData.displayName}})
            }
        }
	}
}
</script>