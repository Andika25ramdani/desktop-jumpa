<template>
    <red-background v-if="!isAuth" />
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
        }),
    },
};
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition: all 0.625s ease 0.5s;
}
.slide-up-enter-from,
.slide-up-leave-to {
    opacity: 0;
    transform: translateY(10%);
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
