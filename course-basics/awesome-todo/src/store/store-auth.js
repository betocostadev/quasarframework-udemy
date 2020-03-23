// Using Google's firestore for Auth. /boot/firebase.js
import { firebaseAuth } from 'boot/firebase'
const state = {
  loggedIn: false
}

const getters = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  }
}

const actions = {
  registerUser({}, payload) {
    console.log('registerUser: ', payload)
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => console.log('Error message: ', error.message))
  },

  loginUser({}, payload) {
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('response: ', response)
      })
      .catch(error => console.log('Error message: ', error.message))
  },

  handleAuthStateChange({ commit }) {
    // Fired as soon as the App starts, like settings
    firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true)
      } else {
        commit('setLoggedIn', false)
      }
    })
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
