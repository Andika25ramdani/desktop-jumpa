<template>
	<div class="setupAccount">
		<div class="bg-white rounded-px5 p-px25 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-5 xl:mb-px30">Set up account</h2>
			<form @submit.prevent="setupAccount" class="flex flex-col gap-2.5 xl:gap-5 px-2.5 text-xs xl:text-sm">
				<div class="flex flex-col gap">
					<input type="email" v-model="setupAccountData.email" placeholder="Email" id="inputEmail" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.setupAccountData.email.$error" class="text-red ">{{ v$.setupAccountData.email.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="setupAccountData.displayName" placeholder="Display Name" id="inputDisplayName" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.setupAccountData.displayName.$error" class="text-red ">{{ v$.setupAccountData.displayName.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="setupAccountData.username" placeholder="Username" id="inputUsername" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.setupAccountData.username.$error" class="text-red ">{{ v$.setupAccountData.username.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="password" v-model="setupAccountData.password" placeholder="Password" id="inputPassword" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.setupAccountData.password.$error" class="text-red ">{{ v$.setupAccountData.password.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="password" v-model="setupAccountData.confirmPassword" placeholder="Confirm Password" id="inputConfirmPassword" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.setupAccountData.confirmPassword.$error" class="text-red ">{{ v$.setupAccountData.confirmPassword.$errors[0].$message }}</span>
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
import { required, email, sameAs } from '@vuelidate/validators'
export default {
	name: 'SetupAccount',
	data() {
		return{
            v$: useValidate(),
			setupAccountData: {
				email: this.$route.params.email,
				displayName: this.$route.params.displayName,
                username: '',
                password: '',
                confirmPassword: ''
			}
		}
	},
    validations() {
        return {
			setupAccountData: {
				email: { required, email },
				displayName: { required },
				username: { required },
                password: { required },
                confirmPassword: {
                    required,
                    password: sameAs(this.setupAccountData.password)
                }
			}
        }
    },
	methods: {
		setupAccount: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
				this.$router.push({name: 'SignIn'})
                // let res = await this.$store.dispatch('auth/setupAccount', {
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