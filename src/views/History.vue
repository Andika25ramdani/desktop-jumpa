<template>
	<div class="default-page">
		<div class="card">
			<h2 class="font-bold text-2xl text-grey-dark mb-5">Meeting History</h2>
			<div class="grid gap-pc25 history-list pt-0 pr-5 pb-2.5 pl-2.5">
				<h6 class="text-px10 font-bold text-grey-sb">Date/Time</h6>
				<h6 class="text-px10 font-bold text-grey-sb">Subject</h6>
				<h6 class="text-px10 font-bold text-grey-sb">Meeting ID</h6>
				<h6 class="text-px10 font-bold text-grey-sb">Status</h6>
				<h6 class="text-px10 font-bold text-grey-sb"></h6>
			</div>
			<div id="listHistory" class="flex flex-col gap-px5 sticky flex-nowrap overflow-hidden overflow-y-auto pr-2.5 h-full hasInactive">
				<div class="grid history-list gap-pc25 items-center rounded-tr-px5 px-2.5 py-px11 border-grey-lighter border hover:bg-grey-background focus:bg-grey-background" v-for="history in lists" :key=history.meetingNum>
					<p class="text-grey-ed text-px10">{{ history.endDateVal }} {{ history.endTimeVal }}</p>
					<p class="text-grey-ed text-px10">{{ history.subject }}</p>
					<p class="text-grey-ed text-px10">{{ history.meetingNum }}</p>
					<p class="text-grey-ed text-px10" :class="{'text-red': history.state === -1, 'text-green': history.state === 3}">{{ history.state === 3 ? 'Ended' : '' }}{{ history.state === -1 ? 'Canceled' : '' }}</p>
					<div class="">
						<button @click="openToggle(history.meetingNum)" class="bg-gradient-to-b w-20 from-white to-grey-f4 border border-grey-lighter text-grey-ed text-px10">Action</button>
						<div :key=history.meetingNum :id=history.meetingNum class="flex flex-col rounded-px5 shadow-sm bg-white py-2.5 px-px15 absolute gap-px5 inactive">
							<p class="text-px10 text-grey-sb hover:text-grey-ed hover:font-bold">Restart meeting</p>
							<p class="text-px10 text-grey-sb hover:text-grey-ed hover:font-bold">Reschedule</p>
							<p class="text-px10 text-grey-sb hover:text-grey-ed hover:font-bold">Delete</p>
						</div>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters({
			lists: 'meetings/getLists'
		})
	},
	async created() {
		await this.$store.dispatch('meetings/getLists', {
			pageSize: 20,
      meetingState: 1
		})
	},
  methods: {
    openToggle(elId) {
		if (document.getElementById(elId).classList.contains('inactive')) {
			if (document.getElementById("listHistory").classList.contains('hasInactive')) {
				document.getElementById(elId).classList.remove('inactive')
				document.getElementById(elId).classList.add('active')
				document.getElementById("listHistory").classList.remove('hasInactive')
				document.getElementById("listHistory").classList.add('hasActive')
			}
		} else {
			document.getElementById(elId).classList.remove('active')
			document.getElementById(elId).classList.add('inactive')
			document.getElementById("listHistory").classList.remove('hasActive')
			document.getElementById("listHistory").classList.add('hasInactive')
		}
    },
    toDetail(serialNum) {
      alert(serialNum)
    }
  }
}
</script>

<style>
.history-list {
	grid-template-columns: 14% 37% 10% 10% 19%
}
.active {
	display: flex;
}
.inactive {
	display: none;
}
</style>