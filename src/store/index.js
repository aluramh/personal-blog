import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkTheme: false,
    drawer: false
  },
  getters: {
    darkTheme: state => state.darkTheme,
    drawer: state => state.drawer
  },
  mutations: {
    TOGGLE_DARK_THEME: state => (state.darkTheme = !state.darkTheme),
    SET_DRAWER: (state, newState) => (state.drawer = newState)
  },
  actions: {
    toggleDarkTheme({ commit }) {
      commit("TOGGLE_DARK_THEME");
    },
    setDrawer({ commit }, newState) {
      commit("SET_DRAWER", newState);
    },
    toggleDrawer({ commit, getters }) {
      commit("SET_DRAWER", !getters.drawer);
    }
  }
});
