<template>
  <red-background />
</template>
<script>
import RedBackground from './components/RedBackground.vue'
export default {
  components: {
    RedBackground
  },
  // setup(){
  //   return{
  //     serverDomain: 'https://fajarenter.jumpa.id',
  //     apiUri: serverDomain + '/api/v.1.0.0',
  //     appId: 10002,
  //     appSecret: '062C1FF7EAAD4CB3B5974C122068B9C3',
  //     accessToken: '',
  //     account: 'admin',
  //     password: 'n3tph0n1c',
  //   }
  // },
  // mounted() {
  //   console.log(this.account)
  // }
}
</script>
<style>
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 2.5s ease 2s }
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