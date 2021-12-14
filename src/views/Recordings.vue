<template>
	<confirm-popup
		v-if="popupDelete"
		@close="popupDelete = false"
		@function=deleteRecording(currentSerial)
		buttonTitle="Delete"
		popupMessage="Are you sure you want to delete this files? You cannot restore it once deleted."
		popupTitle="Delete files">
	</confirm-popup>
	<div class="default-page">
		<div class="card p-5 lg:p-6 xl:p-7 2xl:p-8">
			<h2 class="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-grey-dark mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">Recording</h2>
			<div class="grid gap-pc375 recording-list pt-0 pr-5 pb-2.5 lg:pb-3 xl:pb-4 2xl:pb-5 pl-2.5">
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base font-bold text-grey-sb">Start Time</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base font-bold text-grey-sb">Subject</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base font-bold text-grey-sb">Meeting ID</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base font-bold text-grey-sb">Files</h6>
				<h6 class="text-px10 lg:text-xs xl:text-sm 2xl:text-base font-bold text-grey-sb"></h6>
			</div>
			<div id="listRecording" class="flex flex-col gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 sticky flex-nowrap overflow-hidden overflow-y-auto pr-2.5 h-full hasInactive">
				<transition-group name="slide-up" appear>
					<div class="grid recording-list gap-pc375 items-center rounded-tr-px5 px-2.5 lg:px-3 xl:px-4 2xl:px-5 py-px11 lg:py-3 xl:py-4 2xl:py-5 border-grey-lighter border hover:bg-grey-background focus:bg-grey-background cursor-pointer" v-for="recording in recordings" :key=recording.meetingNum>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ recording.endDateVal }} {{ recording.endTimeVal }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ recording.subject }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ recording.meetingNum }}</p>
						<p class="text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ recording.files }}</p>
						<div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 justify-end">
							<button @click="console.log('download clicked')" class="bg-gradient-to-b from-white to-grey-f4 border border-grey-lighter text-grey-ed text-px10 lg:text-xs xl:text-sm 2xl:text-base rounded-px5 px-px9 lg:px-3 xl:px-4 2xl:px-5">
								<i class="fas fa-download text-grey-dark text-xs lg:text-sm xl:text-base 2xl:text-lg"></i>
							</button>
							<button @click="deleteClicked(recording.meetingNum)" class="bg-red text-white text-px10 lg:text-xs xl:text-sm 2xl:text-base rounded-px5 px-px9 lg:px-3 xl:px-4 2xl:px-5 py-1">
								Delete
							</button>
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
			currentSerial: '',
			recordings: [
				{
					meetingNum: 123456,
					endDateVal: '28/09/2021',
					endTimeVal: '15:48',
					subject: 'Meeting Andika',
                    files: '4 (1.19GB)'
				},
				{
					meetingNum: 234567,
					endDateVal: '28/09/2021',
					endTimeVal: '17:05',
					subject: 'Meeting Andika',
                    files: '4 (1.19GB)'
				},
			]
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
      deleteClicked(id) {
          this.currentSerial = id
          this.popupDelete = true
      },
	deleteRecording(serialNumber) {
		console.error('Delete Recording Meeting No. '+serialNumber);
	}
  }
}
</script>

<style>
.recording-list {
    width: 100%;
	grid-template-columns: 13% 35% 9% 9% 13%
}
.active {
	display: flex;
}
.inactive {
	display: none;
}
</style>