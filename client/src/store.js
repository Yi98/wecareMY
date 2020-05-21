import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentState: null,
    currentCity: null
  },
  mutations: {
    changeState(state, { newState }) {
      state.currentState = newState;
    },
    changeCity(state, { newCity }) {
      state.currentCity = newCity;
    }
  }
})