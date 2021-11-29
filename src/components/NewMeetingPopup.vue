<template>
	<div id="newMeetingPopup" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<div class="bg-white rounded-px5 shadow-custom p-5 flex flex-col gap-2.5">
			<div class="">
				<h2 class="text-grey-dark font-bold text-2xl">New Meeting</h2>
			</div>
			<div class="">
				<form class="flex flex-col gap-2.5">
					<div class="flex flex-col gap-2.5">
						<label class="text-px8">Choose your meeting plan</label>
						<div class="grid grid-cols-3 gap-2.5">
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
							<div class="flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
								<input type="radio" name="" id="" class="bg-red">
								<div class="">
									<h6 class="text-px10 font-bold">Platinum</h6>
									<p class="text-px8">Up to 3000 Participants</p>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-px5">
						<label class="text-px8 text-grey-dark">Subject</label>
						<div class="flex gap-2.5 items-center">
							<input type="text" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Enter your meeting subject">
							<p class="text-px8 text-grey-ao">1-80 characters</p>
						</div>
					</div>
					<div class="flex flex-col gap-px5">
						<label class="text-px8 text-grey-dark">Password</label>
						<div class="flex gap-2.5 items-center">
							<input type="password" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Enter meeting password">
							<p class="text-px8 text-grey-ao">0-8 digits</p>
						</div>
					</div>
					<div class="flex flex-col gap-px5">
						<div class="flex w-full justify-between items-center">
							<label class="text-px8 text-grey-dark">Invitees</label>
							<button class="text-primary text-px10 font-bold">Add from Contacts</button>
						</div>
						<textarea name="" id="" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Separate invitees emails with enter or semicolon key"></textarea>
						<p class="text-px8 text-grey-ao">Invitees are included in the 2999 person limit</p>
					</div>
				</form>
			</div>
			<div class="flex gap-20">
				<button class="font-bold text-grey-dark text-px10">MORE OPTIONS</button>
				<div class="flex gap-2.5">
					<button @click="$emit('close')" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
					<button class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">MEET NOW</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'NewMeetingPopup',
}
</script>
<style>
.overlay-bg {
	background-color: rgba(66, 66, 66, .8);
}
</style>