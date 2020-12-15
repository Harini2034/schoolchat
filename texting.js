var firebaseConfig = {
    apiKey: "AIzaSyBysLQ08P1vPl2sDeYsB1AfihT5WW0fEtE",
    authDomain: "school-chat-b3db0.firebaseapp.com",
    databaseURL: "https://school-chat-b3db0-default-rtdb.firebaseio.com",
    projectId: "school-chat-b3db0",
    storageBucket: "school-chat-b3db0.appspot.com",
    messagingSenderId: "598518185112",
    appId: "1:598518185112:web:a06e04a8911c9e90d064ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();