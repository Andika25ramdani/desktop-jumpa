<template>
  <div class="welcome">
    <figure class="rounded-full bg-white w-px114 h-px114 mx-auto py-5">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="mx-auto">
    </figure>
    <h1 class="brand-text font-bold text-center text-2xl text-white mt-4 mb-10">jumpa.id</h1>
    <div class="flex w-max flex-col mx-auto gap-2.5">
      <router-link to="/join-meeting">
        <transition name="slide-up">
          <button class="join-btn text-primary text-xs font-bold bg-white rounded-full py-px9 px-px94">JOIN MEETING</button>
        </transition>
      </router-link>
      <div class="flex justify-between gap-5">
        <router-link to="/sign-up">
          <button class="sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full min-w-127">SIGN UP</button>
        </router-link>
        <router-link to="/sign-in">
          <button class="sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full min-w-127">SIGN IN</button>
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
<style scoped>
.join-btn, .sign-btn {
  transition: ease .15s all;
}
.join-btn:hover {
  transform: translateY(-10%);
}
.sign-btn:hover {
  background-color: white;
  color: #790F19;
  box-shadow: -10px 10px 15px 0 rgba(121, 15, 25, 1);
}
</style>