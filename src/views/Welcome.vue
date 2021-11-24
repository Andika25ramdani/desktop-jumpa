<template>
  <div class="welcome">
    <figure class="rounded-full bg-white w-px114 h-px114 mx-auto py-5">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="mx-auto">
    </figure>
    <h1 class="brand-text font-bold text-center text-2xl text-white mt-4 mb-10">jumpa.id</h1>
    <div class="flex w-max flex-col mx-auto gap-2.5">
      <router-link to="/join-meeting">
        <transition name="slide-up">
          <button class="text-primary text-xs font-bold bg-white rounded-full py-px9 px-px94 hover:shadow-red hover:scale-105">JOIN MEETING</button>
        </transition>
      </router-link>
      <div class="flex justify-between gap-5">
        <router-link to="/sign-up">
          <button class="border border-white text-xs font-bold text-white py-px9 rounded-full min-w-127 hover:bg-white hover:text-primary hover:shadow-custom">SIGN UP</button>
        </router-link>
        <router-link to="/sign-in">
          <button class="border border-white text-xs font-bold text-white py-px9 rounded-full min-w-127 hover:bg-white hover:text-primary hover:shadow-customs">SIGN IN</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Welcome',
}
</script>