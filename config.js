import firebase from 'firebase'

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: 'AIzaSyByjIEoYIsnj-ATP2PdRl1uaUDAfACP1Nw',
  authDomain: 'projeto-67-68131.firebaseapp.com',
  databaseURL: 'https://projeto-67-68131-default-rtdb.firebaseio.com',
  projectId: 'projeto-67-68131',
  storageBucket: 'projeto-67-68131.appspot.com',
  messagingSenderId: '738509351384',
  appId: '1:738509351384:web:4d03b0f09ab6cf61ac6aad'
}
// Initialice o Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.database()
