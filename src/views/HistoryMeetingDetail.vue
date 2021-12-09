<template>
    <div class="default-page">
        <div class="card m-0">
			<h2 class="font-bold text-2xl text-grey-dark p-5">Meeting Details</h2>
            <nav role="navigation" class="w-full flex gap-px25 border-b border-grey-lighter px-7 m-0">
                <a @click="changeTab('meetingInfo')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'meetingInfo'}">Meeting Info</a>
                <a @click="changeTab('participants')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'participants'}">Participants</a>
                <a @click="changeTab('invitees')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'invitees'}">Invitees</a>
                <a @click="changeTab('attachments')" class="tab-menu cursor-pointer" :class="{ active: currentTab === 'attachments'}">Attachments</a>
            </nav>
            <div v-if="currentTab === 'meetingInfo'" id="meetingInfo" class="text-px10 text-grey-ed py-2.5 px-7 overflow-hidden overflow-y-auto mr-1">
                <table class="text-left table-auto">
                    <tr>
                        <th class="py-px5 pr-7">Subject</th>
                        <td>Pengukuhan Pengurus Ikal dan Rapat Kerja I Ikal-62 Lemhannas RI</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Start Time</th>
                        <td>25 Sep, 2021  13:45</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Duration</th>
                        <td>3hr 4min</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Meeting ID</th>
                        <td>2805184</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7 align-top">Meeting Setting</th>
                        <td class="flex flex-col gap-px5">
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="autoRecord" id="autoRecord" disabled>
                                <label for="autoRecord">Automatic Recording</label>
                            </div>
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="meetingLocked" id="meetingLocked" disabled>
                                <label for="meetingLocked">Meeting Locked</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7 align-top">Attendee Controls</th>
                        <td class="flex flex-col gap-px5">
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="mutedByHost" id="mutedByHost" disabled checked>
                                <label for="mutedByHost">Muted by Host on Entry</label>
                            </div>
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="displayAttendees" id="displayAttendees" disabled checked>
                                <label for="displayAttendees">Display Attendees List/Status</label>
                            </div>
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="allowChat" id="allowChat" disabled checked>
                                <label for="allowChat">Allow Chat</label>
                            </div>
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="disablePresentation" id="disablePresentation" disabled>
                                <label for="disablePresentation">Disable Presentation</label>
                            </div>
                            <div class="flex gap-px5 items-center">
                                <input type="checkbox" name="playBeep" id="playBeep" disabled checked>
                                <label for="playBeep">Play Beep When Attendee Joins/Leaves Meeting</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Plan</th>
                        <td>Platinum</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Organizer</th>
                        <td>Y A D I (yadi@jumpa.id)</td>
                    </tr>
                    <tr>
                        <th class="py-px5 pr-7">Host Code</th>
                        <td>0361</td>
                    </tr>
                </table>
            </div>
            <div v-if="currentTab === 'participants'" id="participants" class="text-px10 text-grey-ed px-7 overflow-hidden overflow-y-auto mr-1">
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
            <div v-if="currentTab === 'invitees'" id="invitees" class="text-px10 text-grey-ed px-7 overflow-hidden overflow-y-auto mr-1">
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
            <div v-if="currentTab === 'attachments'" id="attachments" class="text-px10 text-grey-ed pl-7 pr-6 py-5 overflow-hidden overflow-y-auto mr-1">
                <div class="grid gap-px13 grid-flow-row grid-cols-4">
                    <div v-for="id in 10" :key=id class="bg-white w-40 h-36 border border-grey-f4 rounded-px5 flex flex-col justify-center items-center gap-2 relative">
                        <i class="fas fa-file text-primary text-5xl"></i>
                        <p class="font-bold text-px10 text-center">
                            Meeting details.pdf<br>
                            <span class="font-normal">784KB</span>
                        </p>
                        <div class="absolute bg-grey-dark rounded-full px-1 top-2.5 right-2.5 cursor-pointer">
                            <i class="fas fa-download text-white text-px8"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryMeetingDetail',
    data() {
        return {
            currentTab: 'meetingInfo',
            serialNum: this.$route.params.serial
        }
    },
    mounted() {
        console.log(this.$route.params.serial)
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
</style>