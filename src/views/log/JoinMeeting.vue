<template>
	<div class="join-meeting">
		 
		<div class="card">
			<h2 class="card-header-text font-bold text-2xl text-center mb-5">Join Meeting</h2>
			<form action="">
				<input type="text" name="" id="" placeholder="Enter the Meeting ID">
				<input type="text" name="" id="" placeholder="Enter Your Name">
				<input type="password" name="" id="" placeholder="Meeting Password (If Required)">
				<input type="submit" value="join meeting" class="mt-5">
			</form>
			<p class="card-footer-text">Are you a host? 
				<router-link to="/host-meeting">Host Meeting</router-link>
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