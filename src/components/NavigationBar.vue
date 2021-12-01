<template>
  <transition name="slide-down" appear>
    <nav class="flex w-full justify-between items-center py-px15 px-5">
      <div class="flex items-center gap-5">
        <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="h-px33">
        <form class="bg-grey-lighter rounded-px5 h-px22 w-px188 flex items-center px-2">
          <i class="fas fa-search text-grey-lightjumpa text-px8"></i>
          <input type="search" name="" id="" placeholder="Find something here..." class="outline-none text-px8 text-grey-lightjumpa pl-2 bg-transparent w-full">
        </form>
      </div>
      <ul class="flex gap-10 font-normal text-px10">
        <router-link to="/home" class="menu-list">Home</router-link>
        <router-link to="/history" class="menu-list">History</router-link>
        <router-link to="/home" class="menu-list">Recording</router-link>
        <router-link to="/home" class="menu-list">Contacts</router-link>
      </ul>
      <div class="flex">
        <button @click="signOut" type="button">
          <i class="fas fa-cog text-grey-dark text-xs"></i>
        </button>
        <img src="img/icons/jumpa-logo.png" alt="" class="rounded-full w-px22 h-px22 bg-white object-cover ml-2.5">
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'NavigationBar',
  methods: {
    test: () => {
      alert('clicked')
    },
    signOut() {
      this.$store.dispatch('auth/signOut')
    }
  }
}
</script>
<style>
.menu-list:hover, .menu-list:active {
  font-weight: 700;
}
</style>