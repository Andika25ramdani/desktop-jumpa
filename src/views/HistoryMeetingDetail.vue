<template>
    <div class="default-page">
        <div class="card m-0">
			<h2 class="font-bold text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-grey-dark p-5 lg:p-6 xl:p-7 2xl:p-8">Meeting Details</h2>
            <nav role="navigation" class="w-full flex gap-px25 lg:gap-7 xl:gap-8 2xl:gap-9 border-b border-grey-lighter px-7 lg:px-8 xl:px-9 2xl:px-10 m-0">
                <a @click="changeTab('meetingInfo')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'meetingInfo'}">Meeting Info</a>
                <a @click="changeTab('participants')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'participants'}">Participants</a>
                <a @click="changeTab('invitees')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'invitees'}">Invitees</a>
                <a @click="changeTab('attachments')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'attachments'}">Attachments</a>
            </nav>
            <div v-if="currentTab === 'meetingInfo'" id="meetingInfo" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-ed py-2.5 px-7 lg:px-8 xl:px-9 2xl:px-10 overflow-hidden overflow-y-auto mr-1">
                <table class="text-left table-auto">
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Subject</th>
                        <td>{{ detailData.subject }}</td>
                    </tr>
                    <tr>
                        <th class=" lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Start Time</th>
                        <td>{{ detailData.startTime }}</td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Duration</th>
                        <td>{{ detailData.duration }}min</td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Meeting ID</th>
                        <td>{{ detailData.meetingNum }}</td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10 align-top">Meeting Setting</th>
                        <td class="flex flex-col gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4">
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isAutoRecord === 1" type="checkbox" name="autoRecord" id="autoRecord" checked disabled>
                                <input v-else type="checkbox" name="autoRecord" id="autoRecord" disabled>
                                <label for="autoRecord">Automatic Recording</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isAutoRecord === 1" type="checkbox" name="meetingLocked" id="meetingLocked" checked disabled>
                                <input v-else type="checkbox" name="meetingLocked" id="meetingLocked" disabled>
                                <label for="meetingLocked">Meeting Locked</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10 align-top">Attendee Controls</th>
                        <td class="flex flex-col gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4">
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isMutedWhenJoinRoom === 1" type="checkbox" name="mutedByHost" id="mutedByHost" disabled checked>
                                <input v-else type="checkbox" name="mutedByHost" id="mutedByHost" disabled>
                                <label for="mutedByHost">Muted by Host on Entry</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isEnableViewAttendeeList === '1'" type="checkbox" name="displayAttendees" id="displayAttendees" disabled checked>
                                <input v-else type="checkbox" name="displayAttendees" id="displayAttendees" disabled>
                                <label for="displayAttendees">Display Attendees List/Status</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isEnableChat === 1" type="checkbox" name="allowChat" id="allowChat" disabled checked>
                                <input v-else type="checkbox" name="allowChat" id="allowChat" disabled>
                                <label for="allowChat">Allow Chat</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isDisablePresentation === 1" type="checkbox" name="disablePresentation" id="disablePresentation" disabled checked>
                                <input v-else type="checkbox" name="disablePresentation" id="disablePresentation" disabled>
                                <label for="disablePresentation">Disable Presentation</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isEnableJoinPromptTone === 1" type="checkbox" name="playBeepJoin" id="playBeepJoin" disabled checked>
                                <input v-else type="checkbox" name="playBeepJoin" id="playBeepJoin" disabled>
                                <label for="playBeepJoin">Play Beep When Attendee Joins Meeting</label>
                            </div>
                            <div class="flex gap-px5 lg:gap-2 xl:gap-3 2xl:gap-4 items-center">
                                <input v-if="detailData.isEnableLeavePromptTone === 1" type="checkbox" name="playBeepLeave" id="playBeepLeave" disabled checked>
                                <input v-else type="checkbox" name="playBeepLeave" id="playBeepLeave" disabled>
                                <label for="playBeepLeave">Play Beep When Attendee Leaves Meeting</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Plan</th>
                        <td>Platinum</td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Organizer</th>
                        <td>{{ detailData.HostName }} ({{ detailData.hostEmail }})</td>
                    </tr>
                    <tr>
                        <th class="py-px5 lg:py-2 xl:py-3 2xl:py-4 pr-7 lg:pr-8 xl:pr-9 2xl:pr-10">Host Code</th>
                        <td>{{ detailData.hostCode }}</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentTab === 'participants'" id="participants" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-ed px-7 lg:px-8 xl:px-9 2xl:px-10 overflow-hidden overflow-y-auto mr-1">
                <table class="text-left table-auto w-full">
                    <thead>
                        <tr>
                            <th class="pb-1 pt-2.5">Name</th>
                            <th>Email</th>
                            <th>Device type</th>
                            <th>Joined  at</th>
                            <th>Left at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="currentTab === 'invitees'" id="invitees" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-ed px-7 lg:px-8 xl:px-9 2xl:px-10 overflow-hidden overflow-y-auto mr-1">
                <table class="text-left table-auto w-full">
                    <thead>
                        <tr>
                            <th class="pb-1 pt-2.5">Name</th>
                            <th>Email</th>
                            <th>Device type</th>
                            <th>Joined  at</th>
                            <th>Left at</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                        <tr>
                            <td class="py-2">Anang Pudjijanto, SIK, MSi</td>
                            <td>anang.pudjijanto@gmail.com</td>
                            <td>Chrome</td>
                            <td>13:47</td>
                            <td>16:46</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-if="currentTab === 'attachments'" id="attachments" class="text-px10 lg:text-xs xl:text-sm 2xl:text-base text-grey-ed pl-7 pr-6 py-5 overflow-hidden overflow-y-auto mr-1">
                <div class="grid gap-px13 lg:gap-4 xl:gap-5 2xl:gap-6 grid-flow-row grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
                    <div v-for="id in 10" :key=id class="bg-white w-40 lg:w-44 xl:w-48 2xl:w-52 h-36 lg:h-40 xl:h-44 2xl:h-48 border border-grey-f4 rounded-px5 flex flex-col justify-center items-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 relative">
                        <i class="fas fa-file text-primary text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"></i>
                        <p class="font-bold text-px10 lg:text-xs xl:text-sm 2xl:text-base text-center">
                            Meeting details.pdf<br>
                            <span class="font-normal">784KB</span>
                        </p>
                        <div class="absolute bg-grey-dark rounded-full px-1 top-2.5 right-2.5 cursor-pointer">
                            <i class="fas fa-download text-white text-px8 lg:text-px10 xl:text-xs 2xl:text-sm"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: 'HistoryMeetingDetail',
    props: ['serialNum'],
    data() {
        return {
            currentTab: 'meetingInfo',
            serialNum: this.$route.params.serial,
            // detailData: localStorage.getItem('meetingDetailData')
        }
    },
    computed: {
        ...mapGetters({
            detailData: 'meetings/getMeetingDetails'
        })
    },
	async created() {
		await this.$store.dispatch('meetings/meetingDetails', {
			meetingSerialNum: this.serialNum,
		})
	},
    mounted(){
        console.log(this.detailData);
    },
    methods: {
        changeTab(newTab) {
            this.currentTab = newTab
        }
    }
}
</script>

<style>
.tab-menu {
    font-size: 10px;
    line-height: 15px;
    color: #9B9999;
    padding: 5px 0;
    border-bottom: 2px solid transparent;
}
.tab-menu:active, .tab-menu:hover, .tab-menu.active {
    font-weight: 700;
    color: #424242;
    border-bottom: 2px solid #790F19;
}
#meetingInfo, #participants, #invitees, #attachments{
    max-height: calc(100vh - 178px);
}
#participants > table, #invitees > table {
    max-width: calc(100vw - 100px);
    height: calc(100vh - 178px);
}
.inactive {
	display: none;
}
@media screen and (min-width: 1024px){
    .tab-menu {
        font-size: 12px;
        line-height: 18px;
        padding: 5px 0;
    }
}
@media screen and (min-width: 1280px){
    .tab-menu {
        font-size: 14px;
        line-height: 21px;
        padding: 6px 0;
    }
}
@media screen and (min-width: 1536px){
    .tab-menu {
        font-size: 16px;
        line-height: 24px;
        padding: 7px 0;
    }
}
</style>