var firebaseConfig = {
    apiKey: "AIzaSyC1Slw1KG-TWrfUhCrv4WnhvU7gsNUYNPI",
    authDomain: "class-test-56f40.firebaseapp.com",
    databaseURL: "https://class-test-56f40-default-rtdb.firebaseio.com",
    projectId: "class-test-56f40",
    storageBucket: "class-test-56f40.appspot.com",
    messagingSenderId: "116367925159",
    appId: "1:116367925159:web:015efbd260f3eadaa92082",
    measurementId: "G-D2Q9VY2CWH" 
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    }
    
    );
    localStorage.setItem("room_name",room_name);
    window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name-"+ Room_names);
   //Start code
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
}); 
});
}
   //End code
getData();
function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
        
    });}
    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
    }
    function redirectToRoomName(name) {
         console.log(name);
         localStorage.setItem("room_name", name);
          window.location = "kwitter_page.html";
    }
