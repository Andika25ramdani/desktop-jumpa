<template>
	<div class="host-meeting">
		<div class="card">
			<h2 class="card-header-text font-bold text-2xl text-center mb-5">Host Meeting</h2>
			<form action="">
				<input type="text" name="" id="" placeholder="Enter the Meeting ID">
				<input type="text" name="" id="" placeholder="Enter the Host Code">
				<input type="text" name="" id="" placeholder="Enter Your Name">
				<input type="password" name="" id="" placeholder="Meeting Password (If Required)">
				<input type="submit" value="Host meeting" class="mt-5">
			</form>
			<p class="card-footer-text">Want to join a meeting? 
				<router-link to="/join-meeting">Join Meeting</router-link>
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