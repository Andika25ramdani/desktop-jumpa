<template>
	<div class="default-page">
		<div class="card p-px35 lg:px-9 xl:px-10 2xl:px-11">
            <div class="flex flex-nowrap gap-px35 lg:gap-9 xl:gap-10 2xl:gap-11">
                <div class="h-full relative">
                    <figure @click="isImageClicked = !isImageClicked" class="relative cursor-pointer">
                        <img src="img/icons/jumpa-logo.png" class="rounded-full w-36 lg:w-40 xl:w-44 2xl:w-48 h-36 lg:h-40 xl:h-44 2xl:h-48 object-cover">
                        <div v-if="isImageClicked" @click.right="photoClicked = !photoClicked" class="absolute bg-grey-dark bg-opacity-50 w-36 lg:w-40 xl:w-44 2xl:w-48 h-36 lg:h-40 xl:h-44 2xl:h-48 rounded-full top-0 flex items-center cursor-pointer">
                            <i class="fas fa-camera text-white text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mx-auto"></i>
                        </div>
                        <div v-if="photoClicked" class="bg-white rounded-px5 shadow-custom text-px10 lg:text-xs xl:text-sm 2xl:text-base py-2.5 lg:py-3 xl:py-4 2xl:py-5 px-px15 lg:px-4 xl:px-5 2xl:px-6 flex flex-col gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 text-grey-sb w-max absolute top-1/2 left-1/2">
                            <p class="cursor-pointer hover:font-bold">View photo</p>
                            <p class="cursor-pointer hover:font-bold">Take photo</p>
                            <p class="cursor-pointer hover:font-bold">Upload photo</p>
                            <p class="cursor-pointer hover:font-bold">Remove photo</p>
                        </div>
                    </figure>
                </div>
                <div class="flex-1">
                    <div class="border-b border-grey-lighter pb-px15 lg:pb-4 xl:pb-5 2xl:pb-6">
                        <div class="flex gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 items-center">
                            <h2 class="kanit font-bold text-grey-dark text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">Dinda Jumpa Indonesia</h2>
                            <div class="bg-red rounded py-1 lg:py-2 px-2.5 lg:px-3 xl:px-4 2xl:px-5 text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-white">PLATINUM</div>
                        </div>
                        <p class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb">@dindajumpakamu</p>
                        <p class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-dark py-2.5 lg:py-3 xl:py-4 2xl:py-5">
                            IT Analyst, Novelist, Photographer, Aquarius girl, and also a Cat lover, “If cats could write history, their history would be mostly about cats.”
                            <br>–Eugen Weber
                        </p>
                        <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                            <i class="fas fa-map-marker-alt text-red text-xs lg:text-sm xl:text-base 2xl:text-lg"></i>
                            <p class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb">Jakarta, West Java, Indonesia</p>
                        </div>
                    </div>
                    <table class="text-px10 lg:text-xs xl:text-sm 2xl:text-base">
                        <tr>
                            <td colspan="2" class="font-bold text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-dark kanit pb-2.5 lg:pb-3 xl:pb-4 2xl:pb-5 pt-px15 lg:pt-4 xl:pt-5 2xl:pt-6">BASIC PROFILE</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Email</td>
                            <td class="text-grey-dark">dinda.jumpa@gmail.com</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Phone</td>
                            <td class="text-grey-dark">0810-0810-8108</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Date Format</td>
                            <td class="text-grey-dark">DD/MM/YYYY</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">First Day of the Week</td>
                            <td class="text-grey-dark">Sunday</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Time</td>
                            <td class="text-grey-dark">24-hour time</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Time Zone</td>
                            <td class="text-grey-dark">(GMT+07:00) Jakarta</td>
                        </tr>
                        <tr>
                            <td colspan="2" class="font-bold text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-dark kanit pt-px15 lg:pt-4 xl:pt-5 2xl:pt-6 pb-2.5 lg:pb-3 xl:pb-4 2xl:pb-5">Security</td>
                        </tr>
                        <tr>
                            <td class="text-grey-sb pb-px5 lg:pb-2 xl:pb-3 2xl:pb-4 pr-12 lg:pr-14 xl:pr-16 2xl:pr-20">Password</td>
                            <td class="text-grey-dark">Change Password</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isImageClicked: false,
            photoClicked: false
        }
    },
    mounted() {
        console.log(this.photoClicked)
    }
}
</script>

<style>

</style>