import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wikiArray: [],
    image: ''
  },
  mutations: {
    getArray(state, arr) {
     state.wikiArray = arr
    },
    imageSearch(state, img) {
      state.image = img
      console.log(state.image)
    }
  },
  actions: {},
  getters: {
    wikiArray: state => state.wikiArray
  }
});
