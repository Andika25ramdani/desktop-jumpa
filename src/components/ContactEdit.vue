<template>
	<div id="contactEdit" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
            <div class="bg-white rounded-px5 mx-auto border border-grey-lighter flex flex-col items-center">
                <form @submit.prevent="contactEdit" class="mt-4 flex-1 flex flex-col items-center">
                    <div class="flex flex-col gap-px5">
                        <img :src=profileImage :alt=profileName class="bg-grey-dark rounded-full w-28 h-28 object-cover mt-2.5 mx-auto">
                        <div class="flex flex-col flex-1 gap-0.5 min-w-252 px-8">
                            <label class="text-px10 text-grey-sb">Contact Name</label>
                            <input type="text" v-model="contactEditData.contactName" class="rounded-px5 border border-grey-ce py-px5 px-2.5 text-xs font-bold outline-none text-grey-ed">
                            <p v-if="v$.contactEditData.contactName.$error" class="text-px8 text-red min-w-max">{{ v$.contactEditData.contactName.$errors[0].$message }}</p>
                        </div>
                        <div class="flex flex-col flex-1 gap-0.5 min-w-252 px-8">
                            <label class="text-px10 text-grey-sb">Email *</label>
                            <input type="email" v-model="contactEditData.email" class="rounded-px5 border border-grey-ce py-px5 px-2.5 text-xs font-bold outline-none text-grey-ed">
                            <p v-if="v$.contactEditData.email.$error" class="text-px8 text-red min-w-max">{{ v$.contactEditData.email.$errors[0].$message }}</p>
                        </div>
                        <div class="flex flex-col flex-1 gap-0.5 min-w-252 px-8">
                            <label class="text-px10 text-grey-sb">Phone Number</label>
                            <input type="tel" v-model="contactEditData.phoneNumber" class="rounded-px5 border border-grey-ce py-px5 px-2.5 text-xs font-bold outline-none text-grey-ed">
                            <p v-if="v$.contactEditData.phoneNumber.$error" class="text-px8 text-red min-w-max">{{ v$.contactEditData.phoneNumber.$errors[0].$message }}</p>
                        </div>
                    </div>
                    <div class="border-t border-grey-lighter py-2.5 w-full mt-4 flex items-center">
                        <button type="submit" @click="contactEdit" class="bg-green rounded-px5 px-4 py-px5 text-px10 text-white mx-auto">Save Contact</button>
                    </div>
                </form>
            </div>
		</transition>
	</div>
</template>

<script>
import useValidate from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'
export default {
	name: 'ContactAddNew',
    props: ['profileImage', 'profileName', 'profileEmail', 'profileBio', 'profilePhone', 'profileId'],
    data() {
        return {
            v$: useValidate(),
            contactEditData: {
                contactName: this.profileName,
                email: this.profileEmail,
                phoneNumber: this.profilePhone
            }
        };
    },
    validations() {
        return {
            contactEditData: {
                contactName: {  },
                email: {
                    required, 
                    email
                },
                phoneNumber: { numeric }
            }
        }
    },
    methods: {
        contactEdit: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('Contact Name:'+this.contactEditData.contactName);
				console.log('Email *:'+this.contactEditData.contactName);
				console.log('Phone Number:'+this.contactEditData.contactName);
            }
        },
    }
}
</script>
<style>
</style>