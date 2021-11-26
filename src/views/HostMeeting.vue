<template>
	<div class="join-meeting">
		<div class="bg-white rounded-px5 p-px25 shadow-custom">
			<h2 class="font-bold text-grey-dark text-2xl text-center mb-5">Host Meeting</h2>
			<div class="flex flex-col gap-2.5">
				<div class="flex flex-col gap">
					<input type="text" v-model="meetId" placeholder="Enter the Meeting ID" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.meetId.$error" class="text-red text-xs">{{ v$.meetId.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="hostCode" placeholder="Enter the Host Code" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.hostCode.$error" class="text-red text-xs">{{ v$.hostCode.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="text" v-model="name" placeholder="Enter Your Name" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.name.$error" class="text-red text-xs">{{ v$.name.$errors[0].$message }}</span>
				</div>
				<div class="flex flex-col gap">
					<input type="password" v-model="meetPassword" placeholder="Meeting Password (If Required)" class="border border-grey-ce rounded-px5 py-2 px-4 min-w-252 outline-none text-xs">
                    <span v-if="v$.meetPassword.$error" class="text-red text-xs">{{ v$.meetPassword.$errors[0].$message }}</span>
				</div>
				<button @click="hostMeeting" class="mt-5 bg-primary text-xs font-bold uppercase py-2 px-px94 text-white rounded-px5 hover:shadow-custom">JOIN MEETING</button>
			</div>
			<p class="text-xs text-grey-dark mt-2.5">Want to join a meeting? 
				<router-link to="/join-meeting" class="font-bold hover:underline">Join Meeting</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import useValidate from '@vuelidate/core'
import { required, numeric } from '@vuelidate/validators'
export default {
	name: 'HostMeeting',
	data(){
		return {
            v$: useValidate(),
			meetId: '',
			hostCode: '',
			name: '',
			meetPassword: ''
		}
	},
    validations() {
        return {
            meetId: { required, numeric },
            hostCode: { required },
            name: { required },
            meetPassword: { },
        }
    },
    methods: {
        hostMeeting: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('OKE')
            }
        },
    }
}
</script>