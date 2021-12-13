<template>
    <div class="sign-in">
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
            ">
                Sign In
            </h2>
            <form @submit.prevent="onSubmit" class="
				flex flex-col gap-2.5 px-2.5
				lg:text-sm lg:gap-3 lg:px-3
				xl:text-base xl:gap-4 xl:px-4
				2xl:text-lg 2xl:gap-5 2xl:px-5
            ">
                <div class="flex flex-col gap">
                    <input
                        v-model="account"
                        type="text"
                        placeholder="Username or Email"
                        class="border border-grey-ce rounded-px5 red-input outline-none"/>
                    <span v-if="v$.account.$error" class="text-red text-xs">{{ v$.account.$errors[0].$message }}</span>
                </div>
                <div class="flex flex-col gap">
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Password"
                        class="border border-grey-ce rounded-px5 red-input outline-none"/>
                    <span v-if="v$.password.$error" class="text-red text-xs">{{ v$.password.$errors[0].$message }}</span>
                </div>
                <p class="
                    text-xs text-grey-dark
                    lg:text-sm
                    xl:text-base
                    2xl:text-lg
                ">
                    <router-link to="/">Forgot your password?</router-link>
                </p>
                <button type="submit" class="
					mt-5 bg-primary font-bold uppercase py-2 text-white rounded-px5 hover:shadow-custom
					lg:mt-6 lg:py-3
					xl:mt-7
				">
                    SIGN IN
                </button>
            </form>
            <p class="
				text-xs text-grey-dark m-2.5
				lg:text-sm lg:m-3
				xl:text-base xl:m-4
				2xl:text-lg 2xl:m-5
			">
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
            account: '',
            password: '',
        };
    },
    validations() {
        return {
            account: { required },
            password: { required },
        }
    },
    methods: {
        onSubmit: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
                await this.$store.dispatch('auth/signIn', {
                    account: this.account,
                    password: md5(this.password),
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