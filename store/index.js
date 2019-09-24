export const state = () => ({
  loading: false,
  error: null,
  onlineUsers: []
})

export const mutations = {
  setLoading(state, payload) {
    state.loading = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  clearError(state) {
    state.error = null
  },
  setOnlineUsers(state, payload) {
    state.onlineUsers = payload
  }
}

export const acttions = {
  loadOnlineUsers({ commit }) {
    this.$firestore.ref('presence').on('value', function(snapshot) {
      const result = []
      result[0] = snapshot.numChildren()
      result[1] = snapshot.val()
      commit('setOnlineUsers', result)
    })
  },
  clearError({ commit }) {
    commit('clearError')
  }
}

export const getters = {
  loading(state) {
    return state.loading
  },
  error(state) {
    return state.error
  },
  onlineUsers(state) {
    return state.onlineUsers
  }
}
