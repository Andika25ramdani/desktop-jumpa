<template>
  <NewMeetingPopup v-if="meetingPopup" @close="meetingPopup = false"/>
  <join-meeting-popup v-if="joinPopup" @close="joinPopup = false" />
  <div class="fixed flex justify-between w-full">
    <div class="home-ls">
      <transition-group name="slide-left" appear>
        <h3 key="0" class="
          kanit font-bold text-xl text-grey-dark mt-4 mb-px5 px-16
          lg:text-2xl lg:mb-2
          xl:text-3xl xl:mb-3
          2xl:text-4xl 2xl:mb-4
        ">Hi, {{ account }}</h3>
        <p key="1" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-sb mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 px-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
        <div key="2" class="mx-auto bg-white w-max py-px15 lg:py-4 xl:py-5 2xl:py-6 px-5 lg:px-4 xl:px-5 2xl:px-6 border-grey-lighter border rounded-px10 flex items-center justify-evenly gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
          <div @click="newMeeting" class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
            <div class="bg-primary rounded-px10 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 p-px13 flex items-center">
              <i class="fas fa-video text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mx-auto"></i>
            </div>
            <p class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-center">New Meeting</p>
          </div>
          <div @click="joinPopup = true" class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
            <div class="bg-primary rounded-px10 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 p-px13 flex items-center">
              <i class="fas fa-sign-in-alt text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mx-auto"></i>
            </div>
            <p class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-center">Join Meeting</p>
          </div>
          <div class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
            <div class="bg-primary rounded-px10 w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 p-px13 flex items-center">
              <i class="fas fa-calendar-alt text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mx-auto"></i>
            </div>
            <p class="text-px8 lg:text-px10 xl:text-xs 2xl:text-sm text-center">Schedule</p>
          </div>
        </div>
      </transition-group>
    </div>
    <transition name="slide-right" appear>
      <div class="home-rs bg-white py-4 lg:py-5 xl:py-6 2xl:py-7 px-6 lg:px-7 xl:px-8 2xl:px-9 border border-grey-lighter rounded-t-px10 rounded-r-px10 min-w-380 w-half mr-5">
        <h4 class="kanit text-grey-dark font-bold text-sm lg:text-base xl:text-lg 2xl:text-xl mb-2.5 lg:mb-3 xl:mb-4 2xl:mb-5">Upcoming Meeting</h4>
        <div class="grid grid-cols-1 gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-5 sticky flex-col flex-wrap overflow-hidden overflow-y-auto pr-2.5">
          <transition-group name="slide-right" v-if="upcomingMeetings.length > 1" appear>
            <div v-for="upcoming in upcomingMeetings" :key=upcoming.meetingNum class="rounded-px10 bg-primary text-white p-px15 relative">
              <h5 class="mr-px35 mb-px5 text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold">{{ upcoming.subject }}</h5>
              <p class="mr-px35 mb-px5 text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ upcoming.startDateVal }} • {{ upcoming.startTimeVal }} - {{ upcoming.endTimeVal }}</p>
              <p class="mr-px35 mb-px5 text-px10 lg:text-xs xl:text-sm 2xl:text-base">{{ upcoming.hostName }}</p>
              <button class="w-5 lg:w-6 xl:w-7 2xl:w-8 h-5 lg:h-6 xl:h-7 2xl:h-8 rounded-full bg-white absolute top-4 right-4 ">
                <i class="fas fa-ellipsis-h text-grey-dark text-xs lg:text-sm xl:text-base 2xl:text-lg absolute top-1 lg:top-1.5 left-1 lg:left-1.5"></i>
              </button>
            </div>
          </transition-group>
          <transition name="slide-right" appear v-else>
            <div class="text-xs lg:text-sm xl:text-base 2xl:text-lg text-grey-dark text-center w-full">
              No Upcoming Meetings Yet!
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import JoinMeetingPopup from '../components/JoinMeetingPopup.vue'
import NewMeetingPopup from '../components/NewMeetingPopup.vue'
export default {
  components: { NewMeetingPopup, JoinMeetingPopup },
  name: 'Home',
  data(){
    return{
      meetingPopup: false,
      joinPopup: false,
      pageIndex: 1,
      pageSize: 15,
      account: localStorage.getItem('account')
    }
  },
  computed: {
		...mapGetters({
			upcomingMeetings: 'meetings/getLists',
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
</style>