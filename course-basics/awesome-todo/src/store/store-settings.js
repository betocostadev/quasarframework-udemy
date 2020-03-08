// We are going to use Quasar Local Storage setup: https://quasar.dev/quasar-plugins/web-storage
import { LocalStorage } from 'quasar'

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
  setShow12HourTimeFormat({ commit, dispatch }, value) {
    commit('setShow12HourTimeFormat', value)
    // setting to localStorage
    // localStorage.setItem('show12HourTimeFormat')
    dispatch('saveSettings')
  },
  setShowTasksInOneList({ commit, dispatch }, value) {
    commit('setShowTasksInOneList', value)
    dispatch('saveSettings')
  },
  saveSettings({ state }) {
    LocalStorage.set('settings', state.settings)
  },
  // Get the settings saved in the local storage when the app starts - App.vue
  getSettings({ commit }) {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }
}

const mutations = {
  setShow12HourTimeFormat(state, value) {
    state.settings.show12HourTimeFormat = value
  },
  setShowTasksInOneList(state, value) {
    state.settings.showTasksInOneList = value
  },
  setSettings(state, settings) {
    Object.assign(state.settings, settings)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}