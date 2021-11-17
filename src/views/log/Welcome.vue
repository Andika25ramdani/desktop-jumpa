<template>
  <div class="welcome">
    <figure class="logo-figure rounded-full">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa">
    </figure>
    <h1 class="brand-text font-bold text-center text text-white mt-4 mb-10">jumpa.id</h1>
    <div class="button-groups">
      <router-link to="/join-meeting">
        <button class="button fill-white rounded-full">JOIN MEETING</button>
      </router-link>
      <div class="flex justify-between gap-5">
        <router-link to="/sign-up">
          <button class="button outlined-white-button rounded-full">SIGN UP</button>
        </router-link>
        <router-link to="/sign-in">
          <button class="button outlined-white-button rounded-full">SIGN IN</button>
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
<style lang="sass">
</style>