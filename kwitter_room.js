var firebaseConfig = {
      apiKey: "AIzaSyB1wxK3kgPdP1T-oMVH0e3XK_bpv_Oe6IM",
      authDomain: "whjr-01.firebaseapp.com",
      databaseURL: "https://whjr-01-default-rtdb.firebaseio.com",
      projectId: "whjr-01",
      storageBucket: "whjr-01.appspot.com",
      messagingSenderId: "983880956187",
      appId: "1:983880956187:web:bfa2ca30023ff54ef73bbe"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}


function getData() 
{
firebase.database().ref("/").on('value', function(snapshot) 
{
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{
childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code
      console.log("Room Name = " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row; 
      //End code
});
});
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}