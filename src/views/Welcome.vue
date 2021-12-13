<template>
  <div class="welcome">
    <figure class="
      rounded-full bg-white mx-auto px-8 py-6 w-max
      lg:px-9 lg:py-7
      xl:px-11 xl:py-8
      2xl:px-12 2xl:py-9
    ">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="
        mx-auto
        lg:h-20
        xl:h-24
        2xl:h-28
      ">
    </figure>
    <h1 class="
      font-bold text-center text-2xl text-white mt-4 mb-10
      lg:text-1-6 lg:mt-5 lg:mb-11
      xl:text-1-8 xl:mt-6 xl:mb-12
      2xl:text-5xl 2xl:mt-7
    ">jumpa.id</h1>
    <div class="
      flex w-max flex-col mx-auto gap-2.5
      lg:gap-3
      xl:gap-4
    ">
      <router-link to="/join-meeting">
        <transition name="slide-up">
          <button class="
            join-btn text-primary text-xs font-bold bg-white rounded-full py-px9
            lg:text-sm
            xl:text-base
            2xl:text-lg
          ">JOIN MEETING</button>
        </transition>
      </router-link>
      <div class="
        flex justify-between gap-5
        lg:gap-6
        xl:gap-7
        2xl:gap-8
      ">
        <router-link to="/sign-up" class="flex-1">
          <button class="
            sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full w-full
            lg:text-sm
            xl:text-base
            2xl:text-lg
          ">SIGN UP</button>
        </router-link>
        <router-link to="/sign-in" class="flex-1">
          <button class="
            sign-btn border border-white text-xs font-bold text-white py-px9 rounded-full w-full
            lg:text-sm
            xl:text-base
            2xl:text-lg
          ">SIGN IN</button>
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