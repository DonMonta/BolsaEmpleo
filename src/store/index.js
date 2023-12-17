import { createStore } from 'vuex'

export default createStore({
  state: {
    rol: null,
    email: null,
    id: null,
  },
  getters: {
  },
  mutations: {
    setRol(state, nuevoRol) {
      state.rol = nuevoRol;
    },
    setemail(state, nuevoemail) {
      state.email = nuevoemail;
    },
    setid(state, nuevoid) {
      state.id = nuevoid;
    },
  },
  actions: {
  },
  modules: {
  }
})
