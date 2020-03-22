// Using Google's firestore for Auth. /boot/firebase.js
import { firebaseAuth } from 'boot/firebase'
const state = {

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
