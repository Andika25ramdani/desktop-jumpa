<template>
	<div class="join-meeting">
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
            ">Join Meeting</h2>
			<form @submit.prevent="joinMeeting" class="
				flex flex-col gap-2.5 px-2.5
				lg:text-sm lg:gap-3 lg:px-3
				xl:text-base xl:gap-4 xl:px-4
				2xl:text-lg 2xl:gap-5 2xl:px-5
            ">
				<div class="flex flex-col gap">
					<input type="text" v-model="meetId" placeholder="Enter the Meeting ID" class="border border-grey-ce rounded-px5 red-input outline-none">
                    <span v-if="v$.meetId.$error" class="text-red text-xs">{{ v$.meetId.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="name" placeholder="Enter Your Name" class="border border-grey-ce rounded-px5 red-input outline-none">
                    <span v-if="v$.name.$error" class="text-red text-xs">{{ v$.name.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="password" v-model="meetPassword" placeholder="Meeting Password (If Required)" class="border border-grey-ce rounded-px5 red-input outline-none">
                    <span v-if="v$.meetPassword.$error" class="text-red text-xs">{{ v$.meetPassword.$errors[0].$message }}</span>
				</div>
				<button type="submit" class="
					mt-5 bg-primary font-bold uppercase py-2 text-white rounded-px5 hover:shadow-custom
					lg:mt-6 lg:py-3
					xl:mt-7
				">JOIN MEETING</button>
			</form>
			<p class="
				text-xs text-grey-dark m-2.5
				lg:text-sm lg:m-3
				xl:text-base xl:m-4
				2xl:text-lg 2xl:m-5
			">Are you a host? 
				<router-link to="/host-meeting" class="font-bold hover:underline">Host Meeting</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
export default {
	name: 'JoinMeeting',
	data(){
		return {
            v$: useValidate(),
			meetId: '',
			name: '',
			meetPassword: ''
		}
	},
    validations() {
        return {
            meetId: { required, numeric },
            name: { required },
            meetPassword: { },
        }
    },
    methods: {
        joinMeeting: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
            }
        },
    }
}
</script>