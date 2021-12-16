import router from '../../router'
import API from '../../js/api_interface'

const intialState = () => {
    return {
        lists: '',
        pageIndex: 0,
        pageSize: 0,
        totalCount: 0,
        totalPageCount: 0,

        meetingDetails: {}
    }
}
    
export default {
    namespaced: true,
    state: intialState(),
    mutations: {
        SET: (state, [key, value]) => state[key] = value,
        PUSH: (state, [key, value]) => state[key].push(value),
        DELETE: (state, [key, value]) => state[key].filter(item => item.meetingSerialNum != value),
        RESET: (state) => Object.assign(state, intialState())
    },
    getters: {
        getLists: (state) => state.lists,
        getPageIndex: (state) => state.pageIndex,
        getPageSize: (state) => state.pageSize,
        getTotalCount: (state) => state.totalCount,
        getTotalPageCount: (state) => state.totalPageCount,

        getMeetingDetails: (state) => state.meetingDetails,
    },
    actions: {
        getLists: async function({commit}, payload) {
            const res = await API.meeting_list(payload.pageSize, payload.meetingState);
            let response = res.data
            if (response.retCode == 0) {
                const { data, pageIndex, pageSize, totalCount, totalPageCount } = response.data

                commit('SET', ['lists', data])
                commit('SET', ['pageIndex', pageIndex])
                commit('SET', ['pageSize', pageSize])
                commit('SET', ['totalCount', totalCount])
                commit('SET', ['totalPageCount', totalPageCount])
            }
        },
        meetingDetails: async function({commit}, payload) {
            const res = await API.meeting_details(payload.meetingSerialNum)
            let response = res.data
            if (response.retCode == 0) {
                const data = response.data
                localStorage.setItem('meetingDetails', data)
                commit('SET', ['meetingDetails', data])
            }
        },
        meetingDelete: async function({commit}, payload) {
            const res = await API.meeting_delete(payload)
            let response = res.data
            if (response.retCode == 0) {
                const data = response.data

                commit('DELETE', ['lists', payload])

                return 1;
            }
        },
        meetingQuickStart: async function({commit}, payload) {
            const res = await API.meeting_quick_start(payload)
            console.log(res);
            let response = res.data
            console.log(response);
            if (response.retCode == 0) {
                let { hostCode, hostEmail, hostName, meetingNum, meetingSerialNum } = response.data;
                console.log(response.retCode, 'DONE');
                let meetUrl = `/rtc/dispatch?meetingNum=${meetingNum}&userName=${hostName}&email=${hostEmail}&sn=${meetingSerialNum}&isAuto=true`
                return meetUrl;
            }
        },
    }
}