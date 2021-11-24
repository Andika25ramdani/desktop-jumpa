<template>
  <div class="min-w-screen min-h-screen absolute bg-grey-background bg-cover">
    <NavigationBar />
    <div class="m-0">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
export default {
  name: 'BackgroundWhite',
  components: {
    NavigationBar
  }
}
</script>
<style lang="sass">
</style>