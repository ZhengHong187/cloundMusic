import { actions } from './actions';
import { mutations, state } from './mutation';
import { getters } from './getters';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// const namespaced = true

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
