
var firebaseConfig = {
    apiKey: "AIzaSyDGPmPYdgG5-v5IzStRTbfHTgk-lmnJKaw",
    authDomain: "kwitter-7b46c.firebaseapp.com",
    databaseURL: "https://kwitter-7b46c-default-rtdb.firebaseio.com",
    projectId: "kwitter-7b46c",
    storageBucket: "kwitter-7b46c.appspot.com",
    messagingSenderId: "329247982976",
    appId: "1:329247982976:web:9a2072d5948342585eed65",
    measurementId: "G-RQTBVT9FC8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding User"
    });
}