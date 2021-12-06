<template>
  <div class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
            <div :id=serial class="bg-white rounded-px5 w-2/5 mx-auto py-px15 border border-grey-lighter">
                <div class="px-4 text-grey-dark text-center">
                    <h3 class="kanit text-xl font-bold">{{ popupTitle }}</h3>
                    <p class="text-xs py-2.5">{{ popupMessage }}</p>
                </div>
                <div class="flex justify-center gap-2.5 items-center border-t border-grey-lighter pt-2.5">
                    <button @click="$emit('close')" class="bg-grey-background border border-grey-lighter text-px10 text-grey-ed rounded-px5 px-4 py-px5">Cancel</button>
                    <button @click="$emit('function')" class="bg-red text-white text-px10 rounded-px5 px-4 py-px5">{{ buttonTitle }}</button>
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