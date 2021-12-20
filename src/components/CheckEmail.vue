<template>
    <div class="bg-white rounded-px5 p-px30 shadow-custom xl:p-10 flex items-center flex-col max-w-md">
        <h2 class="font-bold text-grey-dark text-2xl xl:text-3xl text-center mb-2.5">Check Your Email</h2>
        <p class="text-xs xl:text-sm text-grey-dark text-center">{{ message }}</p>
        <p class="text-xs xl:text-sm text-grey-dark text-center font-bold">{{ param }}</p>
        <img src="img/check-email.png" alt="" class="mx-auto py-px30">
        <p class="text-xs xl:text-sm text-grey-dark text-center mb-px30">{{ footerMessage }}</p>
        <button @click="$emit('buttonClicked')" type="button" class="primary-button red-input" :disabled="countDown != 0">RESEND EMAIL {{ timeLeft ? '' : ( countDown == 0 ? '' : '('+countDown+')') }}</button>
    </div>
</template>
<script>
export default {
	name: 'SignUpCheckEmail',
    props: ['message', 'param', 'footerMessage'],
    data() {
        return {
            countDown: 59,
        }
    },
    computed: {
        timeLeft() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown--
                    console.log(this.countDown);
                }, 1000);
            }
        }
    },
}
</script>