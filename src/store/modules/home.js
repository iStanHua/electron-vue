export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: state => {
      return state.userInfo || {}
    }
  },
  mutations: {
    SET_USER_INFO(state, payload) {
      state.userInfo = payload
    },
    ADD_FAVORITE(state, newFavorite) {
      state.userInfo.favorite.push(newFavorite)
    }
  },
  actions: {
    GET_USER_INFO: ({ commit }) => commit(SET_USER_INFO),
    ADD_FAVORITE: ({ commit }, newFavorite) => commit(ADD_FAVORITE, newFavorite)
  }
}
