<template>
    <red-background v-if="!isAuth || ($router.currentRoute.value.name === 'JoinMeeting' || $router.currentRoute.value.name === 'HostMeeting')" />
    <white-background v-else />
</template>
<script>
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
    }
}
</script>
<style>
* {
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	font-family: 'Poppins', sans-serif }
::-webkit-scrollbar {
	width: 5px;
	margin-left: 10px }
::-webkit-scrollbar-thumb{
	background-color: #C4C4C4;
	border-radius: 20px }

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
