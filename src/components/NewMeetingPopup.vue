<template>
	<div id="newMeetingPopup" class="overlay-bg fixed top-0 left-0 h-screen w-screen z-50 flex flex-col items-center justify-center">
		<transition name="slide-down" appear>
			<div class="bg-white fixed max-h-90 max-w-65 w-2/3 rounded-px5 shadow-custom p-5 flex flex-col gap-2.5">
				<div class="">
					<h2 class="text-grey-dark font-bold text-2xl">
						{{ !moreOption && !invitePopup ? 'New Meeting' : '' }}
						{{ invitePopup ? 'Invite Participant' : '' }}
						{{ moreOption ? 'Instant Meeting Template' : '' }}
					</h2>
				</div>
				<form @submit.prevent="newMeeting" class=" overflow-hidden overflow-y-auto pr-2">
					<div v-if="!moreOption && !invitePopup" class="flex flex-col gap-2.5">
						<div class="flex flex-col gap-2.5">
							<label class="text-px8">Choose your meeting plan</label>
							<div class="grid grid-cols-3 gap-2.5">
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="platinum" class="absolute left-5">
									<label for="platinum" @click="updatePlans('platinum', 3000)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Platinum</h6>
											<p class="text-px8">Up to 3000 Participants</p>
										</div>
									</label>
								</div>
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="gold" class="absolute left-5">
									<label for="gold" @click="updatePlans('gold', 2000)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Gold</h6>
											<p class="text-px8">Up to 2000 Participants</p>
										</div>
									</label>
								</div>
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="silver" class="absolute left-5">
									<label for="silver" @click="updatePlans('silver', 1500)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Silver</h6>
											<p class="text-px8">Up to 1500 Participants</p>
										</div>
									</label>
								</div>
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="business" class="absolute left-5">
									<label for="business" @click="updatePlans('business', 750)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Business</h6>
											<p class="text-px8">Up to 750 Participants</p>
										</div>
									</label>
								</div>
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="pro" class="absolute left-5">
									<label for="pro" @click="updatePlans('pro', 500)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Pro</h6>
											<p class="text-px8">Up to 500 Participants</p>
										</div>
									</label>
								</div>
								<div class="flex items-center -ml-2">
									<input type="radio" name="meetingPlan" id="basic" class="absolute left-5">
									<label for="basic" @click="updatePlans('basic', 300)" class="meet-plan flex items-center gap-2.5 pl-8 py-4 border border-grey-lightjumpa rounded w-full">
										<div class="">
											<h6 class="text-px10 font-bold">Basic</h6>
											<p class="text-px8">Up to 300 Participants</p>
										</div>
									</label>
								</div>
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
								<button @click="invitePopup = true" class="text-primary text-px10 font-bold">Add from Contacts</button>
							</div>
							<div class="border border-grey-ce py-px5 px-2.5 outline-none rounded flex flex-wrap gap-px5 text-px8 text-grey-dark">
								<div class="border border-grey-lighter py-0.5 px-1 w-max rounded flex items-center gap-2.5 bg-grey-f8" v-for="(invitee, index) in invitees" :key=index>
									{{ invitee }}
									<button @click="deleteInvitee(index)"><i class="fas fa-times text-grey-dark text-px8"></i></button>
								</div>
								<input type="email" @keyup.enter="addInvitees" @keydown.delete="deleteInvitee(invitees.length - 1)" id="newInvitee" class="outline-none flex-1">
							</div>
							<textarea v-model="invitees" @keyup.enter="addInvitees" class="hidden" placeholder="Separate invitees emails with enter or semicolon key"></textarea>
							<p v-if="v$.invitees.$error" class="text-px8 text-red">{{ v$.invitees.$errors[0].$message }}</p>
							<p v-else-if="meetingPlan.participants > 1" class="text-px8 text-grey-ao">Invitees are included in the {{ meetingPlan.participants - 1 }} person limit</p>
						</div>
					</div>
					<div v-if="moreOption" class="flex flex-col gap-2.5">
						<div class="flex flex-col gap-px5 w-full">
							<p class="text-px8 text-grey-dark">Meeting plan</p>
							<div v-if="meetingPlan.name !== ''" class="bg-primary rounded py-px5 px-px15 w-max flex items-center gap-px5 text-white">
								<p class="font-bold text-px10 capitalize">{{ meetingPlan.name }}</p>
								<span class="font-normal text-px8">(Up to {{ meetingPlan.participants }} Participants)</span>
							</div>
							<div v-else @click="moreOption = false" class="bg-primary rounded py-px5 px-px15 w-max flex items-center gap-px5 text-white cursor-pointer">
								<span class="font-normal text-px8">Pick your plans now!</span>
							</div>
						</div>
						<div class="flex flex-col gap-px5 w-full">
							<label class="text-px8 text-grey-dark">Subject</label>
							<div class="flex items-center justify-between gap-2.5">
								<input type="text" v-model="subject" class="border border-grey-ce py-px5 px-2.5 text-px10 outline-none rounded w-full" placeholder="Enter your meeting subject">
								<p v-if="v$.subject.$error" class="text-px8 text-red min-w-max">{{ v$.subject.$errors[0].$message }}</p>
								<p v-else class="text-px8 text-grey-ao min-w-max">1-80 characters</p>
							</div>
						</div>
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
							<label class="text-px8 text-grey-dark">Time Zone</label>
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
							<label class="text-px8 text-grey-dark">Duration</label>
							<div class="flex gap-2.5">
								<div class="rounded border border-grey-ce py-px5 px-2.5 w-max flex items-center gap-4">
									<button @click="inputDecrease('durationHour')" class="rounded-full bg-grey-lighter h-px11 w-px11 relative">
										<i class="fas fa-minus text-px8 text-grey-dark px-1 absolute top-0 " style="right: -1.75px;"></i>
									</button>
									<div class="flex gap-0.5 items-center">
										<input type="number" v-model="durHr" min="0" max="6" id="durationHour" class="outline-none text-px10 w-2">
										<p class="text-px8 text-grey-ao">hr</p>
									</div>
									<button @click="inputIncrease('durationHour', 6)" class="rounded-full bg-grey-lighter h-px11 w-px11 relative">
										<i class="fas fa-plus text-px8 text-grey-dark px-1 absolute top-0 " style="right: -1.75px;"></i>
									</button>
								</div>
								<div class="rounded border border-grey-ce py-px5 px-2.5 w-max flex items-center gap-4">
									<button @click="inputDecrease('durationMinute')" class="rounded-full bg-grey-lighter h-px11 w-px11 relative">
										<i class="fas fa-minus text-px8 text-grey-dark px-1 absolute top-0 " style="right: -1.75px;"></i>
									</button>
									<div class="flex gap-0.5 items-center">
										<input type="number" v-model="durMn" min="0" max="60" id="durationMinute" class="outline-none text-px10 w-3">
										<p class="text-px8 text-grey-ao">min</p>
									</div>
									<button @click="inputIncrease('durationMinute', 60)" class="rounded-full bg-grey-lighter h-px11 w-px11 relative">
										<i class="fas fa-plus text-px8 text-grey-dark px-1 absolute top-0 " style="right: -1.75px;"></i>
									</button>
								</div>
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
								<div class="flex items-center w-full -ml-2">
									<input type="radio" name="meetingLayouts" id="tile" v-model="meetingLayouts" class="absolute left-5">
									<label for="tile" class="flex items-center gap-px5 pr-2.5 pl-7 py-px9 border border-grey-lighter rounded w-full">
										<div class="flex gap-px5 items-center">
											<span class="">Icons</span>
											<p class="text-px8">Tile (Auto)</p>
										</div>
									</label>
								</div>
								<div class="flex items-center w-full -ml-2">
									<input type="radio" name="meetingLayouts" id="focus" v-model="meetingLayouts" class="absolute left-5">
									<label for="focus" class="flex items-center gap-px5 pr-2.5 pl-7 py-px9 border border-grey-lighter rounded w-full">
										<div class="flex gap-px5 items-center">
											<span class="">Icons</span>
											<p class="text-px8">Focus (1+7)</p>
										</div>
									</label>
								</div>
								<div class="flex items-center w-full -ml-2">
									<input type="radio" name="meetingLayouts" id="speaker" v-model="meetingLayouts" class="absolute left-5">
									<label for="speaker" class="flex items-center gap-px5 pr-2.5 pl-7 py-px9 border border-grey-lighter rounded w-full">
										<div class="flex gap-px5 items-center">
											<span class="">Icons</span>
											<p class="text-px8">Speaker</p>
										</div>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div v-if="invitePopup" class="flex w-full gap-6 justify-between">
						<div class="">
							<h5 class="text-primary font-bold text-px10 pt-5 pb-px15">My Contacts</h5>
							<div class="">
								<div class="" v-for="group in contactGroups" :key=group.name>
									<div class="text-px10 text-grey-dark" :class="{'font-bold': group.child}">{{ group.name }}</div>
									<div class="text-px10 text-grey-dark" v-for="child in group.child" :key=child.name>
										<div class="text-px10 text-grey-dark pl-4">{{ child.name }}</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex flex-col gap-2 flex-1">
							<div class="flex items-center gap-2.5 pl-5">
								<input type="checkbox" name="participants" id="selectAll" @click="checkedAll">
								<p class="text-px10 text-grey-ed" id="selectButton" @click="checkedAll">Select All</p>
							</div>
							<div class="contact-list mr-1 pr-1 flex flex-col flex-nowrap gap-px5">
								<transition-group name="slide-down" appear>
									<div v-for="contact in contacts" :key=contact.id class="relative flex items-center">
										<input type="checkbox" name="participants" :id=contact.id class="inputParticipant absolute left-5" :value=contact.email>
										<label :for=contact.id class="rounded pl-7 pr-2.5 py-2 border border-grey-lighter flex gap-2.5 flex-nowrap items-center min-w-252 flex-1">
											<img :src=contact.img class="w-6 h-6 object-cover rounded-full bg-primary">
											<div class="text-grey-ed">
												<h5 class="text-px10 font-bold">{{ contact.name }}</h5>
												<p class="text-px8">{{ contact.email }}</p>
											</div>
										</label>
									</div>
								</transition-group>
							</div>
						</div>
					</div>
				</form>
				<div class="flex gap-20 mt-2.5 justify-between">
					<button @click="moreOption = true" :class="moreOption || invitePopup ? 'invisible' : 'visible'" class="font-bold text-grey-dark text-px10">MORE OPTIONS</button>
					<div v-if="!moreOption && !invitePopup" class="flex gap-2.5">
						<button @click="$emit('close')" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
						<button type="submit" @click="newMeeting" class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">MEET NOW</button>
					</div>
					<div v-if="moreOption" class="flex gap-2.5">
						<button @click="clearInstantSetting" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
						<button @click="moreOption = false" class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">SAVE</button>
					</div>
					<div v-if="invitePopup" class="flex gap-2.5">
						<button @click="invitePopup = false" type="reset" class="rounded-px5 border border-grey-lightjumpa bg-grey-background text-grey-dark font-bold py-2.5 px-12 text-px10">CANCEL</button>
						<button @click="addFromContacts" class="bg-primary rounded-px5 font-bold text-px10 text-white py-2.5 px-10">ADD PARTICIPANT</button>
					</div>
				</div>
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
			invitePopup: false,

            v$: useValidate(),
			attendList: false,
			beep: false,
			chat: false,
			durHr: 0,
			durMn: 0,
			invitees: [],
			locked: false,
			meetingPlan: {
				participants: 0,
				name: ''
			},
			meetingLayouts: '',
			muted: false,
			// organizer: localStorage.getItem('account'),
			// orgEmail: localStorage.getItem('email'),
			organizer: 'andikar',
			orgEmail: 'andika@mail.test',
			password: '',
			presentation: false,
			record: false,
			subject: '',
			timeZone: '',
			
			contactGroups: [
				{
					name: 'Grup 1'
				},
				{
					name: 'Group 2',
					child: [
						{
							name: 'Subgroup 1',
							child: []
						},
						{
							name: 'Subgroup 2',
							child: []
						}
					]
				}
			],
			contacts: [
                {
                    id: 1,
                    contactGroup: [],
                    img: 'img/icons/jumpa-logo.png',
                    name: 'Abdul',
                    email: 'abdul@gmail.com'
                },
                {
                    id: 2,
                    contactGroup: [],
                    img: '',
                    name: 'Ghafur',
                    email: 'ghfur@gmail.com'
                },
                {
                    id: 3,
                    contactGroup: [],
                    img: '',
                    name: 'Abdul Ghafur',
                    email: 'abdulghfur@gmail.com'
                },
                {
                    id: 1,
                    contactGroup: [],
                    img: 'img/icons/jumpa-logo.png',
                    name: 'Abdul',
                    email: 'abdul@gmail.com'
                },
                {
                    id: 2,
                    contactGroup: [],
                    img: '',
                    name: 'Ghafur',
                    email: 'ghfur@gmail.com'
                },
                {
                    id: 3,
                    contactGroup: [],
                    img: '',
                    name: 'Abdul Ghafur',
                    email: 'abdulghfur@gmail.com'
                },
                {
                    id: 1,
                    contactGroup: [],
                    img: 'img/icons/jumpa-logo.png',
                    name: 'Abdul',
                    email: 'abdul@gmail.com'
                },
                {
                    id: 2,
                    contactGroup: [],
                    img: '',
                    name: 'Ghafur',
                    email: 'ghfur@gmail.com'
                },
                {
                    id: 3,
                    contactGroup: [],
                    img: '',
                    name: 'Abdul Ghafur',
                    email: 'abdulghfur@gmail.com'
                },
            ],
        };
    },
    validations() {
        return {
            attendList: {  },
            beep: {  },
            chat: {  },
            durHr: { required },
            durMn: { required },
            invitees: {
				required, 
				maxLength: maxLength(this.meetingPlan.participants),
			},
			locked: {  },
            organizer: { required },
            orgEmail: {
				required, 
				email
			},
            password: {
				maxLength: maxLength(8)
			},
			presentation: {  },
			record: {  },
            subject: { 
				required,
				minLength: minLength(1),
				maxLength: maxLength(80)
			},
			timeZone: {  }
        }
    },
    methods: {
        newMeeting: async function() {
            this.v$.$validate()
            if (!this.v$.$error) {
				console.log(this.subject);
				console.log(this.password);
				console.log(this.invitees);
				console.log(this.timeZone);
				console.log(this.durHr);
				console.log(this.durMn);
				console.log('record:'+this.record);
				console.log('locked:'+this.locked);
				console.log('chat:'+this.chat);
				console.log('muted:'+this.muted);
				console.log('attend:'+this.attendList);
				console.log('presentation:'+this.presentation);
				console.log('beep:'+ this.beep);
				console.log(this.organizer);
				console.log(this.orgEmail);
                // await this.$store.dispatch('meetings/newMeeting', {
                //     meetingPlan: this.meetingPlan,
                //     subject: this.subject,
                //     password: md5(this.password),
                //     invitees: this.invitees,
                // });
            }
        },

		clearInstantSetting(){
			console.log('cleared');
		},
		visiblePassword() {
			this.showPassword = !this.showPassword
		},
		addInvitees() {
			if (document.getElementById("newInvitee").value != '') {
				this.invitees.push(document.getElementById("newInvitee").value)
			}
			document.getElementById("newInvitee").value = ''
		},
		deleteInvitee(index) {
			if (document.getElementById("newInvitee").value == '') {
				this.invitees.splice(index, 1)
			}
		},
		inputIncrease(elId, maxValue) {
			let incResult = parseInt(document.getElementById(elId).value, 10)
			incResult = isNaN(incResult) ? 0 : incResult
			if (incResult < maxValue) {
				incResult++
			}
			document.getElementById(elId).value = incResult
		},
		inputDecrease(elId) {
			let incResult = parseInt(document.getElementById(elId).value, 10)
			incResult = isNaN(incResult) ? 0 : incResult
			if (incResult > 0) {
				incResult--
			}
			document.getElementById(elId).value = incResult
		},
		updatePlans(name, participants) {
			this.meetingPlan.name = name
			this.meetingPlan.participants = participants
			console.log(this.meetingPlan);
		},

		addFromContacts() {
            let allParticipants = document.querySelectorAll('.inputParticipant')
            for (let pi = 0; pi < allParticipants.length; pi++) {
				if (allParticipants[pi].checked == true) {
					this.invitees.push(allParticipants[pi].value)
					this.invitees = this.invitees.filter((item, pos, self) => self.indexOf(item) == pos)
					this.invitePopup = false
				}
            }
		},
        checkedAll() {
            let allParticipants = document.querySelectorAll('.inputParticipant')
            for (let pi = 0; pi < allParticipants.length; pi++) {
				if (allParticipants[pi].checked == true) {
					allParticipants[pi].checked = false
					document.getElementById('selectButton').textContent = 'Select All'
				} else {
					allParticipants[pi].checked = true
					document.getElementById('selectButton').textContent = 'Deselect All'
				}
            }
        },
    }
}
</script>
<style>
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
input[type=checkbox]:checked + label {
	background-color: #F2F3F5;
}
input[type=radio]:checked + label {
	background-color: #790F19;
	color: white;
}
</style>