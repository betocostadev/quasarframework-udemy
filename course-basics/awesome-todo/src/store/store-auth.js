// Using Google's firestore for Auth. /boot/firebase.js
import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false
}

const getters = {

}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('User registered!')
      })
      .catch(error => showErrorMessage(error.message))
  },

  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => showErrorMessage(error.message))
  },

  // We use dispatch here to start the store-task action to read the data from Firebase
  handleAuthStateChange({ commit, dispatch }) {
    // Fired as soon as the App starts, like settings
    firebaseAuth.onAuthStateChanged((user) => {
      Loading.hide()
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => { console.log(err) })
        dispatch('tasks/firebaseReadData', null, { root: true })
      } else {
        commit('tasks/clearTasks', null, { root: true })
        commit('tasks/setTasksDownloaded', false, { root: true })
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        this.$router.replace('/auth').catch(err => { console.log(err) })
      }
    })
  },

  logoutUser() {
    firebaseAuth.signOut()
    this.$router.push('/auth')
  }
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
