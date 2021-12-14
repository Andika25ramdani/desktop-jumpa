<template>
	<div id="contactAddNew" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
            <div class="bg-white rounded-px5 mx-auto border border-grey-lighter flex flex-col items-center">
                <h3 class="kanit text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-grey-dark text-center pt-px25 lg:pt-7 xl:pt-8 2xl:pt-9">Add new contact</h3>
                <form @submit.prevent="newContact" class="mt-4 lg:mt-5 xl:mt-6 2xl:mt-7 flex-1 flex flex-col items-center">
                    <div class="flex flex-col gap-px5 lg:gap-2">
                        <div class="flex flex-col flex-1 gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 red-input px-8 lg:px-9 xl:px-10 2xl:px-11">
                            <label class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb">Contact Name</label>
                            <input type="text" v-model="newContactData.contactName" class="rounded-px5 border border-grey-ce py-px5 lg:py-2 xl:py-2.5 px-2.5 lg:px-3 xl:px-4 2xl:px-5 text-px10 lg:text-xs xl:text-sm 2xl:text-base outline-none text-grey-dark">
                            <p v-if="v$.newContactData.contactName.$error" class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-red min-w-max">{{ v$.newContactData.contactName.$errors[0].$message }}</p>
                        </div>
                        <div class="flex flex-col flex-1 gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 red-input px-8 lg:px-9 xl:px-10 2xl:px-11">
                            <label class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb">Email *</label>
                            <input type="email" v-model="newContactData.email" class="rounded-px5 border border-grey-ce py-px5 lg:py-2 xl:py-2.5 px-2.5 lg:px-3 xl:px-4 2xl:px-5 text-px10 lg:text-xs xl:text-sm 2xl:text-base outline-none text-grey-dark">
                            <p v-if="v$.newContactData.email.$error" class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-red min-w-max">{{ v$.newContactData.email.$errors[0].$message }}</p>
                        </div>
                        <div class="flex flex-col flex-1 gap-0.5 lg:gap-1 xl:gap-2 2xl:gap-3 red-input px-8 lg:px-9 xl:px-10 2xl:px-11">
                            <label class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb">Phone Number</label>
                            <input type="tel" v-model="newContactData.phoneNumber" class="rounded-px5 border border-grey-ce py-px5 lg:py-2 xl:py-2.5 px-2.5 lg:px-3 xl:px-4 2xl:px-5 text-px10 lg:text-xs xl:text-sm 2xl:text-base outline-none text-grey-dark">
                            <p v-if="v$.newContactData.phoneNumber.$error" class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-red min-w-max">{{ v$.newContactData.phoneNumber.$errors[0].$message }}</p>
                        </div>
                    </div>
                    <div class="border-t border-grey-lighter py-2.5 lg:py-3 xl:py-4 2xl:py-5 w-full mt-4 lg:mt-5 xl:mt-6 2xl:mt-7 flex items-center">
                        <button type="submit" @click="newContact" class="bg-green rounded-px5 px-4 lg:px-5 xl:px-6 2xl:px-7 py-px5 lg:py-2 xl:py-3 text-px10 lg:text-xs xl:text-sm 2xl:text-base text-white mx-auto">Add Contact</button>
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
    data() {
        return {
            v$: useValidate(),
            newContactData: {
                contactName: '',
                email: '',
                phoneNumber: ''
            }
        };
    },
    validations() {
        return {
            newContactData: {
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
        newContact: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log('Contact Name:'+this.newContactData.contactName);
				console.log('Email *:'+this.newContactData.contactName);
				console.log('Phone Number:'+this.newContactData.contactName);
            }
        },
    }
}
</script>
<style>
</style>