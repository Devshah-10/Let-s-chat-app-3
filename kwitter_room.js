const firebaseConfig = {
    apiKey: "AIzaSyDl-9_fuafBkBvIu-KtYyoNOg7ZATtA6ck",
    authDomain: "let-s-chat-1aa6d.firebaseapp.com",
    databaseURL: "https://let-s-chat-1aa6d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-1aa6d",
    storageBucket: "let-s-chat-1aa6d.appspot.com",
    messagingSenderId: "173061195355",
    appId: "1:173061195355:web:a549f99b60efe96b04217e",
    measurementId: "G-GYH3FLXJSH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


User_name = localStorage.getItem("User_name");

document.getElementById("user_name").innerHTML = "Welcome" + User_name + "!";

function Addroom() {

Room_name = document.getElementById("room_name").value;

localStorage.setItem("Room_name",Room_name);

firebase.database().ref("/").child(Room_name).update({
    purpose : "adding room name"
  });

  window.location = "kwitter_page.html";

}

function getData() {

    firebase.database().ref("/").on('value',
    function(snapshot) {
        
    document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code
    
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+ Room_names +"</div><hr>";

    //End code
    });});

}

    getData();

    function redirectToRoomName(name) {

localStorage.setItem("Room_name", name);
window.location = "kwitter_page.html";

    }

