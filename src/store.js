import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wikiArray: [],
    welcomeImage: "",
    openSearch: false
  },
  mutations: {
    getArray(state, arr) {
      state.wikiArray = arr;
    },
    getImage(state, img) {
      state.welcomeImage = img;
      state.openSearch = true;
    }
  },
  actions: {},
  getters: {
    wikiArray: state => state.wikiArray,
    openSearch: state => state.openSearch,
    welcomeImage: state => state.welcomeImage
  }
});
