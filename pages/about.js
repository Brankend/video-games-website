import React from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function About(props) {
  const router = useRouter();
  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ProtectedRoute>
        <h2>About Us</h2>
        <p>Welcome to this amazing about page. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolore officiis atque voluptas, quas, repellendus cum, magnam a alias unde reiciendis voluptates aliquam maxime laborum? Quae omnis eius impedit et?</p>
        <p>I have {props.repoCount} public repos on GitHub.</p>
        <form onSubmit={handleLogOut}>
        <input className="submit2" type="submit" value="Sing Out"/>
        </form>
    </ProtectedRoute>
    )
  }
  