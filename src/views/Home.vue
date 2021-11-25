<template>
  <div class="fixed flex justify-between">
    <div class="">
      <h3 class="font-bold text-xl text-grey-dark mt-4 mb-px5 px-16">Hi, Dinda Jumpa</h3>
      <p class="text-px10 text-grey-sb mb-5 px-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
      <div class="mx-auto bg-white w-max py-px15 px-5 border-grey-lighter border rounded-px10 flex items-center justify-evenly gap-5">
        <div class="flex flex-col items-center gap-2.5 w-max">
          <div class="bg-primary rounded-px10 w-px62 h-px62 p-px13">A</div>
          <p class="text-px8 text-center">New Meeting</p>
        </div>
        <div class="flex flex-col items-center gap-2.5 w-max">
          <div class="bg-primary rounded-px10 w-px62 h-px62 p-px13">A</div>
          <p class="text-px8 text-center">Join Meeting</p>
        </div>
        <div class="flex flex-col items-center gap-2.5 w-max">
          <div class="bg-primary rounded-px10 w-px62 h-px62 p-px13">A</div>
          <p class="text-px8 text-center">Schedule</p>
        </div>
      </div>
    </div>
    <div class="bg-white py-px15 px-px25 border border-grey-lighter rounded-t-px10 rounded-r-px10 min-w-380 mr-5">
      <h4 class="text-grey-dark font-bold text-sm mb-2.5">Upcoming Meeting</h4>
      <div class="flex gap-2.5 sticky flex-col flex-wrap overflow-hidden overflow-y-auto h-full pr-2.5">
        <div v-for="upcoming in upcomingMeetings" :key=upcoming.id class="rounded-px10 bg-primary text-white p-px15 relative">
          <h5 class="mr-px35 mb-px5 text-sm font-bold">{{ upcoming.title }}</h5>
          <p class="mr-px35 mb-px5 text-px10">{{ upcoming.date }} • {{ upcoming.start }} - {{ upcoming.end }} {{ upcoming.timezone }}</p>
          <p class="mr-px35 mb-px5 text-px10">{{ upcoming.hostName }}</p>
          <button class="w-5 h-5 rounded-full bg-white absolute top-4 right-4"></button>
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