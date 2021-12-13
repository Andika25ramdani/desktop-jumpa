<template>
	<div class="sign-up">
		<div class="
			bg-white rounded-px5 p-px25 shadow-custom
			lg:p-7
			xl:p-8
			2xl:p-9
		">
			<h2 class="
				font-bold text-grey-dark text-2xl text-center mb-5
				lg:text-1-6 lg:mb-6
				xl:text-1-8 xl:mb-7
				2xl:text-2 2xl:mb-8
			">Sign Up</h2>
			<form @submit.prevent="signUp" class="
				flex flex-col gap-2.5 px-2.5
				lg:text-sm lg:gap-3 lg:px-3
				xl:text-base xl:gap-4 xl:px-4
				2xl:text-lg 2xl:gap-5 2xl:px-5
			">
				<div class="flex flex-col gap">
					<input type="email" v-model="email" placeholder="Email" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.email.$error" class="text-red ">{{ v$.email.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="displayName" placeholder="Display Name" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.displayName.$error" class="text-red ">{{ v$.displayName.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="nickname" placeholder="Nickname" class="border border-grey-ce rounded-px5 red-input outline-none ">
                    <span v-if="v$.nickname.$error" class="text-red ">{{ v$.nickname.$errors[0].$message }}</span>
				</div>
				<button type="submit" class="
					mt-5 bg-primary font-bold uppercase py-2 text-white rounded-px5 hover:shadow-custom
					lg:mt-6 lg:py-3
					xl:mt-7
				">SIGN UP</button>
			</form>
			<p class="
				text-xs text-grey-dark m-2.5
				lg:text-sm lg:m-3
				xl:text-base xl:m-4
				2xl:text-lg 2xl:m-5
			">Already have an account? 
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
			email: '',
			displayName: '',
			nickname: '',
		}
	},
    validations() {
        return {
			email: { required, email },
			displayName: { required },
			nickname: { required },
        }
    },
	methods: {
		signUp: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
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