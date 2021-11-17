<template>
	<div class="sign-in">
		 
		<div class="card">
			<h2 class="card-header-text font-bold text-2xl text-center mb-5">Sign In</h2>
			<form action="">
				<input type="email" name="" id="" placeholder="Email">
				<input type="password" name="" id="" placeholder="Password">
        <p class="text-xs text-gray-700 underline">
          <router-link to="/">Forgot your password?</router-link>
        </p>
				<input type="submit" value="sign in" class="mt-5">
			</form>
			<p class="card-footer-text">Need an account? 
				<router-link to="/sign-up">Sign Up</router-link>
			</p>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>