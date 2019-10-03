import * as types from './mutation-type';
export const state = {
    userInfo: {},
    songs: {},
    loading: true,
    userInfo: []
};

export const mutations = {
    [types.INIT_USER_INFO](state, data) {
        state.userInfo = data
        console.log(data, 'vuex')
    }
}