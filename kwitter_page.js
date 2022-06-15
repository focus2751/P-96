//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyCyejax_SDxSgQpbvUE9lLMlGFWu6hSTI0",
      authDomain: "kwitter-40bb3.firebaseapp.com",
      databaseURL: "https://kwitter-40bb3-default-rtdb.firebaseio.com",
      projectId: "kwitter-40bb3",
      storageBucket: "kwitter-40bb3.appspot.com",
      messagingSenderId: "549949307102",
      appId: "1:549949307102:web:f053d586741c3dc128ea4f"
    };
firebase.initializeApp(firebaseConfig);


user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code


//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

