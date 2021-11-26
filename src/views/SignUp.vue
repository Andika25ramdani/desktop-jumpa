<template>
	<div class="sign-up">
		<div class="bg-white rounded-px5 p-px25 shadow-custom">
			<h2 class="font-bold text-grey-dark text-2xl text-center mb-5">Sign Up</h2>
			<div class="flex flex-col gap-2.5">
				<div class="flex flex-col gap">
					<input type="email" v-model="email" placeholder="Email" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.email.$error" class="text-red text-xs">{{ v$.email.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="displayName" placeholder="Display Name" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.displayName.$error" class="text-red text-xs">{{ v$.displayName.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="nickname" placeholder="Nickname" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.nickname.$error" class="text-red text-xs">{{ v$.nickname.$errors[0].$message }}</span>
				</div>
				<button @click="signUp" class="submit-form mt-5 bg-primary text-xs font-bold uppercase py-2 px-px94 text-white rounded-px5 hover:shadow-custom">SIGN UP</button>
			</div>
			<p class="text-xs text-grey-dark mt-2.5">Already have an account? 
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