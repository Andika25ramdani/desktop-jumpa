<template>
  <div class="red-background">
    <div class="content">
      <Landing/>
    </div>
		<footer>
			<a href="">PT. Jumpa Daring Indonesia</a>
		</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '../log/Landing.vue'

export default {
  name: 'Red',
  components: {
    Landing
  }
}
</script>
<style lang="sass">
</style>