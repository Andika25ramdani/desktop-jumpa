<template>
	<div id="newMeetingPopup" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
			<div class="bg-white fixed max-h-90 rounded-px5 shadow-custom p-5 flex flex-col gap-2.5">
				<div class="">
					<h2 class="text-grey-dark font-bold text-2xl">{{ moreOption === true ? 'Instant Meeting Template' : 'New Meeting' }}</h2>
				</div>
				<form @submit.prevent="newMeeting" class=" overflow-hidden overflow-y-auto pr-2">
					<div v-if="moreOption == false" class="flex flex-col gap-2.5">
						<div class="flex flex-col gap-2.5">
							<label class="text-px8">Choose your meeting plan</label>
							<div class="grid grid-cols-3 gap-2.5">
								<label for="platinum" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="platinum" v-model="meetingPlan">
									<div class="">
										<h6 class="text-px10 font-bold">Platinum</h6>
										<p class="text-px8">Up to 3000 Participants</p>
									</div>
								</label>
								<label for="gold" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="gold" v-model="meetingPlan" class="bg-red">
									<div class="">
										<h6 class="text-px10 font-bold">Gold</h6>
										<p class="text-px8">Up to 2000 Participants</p>
									</div>
								</label>
								<label for="silver" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="silver" v-model="meetingPlan" class="bg-red">
									<div class="">
										<h6 class="text-px10 font-bold">Silver</h6>
										<p class="text-px8">Up to 1500 Participants</p>
									</div>
								</label>
								<label for="business" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="business" v-model="meetingPlan" class="bg-red">
									<div class="">
										<h6 class="text-px10 font-bold">Business</h6>
										<p class="text-px8">Up to 750 Participants</p>
									</div>
								</label>
								<label for="pro" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="pro" v-model="meetingPlan" class="bg-red">
									<div class="">
										<h6 class="text-px10 font-bold">Pro</h6>
										<p class="text-px8">Up to 500 Participants</p>
									</div>
								</label>
								<label for="basic" class="meet-plan flex items-center gap-2.5 pl-2.5 py-4 border border-grey-lightjumpa rounded">
									<input type="radio" name="meetingPlan" id="basic" v-model="meetingPlan" class="bg-red">
									<div class="">
										<h6 class="text-px10 font-bold">Basic</h6>
										<p class="text-px8">Up to 300 Participants</p>
									</div>
								</label>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label class="text-px8 text-grey-dark">Subject</label>
							<div class="flex items-center justify-between gap-2.5">
								<input type="text" v-model="subject" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded w-full" placeholder="Enter your meeting subject">
								<p v-if="v$.subject.$error" class="text-px8 text-red min-w-max">{{ v$.subject.$errors[0].$message }}</p>
								<p v-else class="text-px8 text-grey-ao min-w-max">1-80 characters</p>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label class="text-px8 text-grey-dark">Password</label>
							<div class="flex w-full justify-between items-center gap-2.5">
								<div class="flex gap-0 border border-grey-ce rounded w-full">
									<input v-if="showPassword" type="text" v-model="password" class="py-px5 pl-2.5 text-px10 outline-none w-full" placeholder="Enter meeting password">
									<input v-else type="password" v-model="password" class="py-px5 pl-2.5 text-px10 outline-none w-full" placeholder="Enter meeting password">
									<button @click="visiblePassword" class="pr-2.5">
										<i v-if="showPassword" class="fas fa-eye text-grey-dark text-xs"></i>
										<i v-else class="fas fa-eye-slash text-grey-dark text-xs"></i>
									</button>
								</div>
								<p v-if="v$.password.$error" class="text-px8 text-red min-w-max">{{ v$.password.$errors[0].$message }}</p>
								<p v-else class="text-px8 text-grey-ao min-w-max">0-8 digits</p>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<div class="flex w-full justify-between items-center">
								<label class="text-px8 text-grey-dark">Invitees</label>
								<button class="text-primary text-px10 font-bold">Add from Contacts</button>
							</div>
							<textarea v-model="invitees" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Separate invitees emails with enter or semicolon key"></textarea>
							<p v-if="v$.invitees.$error" class="text-px8 text-red">{{ v$.invitees.$errors[0].$message }}</p>
							<p v-else class="text-px8 text-grey-ao">Invitees are included in the  person limit</p>
						</div>
					</div>
					<div v-if="moreOption == true" class="flex flex-col gap-2.5">
						<div class="flex flex-col gap-px5 w-full">
							<label class="text-px8 text-grey-dark">Organizer</label>
							<div class="flex gap-2.5">
								<div class="flex flex-1 flex-col gap-1">
									<input type="text" v-model="organizer" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Enter name">
									<!-- <p class="text-px8 text-grey-ao">1-80 characters</p> -->
									<p v-if="v$.organizer.$error" class="text-px8 text-red">{{ v$.organizer.$errors[0].$message }}</p>
								</div>
								<div class="flex flex-1 flex-col gap-1">
									<input type="email" v-model="orgEmail" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded" placeholder="Enter email address">
									<!-- <p class="text-px8 text-grey-ao">1-80 characters</p> -->
									<p v-if="v$.orgEmail.$error" class="text-px8 text-red">{{ v$.orgEmail.$errors[0].$message }}</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label for="" class="text-px8 text-grey-dark">Time Zone</label>
							<div class="custom-select flex items-center justify-between text-px10 text-grey-dark">
								<select v-model="timeZone">
									<option value="" selected disabled>(GMT+07:00) Jakarta</option>
									<option value="Asia/Jakarta">(GMT+07:00) Jakarta</option>
									<option value="Asia">(GMT+07:00) Jakarta</option>
								</select>
								<!-- <p v-if="v$.timeZone.$error" class="text-px8 text-red">{{ v$.timeZone.$errors[0].$message }}</p> -->
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label for="" class="text-px8 text-grey-dark">Duration</label>
							<div class="flex gap-2.5">
								<div class="flex flex-1 flex-col gap-1">
									<div class="custom-select flex items-center gap-1">
										<select v-model="durHr">
											<option value="1" selected>1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
										</select>
										<p class="text-px8 text-grey-ao">Hr</p>
									</div>
									<p v-if="v$.durHr.$error" class="text-px8 text-red">{{ v$.durHr.$errors[0].$message }}</p>
								</div>
								<div class="flex flex-1 flex-col gap-1">
									<div class="custom-select flex items-center gap-1">
										<select v-model="durMn" placehoder="Enter Timezone">
											<option value="0" selected>0</option>
											<option value="10">10</option>
											<option value="20">20</option>
											<option value="30">30</option>
											<option value="40">40</option>
											<option value="50">50</option>
										</select>
										<p class="text-px8 text-grey-ao">Mn</p>
									</div>
									<p v-if="v$.durMn.$error" class="text-px8 text-red">{{ v$.durMn.$errors[0].$message }}</p>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label class="text-px8 text-grey-dark">Meeting Settings</label>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="record" v-model="record" class="">
								<label for="record" class="text-px10 text-grey-ed">Automatic Recording</label>
							</div>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="locked" v-model="locked" class="">
								<label for="locked" class="text-px10 text-grey-ed">Meeting Locked</label>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label class="text-px8 text-grey-dark">Atendees Control</label>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="muted" v-model="muted" class="">
								<label for="muted" class="text-px10 text-grey-ed">Muted by Host on Entry</label>
							</div>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="attendList" v-model="attendList" class="">
								<label for="attendList" class="text-px10 text-grey-ed">Display Attendees List/Status</label>
							</div>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="chat" v-model="chat" class="">
								<label for="chat" class="text-px10 text-grey-ed">Allow Chat</label>
							</div>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="presentation" v-model="presentation" class="">
								<label for="presentation" class="text-px10 text-grey-ed">Disable Presentation</label>
							</div>
							<div class="flex gap-2.5 items-center">
								<input type="checkbox" id="beep" v-model="beep" class="">
								<label for="beep" class="text-px10 text-grey-ed">Play Beep When Attendee Joins/Leaves Meeting</label>
							</div>
						</div>
						<div class="flex flex-col gap-px5">
							<label for="" class="text-px8 text-grey-dark">Meeting Layouts</label>
							<div class="grid grid-cols-3 gap-2.5">
								<label for="tile" class="flex items-center gap-px5 px-2.5 py-px9 border border-grey-lighter rounded">
									<input type="radio" name="meetingLayouts" id="tile" v-model="meetingLayouts">
									<div class="flex gap-px5 items-center">
										<span class="">Icons</span>
										<p class="text-px8 text-grey-dark">Tile (Auto)</p>
									</div>
								</label>
								<label for="focus" class="flex items-center gap-px5 px-2.5 py-px9 border border-grey-lighter rounded">
									<input type="radio" name="meetingLayouts" id="focus" v-model="meetingLayouts">
									<div class="flex gap-px5 items-center">
										<span class="">Icons</span>
										<p class="text-px8 text-grey-dark">Focus (1+7)</p>
									</div>
								</label>
								<label for="speaker" class="flex items-center gap-px5 px-2.5 py-px9 border border-grey-lighter rounded">
									<input type="radio" name="meetingLayouts" id="speaker" v-model="meetingLayouts">
									<div class="flex gap-px5 items-center">
										<span class="">Icons</span>
										<p class="text-px8 text-grey-dark">Speaker</p>
									</div>
								</label>
							</div>
						</div>
					</div>
					<div class="flex gap-20 mt-2.5">
						<button @click="moreOption = true" :class="moreOption ? 'invisible' : 'visible'" class="font-bold text-grey-dark text-px10">MORE OPTIONS</button>
						<div v-if="!moreOption" class="flex gap-2.5">
							<button @click="$emit('close')" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
							<button type="submit" @click="newMeeting" class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">MEET NOW</button>
						</div>
						<div v-if="moreOption" class="flex gap-2.5">
							<button type="reset" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
							<button @click="moreOption = false" class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">SAVE</button>
						</div>
					</div>
				</form>
			</div>
		</transition>
	</div>
</template>

<script>
import md5 from 'crypto-js/md5'
import useValidate from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'
export default {
	name: 'NewMeetingPopup',
    data() {
        return {
			moreOption: false,
			showPassword: false,
            v$: useValidate(),
			inputs: {
				durHr: 0,
				durMn: 0,
				invitees: [],
				meetingPlan: '',
				organizer: '',
				orgEmail: '',
				password: '',
				subject: '',
				timeZone: '',
			}
        };
    },
    validations() {
        return {
            durHr: { required },
            durMn: { required },
            invitees: {
				required, 
				maxLength: maxLength(3000),
				values: [
					email
				]
			},
            meetingPlan: { required },
            organizer: { required },
            orgEmail: {
				required, 
				email
			},
            password: {
				maxLength: maxLength(8)
			},
            subject: { 
				required,
				minLength: minLength(1),
				maxLength: maxLength(80)
			},
			timeZone: { required }
        }
    },
    methods: {
        newMeeting: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
                await this.$store.dispatch('meetings/newMeeting', {
                    meetingPlan: this.meetingPlan,
                    subject: this.subject,
                    password: md5(this.password),
                    invitees: this.invitees,
                });
            }
        },
		visiblePassword() {
			this.showPassword = !this.showPassword
		}
    }
}
</script>
<style>
.overlay-bg {
	background-color: rgba(66, 66, 66, .8);
}
</style>