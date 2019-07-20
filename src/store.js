import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wikiArray: []
  },
  mutations: {
    getArray(state, arr) {
     state.wikiArray = arr
    }
  },
  actions: {},
  getters: {
    wikiArray: state => state.wikiArray
  }
});
