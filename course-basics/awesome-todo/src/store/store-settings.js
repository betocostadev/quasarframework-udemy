const state = {
  settings: {
    show12HourTimeFormat: false,
    showTasksInOneList: false,
  }
}

const getters = {
  settings: state => {
    return state.settings
  }
}

const actions = {
  setShow12HourTimeFormat({ commit }, value) {
    commit('setShow12HourTimeFormat', value)
  },
  setShowTasksInOneList({ commit }, value) {
    commit('setShowTasksInOneList', value)
  }
}

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}