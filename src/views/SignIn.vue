<template>
	<notification-toast
		v-if=toast.active
		:notifMessage=toast.notifMessage
		:notifType=toast.notifType />
    <div id="signIn">
		<div class="bg-white rounded-px5 p-px25 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-5 xl:mb-px30">Sign In</h2>
            <form @submit.prevent="onSubmit" class="flex flex-col gap-2.5 xl:gap-5 px-2.5 text-xs xl:text-sm">
                <div class="flex flex-col gap">
                    <input v-model="signInData.account" type="text" placeholder="Username or Email" class="border border-grey-ce rounded-px5 red-input outline-none"/>
                    <span v-if="v$.signInData.account.$error" class="text-red text-xs mt-px5">{{ v$.signInData.account.$errors[0].$message }}</span>
                </div>
				<div class="flex flex-col gap">
					<div class="flex gap-px5 border border-grey-ce rounded-px5 red-input">
						<input v-if="showPassword" type="text" v-model="signInData.password" placeholder="Password" id="inputPassword" class="flex-1 outline-none">
						<input v-else type="password" v-model="signInData.password" placeholder="Password" id="inputPassword" class="flex-1 outline-none">
						<button @click="visiblePassword" class="pr-2.5">
							<i v-if="showPassword" class="fas fa-eye text-grey-dark text-xs"></i>
							<i v-else class="fas fa-eye-slash text-grey-dark text-xs"></i>
						</button>
					</div>
                    <span v-if="v$.signInData.password.$error" class="text-red text-px8 xl:text-px10 mt-px5">{{ v$.signInData.password.$errors[0].$message }}</span>
				</div>
                <p class="text-xs xl:text-sm text-grey-dark ml-2.5 hover:font-bold hover:underline">
                    <router-link to="/forgot-password">Forgot your password?</router-link>
                </p>
				<button v-if="v$.signInData.account.$error || v$.signInData.password.$error" type="submit" class="primary-button mt-2.5" disabled>SIGN IN</button>
				<button v-else type="submit" class="primary-button mt-2.5">SIGN IN</button>
            </form>
			<p class="text-xs xl:text-sm text-grey-dark my-2.5 ml-2.5">
                Need an account?
                <router-link to="/sign-up" class="font-bold hover:underline">Sign Up</router-link
                >
            </p>
        </div>
    </div>
</template>
<script>
import md5 from 'crypto-js/md5'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import NotificationToast from '../components/NotificationToast.vue';

export default {
  components: { NotificationToast },
    name: 'SignIn',
    data() {
        return {
			showPassword: false,
            v$: useValidate(),
			toast: {
				active: false,
				notifMessage: '',
				notifType: 0
			},
            signInData: {
                account: '',
                password: '',
            }
        };
    },
    validations() {
        return {
            signInData: {
                account: { required },
                password: { required },
            }
        }
    },
    methods: {
		visiblePassword() {
			this.showPassword = !this.showPassword
		},
        onSubmit: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
                let signInResult = await this.$store.dispatch('auth/signIn', {
                    account: this.signInData.account,
                    password: md5(this.signInData.password),
                });
				if (signInResult[0] !== 0) {
					console.error(signInResult[1]);
                    this.toast.notifMessage = signInResult[1]
					this.toast.active = true
					this.toast.notifType = 2
					setTimeout(() => {
						this.toast.active = false
					}, 2975)
				}
            }
        },
    }
};
</script>
<style>
.submit-form {
    transition: ease .15s all;
}
.submit-form:hover {
    transform: translateY(-5%);
    box-shadow: -10px 10px 15px 0 rgba(121, 15, 25, .25);
}
</style>