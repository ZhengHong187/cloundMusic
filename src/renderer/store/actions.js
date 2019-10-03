import * as types from './mutation-type';
import axios from 'axios'

const hostIp = `http://localhost:3000/`
export const actions = {
    // 发送验证码
    async setCaptcha({ commit }, data) {
        console.log('进来');
        let info = await axios.get(`${hostIp}captcha/sent`, {
            params: {
                phone: data
            }
        })
        console.log(info, '验证码')
    },
    async login({ commit }, params) {
        console.log('login');
        let info = await axios.post(`${hostIp}login/cellphone`, {
            phone: params.phone,
            password: params.password
        })
        console.log(info)
        commit(types.INIT_USER_INFO, info)
        return info
    }
};