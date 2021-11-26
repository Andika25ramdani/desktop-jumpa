import router from '../../router'
import API from '../../js/api_interface'

const intialState = () => {
    return {
        upcoming: '',
        pageIndex: 0,
        pageSize: 0,
        totalCount: 0,
        totalPageCount: 0
    }
}

export default {
    namespaced: true,
    state: intialState(),
    mutations: {
        SET: (state, [key, value]) => state[key] = value,
        PUSH: (state, [key, value]) => state[key].push(value),
        RESET: (state) => Object.assign(state, intialState())
    },
    getters: {
        getUpcoming: (state) => state.upcoming,
        getPageIndex: (state) => state.pageIndex,
        getPageSize: (state) => state.pageSize,
        getTotalCount: (state) => state.totalCount,
        getTotalPageCount: (state) => state.totalPageCount,
    },
    actions: {
        getUpcoming: async function({commit}, payload) {
            const res = await API.meeting_upcoming(payload.pageSize);
            let response = res.data
            if (response.retCode == 0) {
                const { data, pageIndex, pageSize, totalCount, totalPageCount } = response.data

                commit('SET', ['upcoming', data])
                commit('SET', ['pageIndex', pageIndex])
                commit('SET', ['pageSize', pageSize])
                commit('SET', ['totalCount', totalCount])
                commit('SET', ['totalPageCount', totalPageCount])
            }
        },
    }
}