export default {
  namespaced: true,
  state: {
    userInfo: {
      id: 12,
      userName: 'jay',
      sex: 'man',
      country: 'china',
      city: 'shanghai',
      favorite: ['book', 'game', 'sing']
    }
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
