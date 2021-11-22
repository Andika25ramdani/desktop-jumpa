<template>
  <div class="min-w-screen min-h-screen absolute bg-primary items-center red-background bg-cover">
    <router-link to="/">
      <div class="text-white before:content-['<']">Back</div>
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