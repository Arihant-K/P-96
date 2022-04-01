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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " +user_name+"!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
          });

          localStorage.setItem("room_name" , room_name);

          window.location = "kwitter_page.html"
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location.replace("index.html");
}