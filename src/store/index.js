import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    }
  },
  actions: {
    async checkSession({ commit }) {
      try {
        const response = await axios.get('http://localhost:3000/api/session');
        commit('setAuth', response.data);
      } catch (error) {
        console.error('Error al verificar la sesión:', error);
        commit('setAuth', { isAuthenticated: false, user: null });
      }
    },
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', credentials);
        commit('setAuth', { isAuthenticated: true, user: response.data.user });
      } catch (error) {
        console.error('Error en login:', error);
        throw error;
      }
    },
    async logout({ commit }) {
      await axios.post('http://localhost:3000/api/logout');
      commit('logout');
    }
  }
});
