<template>
  <NewMeetingPopup v-if="meetingPopup" @close="meetingPopup = false" />
  <div class="fixed flex justify-between w-full">
    <div class="home-ls">
      <transition-group name="slide-left" appear>
        <h3 key="0" class="kanit font-bold text-xl text-grey-dark mt-4 mb-px5 px-16">Hi, Dinda Jumpa</h3>
        <p key="1" class="text-px10 text-grey-sb mb-5 px-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
        <div key="2" class="mx-auto bg-white w-max py-px15 px-5 border-grey-lighter border rounded-px10 flex items-center justify-evenly gap-5">
          <div @click="newMeeting" class="flex flex-col items-center gap-2.5 w-max">
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
        <h4 class="kanit text-grey-dark font-bold text-sm mb-2.5">Upcoming Meeting</h4>
        <div class="grid grid-cols-1 gap-2.5 sticky flex-col flex-wrap overflow-hidden overflow-y-auto h-full pr-2.5">
          <transition-group name="slide-right" appear>
            <div v-for="upcoming in upcomingMeetings" :key=upcoming.meetingNum class="rounded-px10 bg-primary text-white p-px15 relative">
              <h5 class="mr-px35 mb-px5 text-sm font-bold">{{ upcoming.subject }}</h5>
              <p class="mr-px35 mb-px5 text-px10">{{ upcoming.startDateVal }} • {{ upcoming.startTimeVal }} - {{ upcoming.endTimeVal }}</p>
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
import NewMeetingPopup from '../components/NewMeetingPopup.vue'
export default {
  components: { NewMeetingPopup },
  name: 'Home',
  data(){
    return{
      meetingPopup: false,
      pageIndex: 1,
      pageSize: 15,
    }
  },
  computed: {
		...mapGetters({
			upcomingMeetings: 'meetings/getLists'
		})
	},
	async created() {
		await this.$store.dispatch('meetings/getLists', {
			pageSize: this.pageSize,
      meetingState: 0
		})
	},
  methods: {
    newMeeting() {
      this.meetingPopup = true
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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
.hldbtn::before {
  content: '•••';
  color: #424242;
  font-size: .75rem;
  position: absolute;
  bottom: 3.125%;
  right: 20%; }
.kanit {
  font-family: 'Kanit', sans-serif }
</style>