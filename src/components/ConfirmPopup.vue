<template>
  <div class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
            <div :id=serial class="bg-white rounded-px5 w-2/5 mx-auto py-px15 lg:py-4 xl:py-5 2xl:py-6 border border-grey-lighter">
                <div class="px-4 lg:px-5 xl:px-6 2xl:px-7 text-grey-dark text-center">
                    <h3 class="kanit text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">{{ popupTitle }}</h3>
                    <p class="text-xs lg:text-sm xl:text-base 2xl:text-lg py-2.5 lg:py-3 xl:py-4 2xl:py-5">{{ popupMessage }}</p>
                </div>
                <div class="flex justify-center gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 items-center border-t border-grey-lighter pt-2.5 lg:pt-3 xl:pt-4 2xl:pt-5">
                    <button @click="$emit('close')" class="bg-grey-background border border-grey-lighter text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-ed rounded-px5 px-4 lg:px-5 xl:px-6 2xl:px-7 py-px5 lg:py-2 xl:py-2.5">Cancel</button>
                    <button @click="$emit('function')" class="bg-red text-white text-px10 lg:text-xs xl:text-sm 2xl:text-base rounded-px5 px-4 lg:px-5 xl:px-6 2xl:px-7 py-px5 lg:py-2 xl:py-2.5">{{ buttonTitle }}</button>
                </div>
            </div>
        </transition>
  </div>
</template>

<script>
export default {
    name: 'ConfirmPopup',
    props: [ 'buttonTitle', 'popupMessage', 'popupTitle', 'serial' ]
}
</script>

<style>

</style>