<template>
  <NewMeetingPopup v-if="meetingPopup" @close="meetingPopup = false"/>
  <join-meeting-popup v-if="joinPopup" @close="joinPopup = false" />
  <div class="fixed flex flex-col sm:flex-row justify-between w-full">
    <div class="home-ls">
		<transition-group name="slide-left" appear>
			<h3 key="0" class="kanit font-bold text-xl lg:text-3xl text-grey-dark mt-4 mb-px5 xl:mb-px15 px-4 sm:px-16">Hi, {{ account }}</h3>
			<p key="1" class="text-px10 xl:text-base text-grey-sb mb-5 xl:mb-px30 px-4 sm:px-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni assumenda iste reprehenderit ab maiores enim placeat, cum excepturi sit labore veritatis odit adipisci perferendis animi facere qui ut facilis numquam.</p>
			<div key="2" class="mx-auto bg-white w-max py-px15 px-5 xl:p-px25 border-grey-lighter border rounded-px10 flex items-center justify-evenly gap-5 xl:gap-6">
				<div @click="newMeeting" class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
					<div class="bg-primary rounded-px10 w-16 xl:w-px100 h-16 xl:h-px100 p-px13 xl:p-7 flex items-center">
						<i class="fas fa-video text-white text-3xl lg:text xl:text-5xl"></i>
					</div>
					<p class="text-px8 xl:text-xs text-center">New Meeting</p>
				</div>
				<div @click="joinPopup = true" class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
					<div class="bg-primary rounded-px10 w-16 xl:w-px100 h-16 xl:h-px100 p-px13 xl:p-7 flex items-center">
						<i class="fas fa-sign-in-alt text-white text-3xl xl:text-5xl mx-auto"></i>
					</div>
					<p class="text-px8 xl:text-xs text-center">Join Meeting</p>
				</div>
				<div class="flex flex-col items-center gap-2.5 w-max cursor-pointer">
					<div class="bg-primary rounded-px10 w-16 xl:w-px100 h-16 xl:h-px100 p-px13 xl:p-7 flex items-center">
						<i class="fas fa-calendar-alt text-white text-3xl xl:text-5xl mx-auto"></i>
					</div>
					<p class="text-px8 xl:text-xs text-center">Schedule</p>
				</div>
			</div>
		</transition-group>
    </div>
    <transition name="slide-right" appear>
		<div class="home-rs bg-white border border-grey-lighter rounded-t-px10">
			<nav role="navigation" class="w-full bg-grey-lighter rounded-t-px10 flex justify-between text-center text-sm xl:text-lg font-bold text-grey-sb">
                <a @click="changeTab('meetingInfo')" class="w-1/2 py-5 cursor-pointer bg-white text-grey-dark rounded-t-px10" :class="{ active: currentTab === 'meetingInfo'}">Upcoming Meeting</a>
                <a @click="changeTab('participants')" class="w-1/2 py-5 cursor-pointer" :class="{ active: currentTab === 'participants'}">Scheduled Meeting</a>
            </nav>
			<div class="h-full pt-2.5 xl:pt-px30 px-2.5 md:px-px25 xl:px-px45">
				<div class="h-full grid grid-cols-1 gap-2.5 xl:gap-5 sticky flex-col flex-wrap overflow-hidden overflow-y-auto">
					<transition-group name="slide-right" v-if="upcomingMeetings.length > 1" appear>
						<div v-for="upcoming in upcomingMeetings" :key=upcoming.meetingNum class="sch-upc-meeting rounded-px10 bg-primary text-white p-px15 xl:p-5 relative">
							<div class="flex gap-2.5 xl:gap-px15 items-center text-px8 xl:text-xs">
								<p class="text-white">Meeting ID: {{ upcoming.meetingNum }}</p>
								<p class="bg-green rounded-full py-0.5 xl:py-1 px-4">In Process</p>
								<!-- <p class="bg-yellow-500 rounded-full py-0.5 xl:py-1 px-4">To Be Hosted</p> -->
							</div>
							<h5 class="mr-px35 mb-px5 xl:mb-2.5 text-sm xl:text-lg font-bold mt-1.5">{{ upcoming.subject }}</h5>
							<p class="mr-px35 mb-2.5 xl:mb-5 text-px10 xl:text-xs">
								<i class="fas fa-clock mr-2.5"></i>
								{{ upcoming.startDateVal }} • {{ upcoming.startTimeVal }} - {{ upcoming.endTimeVal }}</p>
							<button class="bg-green py-2 px-5 rounded-full font-bold">HOST MEETING</button>
							<!-- <button class="bg-grey-background border border-grey-sb text-grey-dark py-2 px-5 rounded-full font-bold">HOST MEETING</button> -->
							<button class="w-5 xl:w-px25 h-5 xl:h-px25 rounded-full bg-white absolute top-4 xl:top-5 right-4 xl:right-5">
								<i class="fas fa-ellipsis-h text-grey-dark text-xs xl:text-sm"></i>
							</button>
						</div>
					</transition-group>
					<transition name="slide-right" appear v-else>
						<div class="text-base text-grey-sb mx-auto my-auto px-4 py-8">No upcoming meetings today</div>
					</transition>
				</div>
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
			meetingState: 1
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
	min-width: 300px;
	width: 90%;
	height: 100%;
	margin: 0 auto;
}
.home-ls {
	min-width: 340px;
	padding: 0 0 25%;
	background: url('/../img/sumpah-pemuda.png') center bottom;
	background-size: contain;
	background-repeat: no-repeat;
}
.hldbtn::before {
	content: '•••';
	color: #424242;
	font-size: .75rem;
	position: absolute;
	bottom: 3.125%;
	right: 20%; }
.sch-upc-meeting {
	background: url('/../img/bg-upc-sch.png') no-repeat center;
	background-size: cover;
}
@media screen and (min-width: 640px) {
	.home-ls {
		max-width: 45%; 
		max-height: calc(100vh - 62px);
	}
	.home-rs {
		height: calc(100vh - 62px);
		width: calc(55% - 20px);
		margin: 0 25px 0 0;
	}
}
@media screen and (min-width: 1024px) {
	.home-rs {
		margin: 0 50px 0 0;
		min-width: 583px;
	}
}
@media screen and (min-width: 1280px) {
	.home-rs {
		margin: 0 100px 0 0;
	}
}
</style>