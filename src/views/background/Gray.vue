<template>
  <div class="gray-background">
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
export default {
  name: 'Red'
}
</script>
<style lang="sass">
</style>