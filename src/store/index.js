import Vue from "vue";
import Vuex from "vuex";
import actions from './module/actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
      ...actions
  },
  modules: {}
});
