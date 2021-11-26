import router from '../../router'
import API from '../../js/api_interface'

const intialState = () => {
    return {
        isAuth: false,
        accessToken: '',
        account: '',
        email: '',
        accountInfo: {}
    }
}

export default {
    namespaced: true,
    state: intialState(),
    mutations: {
        SET: (state, [key, value]) => state[key] = value,
        RESET: (state) => Object.assign(state, intialState())
    },
    getters: {
        isAuth: (state) => state.isAuth,
        getToken: (state) => () => state.accessToken,
        getAccount: (state) => () => state.account,
        getEmail: (state) => () => state.email,
        getAccountInfo: (state) => () => state.accountInfo,
    },
    actions: {
        signIn: async function({commit}, payload) {
            const res = await API.account_login(payload.account, payload.password);
            let data = res.data
            const { accessToken, account, email } = data.data
            if (data.retCode == 0) {
                localStorage.setItem('accessToken', accessToken)
                localStorage.setItem('account', account)
                localStorage.setItem('email', email)

                commit('SET', ['isAuth', true])
                commit('SET', ['accessToken', accessToken])
                commit('SET', ['account', account])
                commit('SET', ['email', email])

                router.push('/home')
            }
        },
        
        signOut: async function({commit}) {
            const res = await API.account_logout();
            let data = res.data

            if (data.retCode == 0) {
                localStorage.clear()
                commit('RESET')
                router.push('/')
            }
        }
    }
}