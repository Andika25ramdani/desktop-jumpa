<template>
  <nav class="navbar">
    <div class="flex items-center gap-5">
      <img src="img/icons/jumpa-logo.png" alt="Logo Jumpa" class="nav-brand">
      <form action="">
        <input type="search" name="" id="" placeholder="Find something here..." class="nav-search">
      </form>
    </div>
    <ul class="flex gap-10">
      <router-link to="/" class="menu-link">Home</router-link>
      <router-link to="/meeting-history" class="menu-link">History</router-link>
      <router-link to="/home" class="menu-link">Recording</router-link>
      <router-link to="/home" class="menu-link">Contacts</router-link>
    </ul>
    <div class="flex">
      <button>A</button>
      <img src="img/icons/jumpa-logo.png" alt="" class="profile-photo">
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
</style>
