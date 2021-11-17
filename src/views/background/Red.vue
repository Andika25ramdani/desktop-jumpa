<template>
  <div class="red-background">
    <router-link to="/">
      <div class="back-button">Back</div>
    </router-link>
    <div class="content">
      <router-view/>
    </div>
		<footer>
			<a href="">PT. Jumpa Daring Indonesia</a>
		</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '../log/Welcome.vue'

export default {
  name: 'Red',
  components: {
    Welcome
  }
}
</script>
<style lang="sass">
</style>