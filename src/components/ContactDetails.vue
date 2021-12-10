<template>
	<div id="contactDetails" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
            <div class="bg-white rounded-px5 mx-auto border border-grey-lighter flex flex-col items-center py-px15 max-w-xs">
                <img :src=profileImage :alt=profileName class="bg-grey-dark rounded-full w-28 h-28 object-cover mt-2.5">
                <div class="px-8 text-center py-px15">
                    <h3 class="kanit text-lg font-bold text-grey-ed">{{ profileName }}</h3>
                    <h5 class="text-px10 font-bold text-grey-sb pb-px15">{{ profileEmail }}</h5>
                    <p class="text-px10 text-grey-sb">Bio and phone</p>
                    <p class="text-px10 text-grey-dark pb-2.5">{{ profileBio }}</p>
                    <h4 class="text-xs font-bold text-grey-ed pb-7">{{ profilePhone }}</h4>
                </div>
                <div class="flex justify-center gap-2.5 items-center border-t border-grey-lighter pt-2.5 w-full">
                    <button @click="$emit('edit')" class="bg-grey-background border border-grey-lighter text-px10 text-grey-ed rounded-px5 px-4 py-px5">Edit Contact</button>
                    <button @click="$emit('delete')" class="bg-red text-white text-px10 rounded-px5 px-4 py-px5">Delete</button>
                </div>
            </div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'ContactDetails',
    props: ['profileImage', 'profileName', 'profileEmail', 'profileBio', 'profilePhone', 'profileId']
}
</script>
<style>
</style>