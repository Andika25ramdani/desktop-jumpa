<template>
	<div class="sign-up">
		 
		<div class="card">
			<h2 class="card-header-text font-bold text-2xl text-center mb-5">Sign Up</h2>
			<form action="">
				<input type="email" name="" id="" placeholder="Email">
				<input type="text" name="" id="" placeholder="Display name">
				<input type="text" name="" id="" placeholder="Nickname">
				<select name="" id="">
					<option value="" disabled selected>Country</option>
				</select>
				<input type="submit" value="sign up" class="mt-5">
			</form>
			<p class="card-footer-text">Already have an account? 
				<router-link to="/sign-in">Sign In</router-link>
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