<template>
  <div class="fixed mx-5 p-5 bg-white border border-grey-lighter rounded-tl-px10 rounded-tr-px10">
		<h2 class="font-bold text-2xl text-grey-dark">Meeting History</h2>
		<div class="grid gap-pc25 pt-0 pr-5 pb-2.5 pl-2.5">
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
export default {
	data(){
		return{
			meetingHistories: [
				{
					id: 2805184,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'cancelled'
				},
				{
					id: 2805185,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'ended'
				},
				{
					id: 2805186,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'cancelled'
				},
				{
					id: 2805187,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'ended'
				},
				{
					id: 2805188,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'cancelled'
				},
				{
					id: 2805189,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'ended'
				},
				{
					id: 2805190,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'cancelled'
				},
				{
					id: 2805191,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'ended'
				},
				{
					id: 2805192,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'cancelled'
				},
				{
					id: 2805193,
					date: '28/09/2021',
					time: '11:55',
					subject: 'Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....',
					status: 'ended'
				},
			]
		}
	}
}
</script>

<style>

</style>