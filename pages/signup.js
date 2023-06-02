import React, {useState} from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

export default function Home(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [password_confirm, setPassword_confirm] = useState("");

    function handleSignUp(e) {
      e.preventDefault();
      if (password !== password_confirm) {
        alert("Passwords do not match");
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("You have signed up!");
          router.push("/about");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  

  return (
    <>
      <div className="containersign">
          <form className="signupForm" action="" onSubmit={handleSignUp}>
            <p>Welcome to our Store</p>
            <input className="inputsign" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
            <br />
            <input className="inputsign" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
            <br />
            <input className="inputsign" type="password" onChange={(e) => setPassword_confirm(e.target.value)} value={password_confirm} placeholder="Confirm Password" />
            <br />
            <input className="inputsign" type="submit" value="Register" />
            <br />
            <a href="/">already a member?</a>
          </form>

        <div className="drops">
          <div className="drop drop-1"></div>
          <div className="drop drop-2"></div>
          <div className="drop drop-3"></div>
          <div className="drop drop-4"></div>
          <div className="drop drop-5"></div>
        </div>
      </div>
    </>
  );
}
