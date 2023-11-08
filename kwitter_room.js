
//AÑADE TUS ENLACES DE FIREBASE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDYGL44KroyMXpCNcKZwTce7HfzbIzTdTo",
      authDomain: "kwitter-1d61b.firebaseapp.com",
      databaseURL: "https://kwitter-1d61b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1d61b",
      storageBucket: "kwitter-1d61b.appspot.com",
      messagingSenderId: "875524790034",
      appId: "1:875524790034:web:268d5c916e4d76a07285cb"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");

var room_name=localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML="hola " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
      
}

     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id) >#" +Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();

function redirectToRoomName(Room_names){
      console.log(Room_names);
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_page.html";
}



function logout() 
{ localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
  window.location.replace("index.html");
 }
 

