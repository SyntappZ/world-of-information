import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',
    img: '',
    desc: ''
  },
  mutations: {
    getSearch(state, info) {
      state.search = info
    },
    getImg(state, img) {
      state.img = img
    },
    getDesc(state, desc) {
      state.desc = desc
    }
  },
  actions: {

  },
  getters: {
    search: state => state.search,
    img: state => state.img,
    desc: state => state.desc
  }
})
