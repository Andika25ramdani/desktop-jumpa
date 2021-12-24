<template>
	<div class="default-page">
		<div class="card p-px35 xl:p-12">
            <div class="flex flex-nowrap gap-px35 xl:gap-15">
                <div class="h-full relative">
                    <figure @click="isImageClicked = !isImageClicked" class="relative cursor-pointer">
                        <img src="img/icons/jumpa-logo.png" class="rounded-full w-36 h-36 object-contain">
                        <div v-if="isImageClicked" @click.right="photoClicked = !photoClicked" class="absolute bg-grey-dark bg-opacity-50 w-36 h-36 rounded-full top-0 flex items-center cursor-pointer">
                            <i class="fas fa-camera text-white text-xl mx-auto"></i>
                        </div>
                        <div v-if="photoClicked" class="bg-white rounded-px5 shadow-custom text-px10 py-2.5 px-px15 flex flex-col gap-px5 text-grey-sb w-max absolute top-1/2 left-1/2">
                            <p class="cursor-pointer hover:font-bold">View photo</p>
                            <p class="cursor-pointer hover:font-bold">Take photo</p>
                            <p class="cursor-pointer hover:font-bold">Upload photo</p>
                            <p class="cursor-pointer hover:font-bold">Remove photo</p>
                        </div>
                    </figure>
                </div>
                <div class="flex-1">
                    <div class="border-b border-grey-lighter pb-px15">
                        <div class="flex gap-2.5 items-center">
                            <h2 class="kanit font-bold text-grey-dark text-2xl xl:text-3xl">{{ userInfo.displayName }}</h2>
                            <div class="bg-red rounded py-1 lg:py-2 px-2.5 text-px8 text-white">PLATINUM</div>
                        </div>
                        <p class="text-px10 xl:text-sm text-grey-sb">@{{ userInfo.account }}</p>
                        <p class="text-px10 xl:text-sm text-grey-dark py-2.5">{{ userInfo.bio }}</p>
                        <div class="flex gap-px5 items-center">
                            <i class="fas fa-map-marker-alt text-red text-xs lg:text-sm xl:text-base 2xl:text-lg"></i>
                            <p class="text-px10 xl:text-sm text-grey-sb">Jakarta, West Java, Indonesia</p>
                        </div>
                    </div>
                    <table class="text-px10 xl:text-sm">
                        <tr>
                            <td colspan="2" class="font-bold text-px10 xl:text-sm text-grey-dark kanit pb-2.5 pt-px15">BASIC PROFILE</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Email</td>
                            <td class="text-grey-dark">{{ userInfo.email }}</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Phone</td>
                            <td class="text-grey-dark">0810-0810-8108</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Date Format</td>
                            <td class="text-grey-dark">DD/MM/YYYY</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">First Day of the Week</td>
                            <td class="text-grey-dark">Sunday</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Time</td>
                            <td class="text-grey-dark">24-hour time</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Time Zone</td>
                            <td class="text-grey-dark">(GMT+07:00) Jakarta</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="font-bold text-px10 xl:text-sm text-grey-dark kanit pt-px15 pb-2.5">Security</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 pr-12">Password</td>
                            <td class="text-grey-dark">Change Password</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            isImageClicked: false,
            photoClicked: false,
            userInfo: {
                account: localStorage.getItem('account'),
                bio: localStorage.getItem('bio'),
                displayName: localStorage.getItem('comment'),
                email: localStorage.getItem('email'),
            }
        }
    },
	async created() {
		await this.$store.dispatch('profile/getInfo', {
            email: localStorage.getItem('email'),
            token: localStorage.getItem('accessToken')
        })
		// await this.$store.dispatch('profile/updateInfo', {
        //     email: localStorage.getItem('email'),
        //     comment: 'Y A D I',
        //     bio: 'Just Live and Keep Breath',
        //     token: localStorage.getItem('accessToken')
        // })
	},
}
</script>

<style>

</style>