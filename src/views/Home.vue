<template>
  <div class="home">
    <div class="home-ls">
      <h3>Hi, Dinda Jumpa</h3>
      <p class="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
      <div class="shortcut-card">
        <div class="icon-group">
          <div class="icon-button">A</div>
          <p>New Meeting</p>
        </div>
        <div class="icon-group">
          <div class="icon-button">A</div>
          <p>Join Meeting</p>
        </div>
        <div class="icon-group">
          <div class="icon-button">A</div>
          <p>Schedule</p>
        </div>
      </div>
    </div>
    <div class="home-rs">
      <h4>Upcoming Meeting</h4>
      <div class="upcoming-cards-wrap">
        <div v-for="upcoming in upcomingMeetings" :key=upcoming.id class="upcoming-card">
          <h5>{{ upcoming.title }}</h5>
          <p>{{ upcoming.date }} • {{ upcoming.start }} - {{ upcoming.end }} {{ upcoming.timezone }}</p>
          <p>{{ upcoming.hostName }}</p>
          <button class="option-button"></button>
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
          date: '1 Oktober 2021',
          start: '08:00',
          end: '10:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
        {
          id: 2,
          title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
          date: '1 Oktober 2021',
          start: '10:00',
          end: '11:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
        {
          id: 3,
          title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
          date: '1 Oktober 2021',
          start: '11:00',
          end: '12:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
        {
          id: 4,
          title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
          date: '1 Oktober 2021',
          start: '12:00',
          end: '13:00',
          timezone: 'WIB',
          hostName: 'Kepala Sekolah SDN Cibaduyut'
        },
        // {
        //   id: 5,
        //   title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
        //   date: '1 Oktober 2021',
        //   start: '13:00',
        //   end: '14:00',
        //   timezone: 'WIB',
        //   hostName: 'Kepala Sekolah SDN Cibaduyut'
        // },
        // {
        //   id: 6,
        //   title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
        //   date: '1 Oktober 2021',
        //   start: '14:00',
        //   end: '15:00',
        //   timezone: 'WIB',
        //   hostName: 'Kepala Sekolah SDN Cibaduyut'
        // },
        // {
        //   id: 7,
        //   title: 'Pengukuhan Pengurus Ikal dan Kerja Ke-IV Guru SD Cibaduyut',
        //   date: '1 Oktober 2021',
        //   start: '15:00',
        //   end: '16:00',
        //   timezone: 'WIB',
        //   hostName: 'Kepala Sekolah SDN Cibaduyut'
        // },
      ]
    }
  }
}
</script>
