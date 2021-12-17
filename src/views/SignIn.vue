<template>
    <div id="signIn">
		<div class="bg-white rounded-px5 p-px25 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-5 xl:mb-px30">Sign In</h2>
            <form @submit.prevent="onSubmit" class="flex flex-col gap-2.5 xl:gap-5 px-2.5 text-xs xl:text-sm">
                <div class="flex flex-col gap">
                    <input v-model="signInData.account" type="text" placeholder="Username or Email" class="border border-grey-ce rounded-px5 red-input outline-none"/>
                    <span v-if="v$.signInData.account.$error" class="text-red text-xs">{{ v$.signInData.account.$errors[0].$message }}</span>
                </div>
                <div class="flex flex-col gap">
                    <input v-model="signInData.password" type="password" placeholder="Password" class="border border-grey-ce rounded-px5 red-input outline-none"/>
                    <span v-if="v$.signInData.password.$error" class="text-red text-xs">{{ v$.signInData.password.$errors[0].$message }}</span>
                </div>
                <p class="text-xs xl:text-sm text-grey-dark ml-2.5 hover:font-bold hover:underline">
                    <router-link to="/forgot-password">Forgot your password?</router-link>
                </p>
				<button v-if="v$.signInData.account.$error || v$.signInData.password.$error" type="submit" class="primary-button mt-2.5" disabled>SIGN IN</button>
				<button v-else type="submit" class="primary-button mt-2.5">SIGN IN</button>
            </form>
			<p class="text-xs xl:text-sm text-grey-dark my-2.5 ml-2.5">
                Need an account?
                <router-link to="/sign-up" class="font-bold hover:underline"
                    >Sign Up</router-link
                >
            </p>
        </div>
    </div>
</template>
<script>
import md5 from 'crypto-js/md5'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
    name: 'SignIn',
    data() {
        return {
            v$: useValidate(),
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
        onSubmit: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
                await this.$store.dispatch('auth/signIn', {
                    account: this.signInData.account,
                    password: md5(this.signInData.password),
                });
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