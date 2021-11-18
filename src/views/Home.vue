<template>
  <div class="home flex">
    <div class="bg-transparent">
      <h3>Hi, Dinda Jumpa</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
      <div class="bg-white rounded border border-gray-100 flex flex-nowrap">
        <div class="icon-group">
          <div class="icon-button"></div>
          <p>New Meeting</p>
        </div>
      </div>
    </div>
    <div class="bg-white">
      <h4>Upcoming Meeting</h4>
      <div class="">
        <div v-for="upcoming in upcomingMeetings" :key=upcoming.id class="upcoming-card">
          <h5>{{ upcoming.title }}</h5>
          <p>{{ upcoming.date }} • {{ upcoming.start }} - {{ upcoming.end }} {{ upcoming.timezone }}</p>
          <p>{{ upcoming.hostName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      upcomingMeetings: [
        {
          id: 1,
          title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
          date: '1 Oktober 2021 •',
          start: '08:00',
          end: '10:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
        {
          id: 2,
          title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
          date: '1 Oktober 2021 •',
          start: '10:00',
          end: '11:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
      ]
    }
  }
}
</script>
