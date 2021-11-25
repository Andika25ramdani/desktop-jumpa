<template>
  <red-background/>
</template>
<script>
import RedBackground from './components/RedBackground.vue'
import WhiteBackground from './components/WhiteBackground.vue'
export default {
  components: {
    RedBackground, WhiteBackground
  },
}
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .625s ease .5s }
.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(10%) }
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-10%) }
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(10%) }
</style>