<template>
	<div id="registration-success">
		<div class="flex flex-col items-center bg-white rounded-px5 p-px30 shadow-custom xl:p-10">
			<h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-2.5">Registration success</h2>
            <i class="fas fa-check-circle text-green mx-auto py-10 text-9xl"></i>
            <p class="text-xs xl:text-sm text-grey-dark text-center mb-px30">
                Hi, 
                <span class="font-bold">{{ displayName }}</span>
                <br>
                Your account has been created
            </p>
            <router-link to="/sign-in">
                <button type="button" class="primary-button red-input">SIGN IN</button>
            </router-link>
		</div>
	</div>
</template>
<script>
export default {
	name: 'RegistrationSuccess',
    data() {
        return {
            email: '',
            displayName: ''
        }
    },
    created() {
        this.email = this.$route.params.email
        this.displayName = this.$route.params.displayName
    }
}
</script>