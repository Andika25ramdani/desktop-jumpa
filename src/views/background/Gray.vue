<template>
  <div class="gray-background">
    <NavigationBar />
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
export default {
  name: 'Gray',
  components: {
    NavigationBar
  }
}
</script>
<style lang="sass">
</style>