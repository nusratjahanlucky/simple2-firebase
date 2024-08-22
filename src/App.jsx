import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import './App.css'
import app from "./firebase/firebase.config";
import { useState } from "react";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user,setUser] = useState(null);
  const handleGoogleSignIn =()=>{
    signInWithPopup (auth,googleProvider)

    .then (result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setUser(loggedUser)
    })
    .catch(error =>{
      console.log(error)

    })
  }

  return (
    <>
      
      <div>
      <h1>Simple2 Firebase</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && <div>
        <h4>User:{user.displayName}</h4>
      </div>}
      </div>
      
    </>
  )
}

export default App
