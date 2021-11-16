<template>
  <div class="landing">
    <figure class="logo-figure rounded-full">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa">
    </figure>
    <h1 class="font-bold text-center text-2xl text-white mt-4 mb-10">jumpa.id</h1>
    <div class="button-groups">
      <button class="button fill-white rounded-full">JOIN MEETING</button>
      <div class="flex justify-between gap-5">
        <router-link to="/sign-up">
          <button class="button outlined-white-button rounded-full">SIGN UP</button>
        </router-link>
        <button class="button outlined-white-button rounded-full">SIGN IN</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Landing',
}
</script>
<style lang="sass">
</style>