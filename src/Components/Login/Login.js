import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if(firebase.apps.length ===0){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggIN, setLoggIn] = useContext(UserContext)
    const hisTory = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSignIn =()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    
    var credential = result.credential;
    var token = credential.accessToken;
    const {email, displayName} = result.user;
    const newUser = {name:displayName,email}
    setLoggIn(newUser);
    hisTory.replace(from)
   
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage,errorCode,email,credential)
  });
    }
    const githubSignIn =()=>{
        var gitProvider = new firebase.auth.GithubAuthProvider();
        firebase
  .auth()
  .signInWithPopup(gitProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    const {email, displayName} = result.user; 
    const newUser = {name:displayName,email}
    setLoggIn(newUser);
    hisTory.replace(from)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    
    console.log(errorCode,errorMessage,email,credential)
    
  });
    }
    return (
        <div style={{textAlign:'center'}}>
            <button style={{margin:'10px'}} className="bg-primary text-light" onClick={handleGoogleSignIn}>Sign In with Google</button>
            <button className="bg-primary text-light" onClick={githubSignIn}>Sign In with GitHub</button>
        </div>
    );
};

export default Login;