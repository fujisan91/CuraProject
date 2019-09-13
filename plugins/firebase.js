import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyB-WQgBjKH5MQMEpaeFNvAWhyVu0iD6ye0",
        authDomain: "cura-ba6b2.firebaseapp.com",
        databaseURL: "https://cura-ba6b2.firebaseio.com",
        projectId: "cura-ba6b2",
        storageBucket: "",
        messagingSenderId: "465234950141",
        appId: "1:465234950141:web:d912080c14873638c28b94"
    }
  )
}

export default firebase