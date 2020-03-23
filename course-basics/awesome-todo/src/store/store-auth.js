// Using Google's firestore for Auth. /boot/firebase.js
import { LocalStorage } from 'quasar'
import { firebaseAuth } from 'boot/firebase'

const state = {
  loggedIn: false
}

const getters = {

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
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true)
        LocalStorage.set('loggedIn', true)
        this.$router.push('/').catch(err => { console.log(err) })
      } else {
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
