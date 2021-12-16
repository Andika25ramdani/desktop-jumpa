<template>
  <div class="welcome">
    <figure class="rounded-full bg-white mx-auto p-6 w-max">
      <img src="img/icons/jumpa.png" alt="Logo Jumpa" class="
        mx-auto
        xl:h-px100
      ">
    </figure>
    <h1 class="font-bold text-center text-2xl text-white mt-4 xl:mt-px25 mb-10">jumpa.id</h1>
    <div class="flex w-max flex-col mx-auto gap-2.5 xl:gap-px15">
      <router-link to="/join-meeting">
        <transition name="slide-up">
          <button class="join-btn text-primary text-xs font-bold xl:text-sm bg-white rounded-full py-px9">JOIN MEETING</button>
        </transition>
      </router-link>
      <div class="flex justify-between gap-5">
        <router-link to="/sign-up" class="flex-1">
          <button class="sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full w-full xl:text-sm">SIGN UP</button>
        </router-link>
        <router-link to="/sign-in" class="flex-1">
          <button class="sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full w-full xl:text-sm">SIGN IN</button>
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