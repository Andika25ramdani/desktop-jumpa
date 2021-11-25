<template>
  <div class="fixed mx-5 p-5 bg-white border border-grey-lighter rounded-tl-px10 rounded-tr-px10 w-full">
		<h2 class="font-bold text-2xl text-grey-dark">Meeting History</h2>
		<div class="flex gap-pc25 pt-0 pr-5 pb-2.5 pl-2.5">
			<h6 class="text-px10 font-bold text-grey-sb">Date/Time</h6>
			<h6 class="text-px10 font-bold text-grey-sb">Subject</h6>
			<h6 class="text-px10 font-bold text-grey-sb">Meeting ID</h6>
			<h6 class="text-px10 font-bold text-grey-sb">Status</h6>
			<h6 class="text-px10 font-bold text-grey-sb"></h6>
		</div>
		<div class="flex flex-col gap-px5 sticky flex-wrap overflow-hidden overflow-y-auto pr-2.5 h-full">
			<div class="grid gap-pc25 items-center rounded-tr-px5 px-2.5 py-px11 border-grey-lighter border hover:bg-grey-background focus:bg-grey-background" v-for="history in meetingHistories" :key=history.id>
				<p class="text-grey-ed text-px10">{{ history.date }} {{ history.time }}</p>
				<p class="text-grey-ed text-px10">{{ history.subject }}</p>
				<p class="text-grey-ed text-px10">{{ history.id }}</p>
				<p class="text-grey-ed text-px10" :class="{'text-red': history.status == 'cancelled', 'text-green': history.status == 'ended'}">{{ history.status }}</p>
				<button class="bg-gradient-to-b from-white to-grey-f4 border border-grey-lighter text-grey-ed text-px10">Action</button>
			</div>
		</div>
  </div>
</template>

<script>
import API from '../js/api_interface'
export default {
	data(){
		return{
			pageSize: 20,
			pageIndex: 1,
			meetingHistories: []
		}
	},
	async mounted() {
		let res = await API.meeting_list(this.pageSize, this.pageIndex)
		let data = res.data
		console.log(res)
		console.log(data)
		this.meetingHistories = res
	}
}
</script>

<style>

</style>