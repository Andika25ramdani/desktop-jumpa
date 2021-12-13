<template>
  <transition name="slide-down" appear>
    <nav class="
      flex w-full justify-between items-center py-px15 px-5
      lg:py-4 lg:px-6
      xl:py-5 xl:px-7
      2xl:py-6 2xl:px-8
    ">
      <div class="
        flex items-center gap-5
        lg:gap-6
        xl:gap-7
        2xl:gap-8
      ">
        <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="h-8 lg:h-9 xl:h-10 2xl:h-11">
        <form class="
          bg-grey-lighter rounded-px5 flex items-center px-2 py-1 text-px8 text-grey-lightjumpa
          lg:text-px10 lg:px-3 lg:py-1.5
          xl:text-xs xl:px-4
          2xl:text-sm 2xl:px-5
        ">
          <i class="fas fa-search"></i>
          <input type="search" name="" id="" placeholder="Find something here..." class="outline-none pl-2 lg:pl-3 xl:pl-4 2xl:pl-5 bg-transparent w-full">
        </form>
      </div>
      <ul class="
        flex gap-10 font-normal text-px10
        lg:text-xs lg:gap-11
        xl:text-sm xl:gap-12
        2xl:text-base 2xl:gap-14
      ">
        <router-link to="/home" class="menu-list" @click="changeMenu('home')" :class="{ activeMenu: currentMenu === 'home'}">Home</router-link>
        <router-link to="/history" class="menu-list" @click="changeMenu('history')" :class="{ activeMenu: currentMenu === 'history'}">History</router-link>
        <router-link to="/recordings" class="menu-list" @click="changeMenu('recordings')" :class="{ activeMenu: currentMenu === 'recordings'}">Recording</router-link>
        <router-link to="/contact" class="menu-list" @click="changeMenu('contacts')" :class="{ activeMenu: currentMenu === 'contacts'}">Contacts</router-link>
      </ul>
      <div class="flex gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5">
        <button @click="signOut" type="button">
          <i class="fas fa-cog text-grey-dark text-xs lg:text-sm xl:text-base 2xl:text-lg"></i>
        </button>
        <router-link to="/profile">
          <img src="img/icons/jumpa-logo.png" alt="" class="rounded-full w-px22 lg:w-6 xl:w-7 2xl:w-8 h-px22 lg:h-6 xl:h-7 2xl:h-8 bg-white object-cover">
        </router-link>
      </div>
    </nav>
  </transition>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      currentMenu: '',
    }
  },
  methods: {
    signOut() {
      this.$store.dispatch('auth/signOut')
    },
    changeMenu(newMenu) {
        this.currentMenu = newMenu
    }
  }
}
</script>
<style>
.menu-list:hover, .menu-list:active, .menu-list.activeMenu {
  font-weight: 700;
}
</style>