import router from '../../router'
import API from '../../js/api_interface'
import axios from 'axios'
import qs from 'querystring'

const intialState = () => {
    return {
        isAuth: false,
        accessToken: '',
        account: '',
        bio: '',
        displayName: '',
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
            const signInRes = await API.account_login(payload.account, payload.password);
            let data = signInRes.data
            if (data.retCode == 0) {
                const { accessToken, account, email } = data.data
                let results = await axios.post('https://surampak.jumpa.id/layanan/profile/editInfoGet', qs.stringify({
                    email: email,
                    token: accessToken,
                }))
                let output = results.data
                if (output.error == false) {
                    const { bio, comment } = output
                    
                    localStorage.setItem('accessToken', accessToken)
                    localStorage.setItem('account', account)
                    localStorage.setItem('bio', bio)
                    localStorage.setItem('displayName', comment)
                    localStorage.setItem('email', email)

                    commit('SET', ['isAuth', true])
                    commit('SET', ['accessToken', accessToken])
                    commit('SET', ['email', email])
                    commit('SET', ['bio', bio])
                    commit('SET', ['displayName', comment])
                    commit('SET', ['account', account])

                    router.push(router.currentRoute.value.query.redirect || '/home')
                }
            }
        },
        
        signOut: async function({commit}) {
            const res = await API.account_logout();
            let data = res.data

            if (data.retCode == 0) {
                localStorage.clear()
                commit('RESET')
                router.push('/sign-in')
            }
        }
    }
}