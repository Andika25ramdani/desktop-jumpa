import router from '../../router'
import API from '../../js/api_interface'
import axios from 'axios'
import qs from 'querystring'

const intialState = () => {
    return {
        captcha: '',
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
        getCaptcha: (state) => () => state.captcha,
    },
    actions: {
        // GET CAPTCHA IMAGE
        getCheckcode: async function({commit}) {
            let res = await axios.get('https://surampak.jumpa.id/checkcode')
            if (res.status === 200) {
                const { data } = res
                localStorage.setItem('captcha', data)
                commit('SET', ['captcha', data])
            }
        },
        // VERIFICATION CAPTCHA
        CheckcodeVerificataion: async function({commit}, payload) {
            let res = await axios.post('https://surampak.jumpa.id/ajax/checkcode', qs.stringify({
                checkcode: payload.checkcode
            }))
            // console.log('CHECKCODE VERIFICATION', res);
        },
    }
}