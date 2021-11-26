<template>
    <div class="sign-in">
        <div class="bg-white rounded-px5 p-px25 shadow-custom">
            <h2 class="font-bold text-grey-dark text-2xl text-center mb-5">
                Sign In
            </h2>
            <div class="flex flex-col gap-2.5">
                <div class="flex flex-col gap">
                    <input
                        v-model="account"
                        type="text"
                        placeholder="Username or Email"
                        class="
                            border border-grey-ce
                            rounded-px5
                            py-2
                            px-4
                            min-w-252
                            outline-none
                            text-xs
                        "
                    />
                    <span v-if="v$.account.$error" class="text-red text-xs">{{ v$.account.$errors[0].$message }}</span>
                </div>
                <div class="flex flex-col gap">
                    <input
                        v-model="password"
                        type="password"
                        placeholder="Password"
                        class="
                            border border-grey-ce
                            rounded-px5
                            py-2
                            px-4
                            min-w-252
                            outline-none
                            text-xs
                        "
                    />
                    <span v-if="v$.password.$error" class="text-red text-xs">{{ v$.password.$errors[0].$message }}</span>
                </div>
                <p class="text-xs hover:underline text-grey-dark">
                    <router-link to="/">Forgot your password?</router-link>
                </p>
                <button
                    @click="onSubmit"
                    class="
                        submit-form
                        mt-5
                        bg-primary
                        text-xs
                        font-bold
                        uppercase
                        py-2
                        px-px94
                        text-white
                        rounded-px5
                    "
                >
                    SIGN IN
                </button>
            </div>
            <p class="text-xs text-grey-dark mt-2.5">
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
                let res = await this.$store.dispatch('auth/signIn', {
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