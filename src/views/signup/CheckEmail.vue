<template>
	<div id="checkEmail">
		<div class="bg-white rounded-px5 p-px30 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-2.5">Check Your Email</h2>
            <p class="text-xs xl:text-sm text-grey-dark text-center">We sent you an activation link to</p>
            <p class="text-xs xl:text-sm text-grey-dark text-center font-bold">{{ email }}</p>
            <img src="img/check-email.png" alt="" class="mx-auto py-px30">
            <p class="text-xs xl:text-sm text-grey-dark text-center mb-px30">Click the activation link we emailed you</p>
            <button @click="resendEmail" type="button" class="primary-button red-input" :disabled="countDown != 0">RESEND EMAIL {{ timeLeft ? '' : ( countDown == 0 ? '' : '('+countDown+')') }}</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CheckEmail',
    data() {
        return {
            countDown: 59,
            email: '',
            displayName: ''
        }
    },
    computed: {
        timeLeft() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown--
                    console.log(this.countDown);
                }, 1000);
            }
        }
    },
    created() {
        this.email = this.$route.params.email
        this.displayName = this.$route.params.displayName
    },
    methods: {
        resendEmail() {
            console.log('Email Resend');
            // this.$router.push({name: 'SetupAccount', params: {email: this.email, displayName: this.displayName}})
            location.reload()
        }
    }
}
</script>