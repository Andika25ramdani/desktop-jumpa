<template>
  <div class="meet-history">
		<h2 class="page-header">Meeting History</h2>
		<v-simple-table>
			<template v-slot:default>
				<thead>
					<tr>
						<th>Date/Time</th>
						<th>Subject</th>
						<th>Meeting ID</th>
						<th>Status</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="item in meetingHistories"
						:key="item.name"
					>
						<td>{{ item.date }} {{ item.time }}</td>
						<td>{{ item.subject }}</td>
						<td>{{ item.id }}</td>
						<td>{{ item.status }}</td>
						<td></td>
					</tr>
				</tbody>
			</template>
		</v-simple-table>
		<!-- <table>
			<thead>
				<td>Date/Time</td>
				<td>Subject</td>
				<td>Meeting ID</td>
				<td>Status</td>
				<td></td>
			</thead>
			<tbody>
				<tr>
					<td>28/09/2021 11:55</td>
					<td>Pengukuhan Pengurus Ikal dan Rapat Ke-IV.....</td>
					<td>2805184</td>
					<td>Cancelled</td>
					<td><button>Actions</button></td>
				</tr>
			</tbody>
		</table> -->
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
			]
		}
	}
}
</script>

<style>

</style>