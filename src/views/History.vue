<template>
	<confirm-popup
		v-if="popupDelete"
		@close="popupDelete = false"
		@function=deleteHistory(currentSerial)
		buttonTitle="Delete"
		popupMessage="Are you sure you want to delete this history? You cannot restore it once deleted."
		popupTitle="Delete History">
	</confirm-popup>
	<div class="default-page">
		<div class="card p-5 lg:p-6 xl:p-7 2xl:p-8">
			<h2 class="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-grey-dark mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">Meeting History</h2>
			<div class="grid gap-pc25 history-list pt-0 pr-5 pb-2.5 lg:pb-3 xl:pb-4 2xl:pb-5 pl-2.5 lg:pl-3 xl:pl-4 2xl:pl-5">
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  font-bold text-grey-sb">Date/Time</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  font-bold text-grey-sb">Subject</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  font-bold text-grey-sb">Meeting ID</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  font-bold text-grey-sb">Status</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  font-bold text-grey-sb"></h6>
			</div>
			<div id="listHistory" class="flex flex-col gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 lg:px-2 xl:px-3 2xl:px-4 sticky flex-nowrap overflow-hidden overflow-y-auto pr-2.5 h-full hasInactive">
				<transition-group name="slide-up" appear>
					<div class="grid history-list gap-pc25 items-center rounded-tr-px5 px-2.5 lg:px-3 xl:px-4 2xl:px-5 py-px11 lg:py-3 xl:py-4 2xl:py-5  border-grey-lighter border hover:bg-grey-background focus:bg-grey-background cursor-pointer" v-for="history in lists" :key=history.meetingNum @dblclick="toDetail(history.meetingSerialNum)">
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base ">{{ history.endDateVal }} {{ history.endTimeVal }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base ">{{ history.subject }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base ">{{ history.meetingNum }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base " :class="{'text-red': history.state === -1, 'text-green': history.state === 3}">{{ history.state === 3 ? 'Ended' : '' }}{{ history.state === -1 ? 'Canceled' : '' }}</p>
						<div class="">
							<button @click="openToggle(history.meetingSerialNum)" class="bg-gradient-to-b w-max from-white to-grey-f4 border border-grey-lighter text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base  rounded-px5 flex gap-px15 items-center justify-center px-2 lg:px-3 xl:px-4 2xl:px-5">
								Action <i class="fas fa-sort text-grey-dark text-px8 lg:text-px10 xl:text-xs 2xl:text-sm"></i>
							</button>
							<div :key=history.meetingSerialNum :id=history.meetingSerialNum class="flex flex-col rounded-px5 shadow-sm bg-white py-2.5 px-px15 absolute gap-px5 lg:gap-2 lg:px-4 xl:px-5 2xl:px-6 inactive">
								<p @click="restartMeeting(history.meetingSerialNum)" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  text-grey-sb cursor-pointer hover:text-grey-ed hover:font-bold">Restart meeting</p>
								<p @click="reschedule(history.meetingSerialNum)" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  text-grey-sb cursor-pointer hover:text-grey-ed hover:font-bold">Reschedule</p>
								<p @click="popupDelete = true" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base  text-grey-sb cursor-pointer hover:text-grey-ed hover:font-bold">Delete</p>
							</div>
						</div>
					</div>
				</transition-group>
			</div>
		</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConfirmPopup from '../components/ConfirmPopup.vue'
export default {
  components: { ConfirmPopup },
	data() {
		return {
			popupDelete: false,
			currentSerial: ''
		}
	},
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
				this.currentSerial = elId
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
		this.$router.push({path: `/history-meeting-detail/${serialNum}`})
    },
	restartMeeting(serialNumber) {
		console.warn('Restart Meeting No. '+serialNumber);
	},
	reschedule(serialNumber) {
		console.log('Reschedule Meeting No. '+serialNumber);
	},
	deleteHistory(serialNumber) {
		console.error('Delete History Meeting No. '+serialNumber);
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