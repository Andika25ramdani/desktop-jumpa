<template>
  <div class="meet-history">
		<h2 class="page-header">Meeting History</h2>
		<div class="table-lists-title">
			<h6 class="tlt">Date/Time</h6>
			<h6 class="tlt">Subject</h6>
			<h6 class="tlt">Meeting ID</h6>
			<h6 class="tlt">Status</h6>
			<h6 class="tlt"></h6>
		</div>
		<div class="table-lists-wrap">
			<div class="table-list-item" v-for="history in meetingHistories" :key=history.id>
				<p class="tli-text">{{ history.date }} {{ history.time }}</p>
				<p class="tli-text second-item">{{ history.subject }}</p>
				<p class="tli-text">{{ history.id }}</p>
				<p class="tli-text" :class="{'cancel': history.status == 'cancelled', 'end': history.status == 'ended'}">{{ history.status }}</p>
				<button class="last-item white-button">Action</button>
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