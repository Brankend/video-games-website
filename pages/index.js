
import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../components/AuthContext";

export default function Home(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

function handleLogin(e) {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("Signed in");
      router.push("/about");
    })
    .catch((error) => {
      console.log(error);
      alert("Wrong email or password");
    });
}
  return (
    <AuthContextProvider>
      <body className="bodysign">
    <div className="containersign">
      <form className="formClass1" action="" onSubmit={handleLogin}>
        <p>Welcome to our Store</p>
        <input className="inputsign" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" />
        <br />
        <input className="inputsign" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
        <br />
        <input className="inputsign" type="submit" value="Sign in" />
        <br />
        <a href="/signup">new member?</a>
      </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
    </body>
  </AuthContextProvider>
  );
}
  