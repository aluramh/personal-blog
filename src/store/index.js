import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: true
  },
  getters: {
    darkTheme: state => state.darkTheme
  },
  mutations: {
    TOGGLE_DARK_THEME(state) {
      state.darkTheme = !state.darkTheme;
    }
  },
  actions: {
    toggleDarkTheme({ commit }) {
      commit("TOGGLE_DARK_THEME");
    }
  }
});
