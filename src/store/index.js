import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import {markersStore} from "@/store/markers.store.js";

export default createStore({
  plugins: [createPersistedState()],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    markers: markersStore,
  }
})
