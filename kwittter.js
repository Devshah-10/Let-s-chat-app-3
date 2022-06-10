function addUser(){

User_name = document.getElementById("User").value;

localStorage.setItem("User_name",User_name);

window.location = "kwitter_room.html";

}