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
        <router-link to="/home" class="menu-list" @click="changeMenu('home')" :class="{ activeMenu: currentMenu === 'home'}">Home</router-link>
        <router-link to="/history" class="menu-list" @click="changeMenu('history')" :class="{ activeMenu: currentMenu === 'history'}">History</router-link>
        <router-link to="/recordings" class="menu-list" @click="changeMenu('recordings')" :class="{ activeMenu: currentMenu === 'recordings'}">Recording</router-link>
        <router-link to="/contact" class="menu-list" @click="changeMenu('contacts')" :class="{ activeMenu: currentMenu === 'contacts'}">Contacts</router-link>
      </ul>
      <div class="flex">
        <button @click="signOut" type="button">
          <i class="fas fa-cog text-grey-dark text-xs"></i>
        </button>
        <router-link to="/profile">
          <img src="img/icons/jumpa-logo.png" alt="" class="rounded-full w-px22 h-px22 bg-white object-cover ml-2.5">
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