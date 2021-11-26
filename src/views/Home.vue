<template>
  <div class="fixed flex justify-between w-full">
    <div class="home-ls">
      <transition-group name="slide-left" appear>
        <h3 key="0" class="font-bold text-xl text-grey-dark mt-4 mb-px5 px-16">Hi, Dinda Jumpa</h3>
        <p key="1" class="text-px10 text-grey-sb mb-5 px-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
        <div key="2" class="mx-auto bg-white w-max py-px15 px-5 border-grey-lighter border rounded-px10 flex items-center justify-evenly gap-5">
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
      </transition-group>
    </div>
    <transition name="slide-right" appear>
      <div class="home-rs bg-white py-px15 px-px25 border border-grey-lighter rounded-t-px10 rounded-r-px10 min-w-380 w-half mr-5">
        <h4 class="text-grey-dark font-bold text-sm mb-2.5">Upcoming Meeting</h4>
        <div class="flex gap-2.5 sticky flex-col flex-wrap overflow-hidden overflow-y-auto h-full pr-2.5">
          <transition-group name="slide-right" appear>
            <div v-for="upcoming in upcomingMeetings" :key=upcoming.meetingNum class="rounded-px10 bg-primary text-white p-px15 relative">
              <h5 class="mr-px35 mb-px5 text-sm font-bold">{{ upcoming.subject }}</h5>
              <p class="mr-px35 mb-px5 text-px10">{{ upcoming.startDateVal }} • {{ upcoming.startTimeVal }} - {{ upcoming.endTime }}</p>
              <p class="mr-px35 mb-px5 text-px10">{{ upcoming.hostName }}</p>
              <button class="w-5 h-5 rounded-full bg-white absolute top-4 right-4"></button>
            </div>
          </transition-group>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data(){
    return{
      pageIndex: 1,
      pageSize: 15,
    }
  },
  computed: {
		...mapGetters({
			upcomingMeetings: 'meetings/getUpcoming'
		})
	},
	async created() {
		await this.$store.dispatch('meetings/getUpcoming', {
			pageSize: this.pageSize
		})

		console.log(this.upcomingMeetings)
	}
}
</script>
<style>
.home-rs {
  width: calc(54% - 20px);
  height: calc(100vh - 62px) }
.home-ls {
  /* min-width: 340px; */
  max-width: 46%;
  background: url('/../img/sumpah-pemuda.png') center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  max-height: calc(100vh - 62px) }
</style>