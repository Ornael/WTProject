var firebaseConfig = {
  apiKey: "AIzaSyChGO9bnKdVlcf8EBiWLvBn__J-I0MlcEY",
  authDomain: "wtproject-49b66.firebaseapp.com",
  projectId: "wtproject-49b66",
  storageBucket: "wtproject-49b66.appspot.com",
  messagingSenderId: "539344713706",
  appId: "1:539344713706:web:5b8146c7ac565de75be493"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();


function signUp(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

  alert("Signed Up");
}



function signIn(){

  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));




}


function signOut(){

  auth.signOut();
  alert("Signed Out");

}



auth.onAuthStateChanged(function(user){

  if(user){

    var email = user.email;
    alert("Active User " + email);

    //Take user to a different or home page

    //is signed in

  }else{

    alert("No Active User");
    //no user is signed in
  }



});
