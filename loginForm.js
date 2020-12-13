// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCfaekdsfBDm4Z3cB5H47JBiG4a4EblnQ",
  authDomain: "wtproject-c2bc5.firebaseapp.com",
  projectId: "wtproject-c2bc5",
  storageBucket: "wtproject-c2bc5.appspot.com",
  messagingSenderId: "848642989242",
  appId: "1:848642989242:web:f000a52f2d85635cb27683"
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
