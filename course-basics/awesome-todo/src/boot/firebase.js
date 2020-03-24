// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
import 'firebase/auth'
import 'firebase/database'
// import "firebase/firestore"

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCt6hvtjvoMzTyV9I9G0zA3hR_ORNvxzXQ",
  authDomain: "awesome-todo-db6969.firebaseapp.com",
  databaseURL: "https://awesome-todo-db6969.firebaseio.com",
  projectId: "awesome-todo-db6969",
  storageBucket: "awesome-todo-db6969.appspot.com",
  messagingSenderId: "1044225372489",
  appId: "1:1044225372489:web:97bc92e896cfd6a872aa98"
}
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export {
  firebaseAuth,
  firebaseDb
}
