<template>
    <red-background v-if="!isAuth || ($router.currentRoute.value.name === 'JoinMeeting' || $router.currentRoute.value.name === 'HostMeeting')" />
    <white-background v-else />
</template>
<script>
import axios from "axios";
import qs from "querystring";
import RedBackground from './components/RedBackground.vue';
import WhiteBackground from './components/WhiteBackground.vue';

import {mapGetters} from 'vuex'

export default {
    components: {
        RedBackground,
        WhiteBackground,
    },
    computed: {
        ...mapGetters({
          isAuth: 'auth/isAuth'
        })
    },
	// async mounted() {
    //     console.log(this.serialNum)
    //     console.log(localStorage.getItem('accessToken'))
	// 	let res = await axios.get('https://dinda.jumpa.id/v1.0.0/layanan/history/partisipant',{
    //         meetingSernum: 'B8454C0A48764B13A0C01225396EB316',
    //         token: localStorage.getItem('accessToken')
    //     })
	// 	console.log('GET', res.data)
	// },
}
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-down-enter-active,
.slide-down-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all .625s ease .5s;
}
.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(10%);
}
.slide-down-enter-from,
.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-10%);
}
.slide-left-enter-from,
.slide-left-leave-to {
    opacity: 0;
    transform: translateX(-10%);
}
.slide-right-enter-from,
.slide-right-leave-to {
    opacity: 0;
    transform: translateX(10%);
}
</style>
