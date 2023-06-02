import React from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ProtectedRoute from "@/components/ProtectedRoute";
import GameCard from "../components/GameCard";

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
      <html>
      <header>
                <div className="containerHome">
                <img src="logoCool.png" alt="Logo Image" className="logo"></img>
                <ul className="nav-content">
                    <li>
                    <a href="#hot-deals">Hot Deals</a>
                    </li>
                    <li>
                    <a href="#play-more-pay-less">Play More Pay Less</a>
                    </li>
                    <li>
                    <a href="#xbox">Xbox</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                    <li>
                    <form onSubmit={handleLogOut}>
                      <input className="submit2" type="submit" value="Sing Out"/>
                    </form>
                    </li>
                </ul>
                </div>
      </header>
      <body className="bodyhome">
      <div className="landing">
        <div className="containerHome">
          <div className="text">
            <h1>Unlock the Ultimate Gaming Experience</h1>
            <h2 className="parag">
              Welcome to the ultimate gaming destination, where your gaming
              dreams come true!
            </h2>
          </div>
          <div className="image">
            <img
              src="https://cdn.dribbble.com/users/5115504/screenshots/12481958/media/c2f84b22f6a0774c4e100efef0cd5244.gif"
              alt="Landing Image"
            ></img>
          </div>
        </div>
        <a href="#hot-deals">
          <img
            className="arrow"
            src="./double-down-arrows.png"
            alt="double down arrow image"
          ></img>
        </a>
      </div>
      {/* Hot Deals Section */}
      <div className="hot-deals" id="hot-deals">
        <h2 class="main-title">Hot Deals</h2>
        <GameCard />
      </div>
      {/* Play More Pay Less Section */}
      <div className="play-more-pay-less" id="play-more-pay-less">
        <h2 class="main-title">Play More Pay Less</h2>
        <GameCard />
      </div>
      {/* Xbox Section */}
      <div className="xbox" id="xbox">
        <h2 class="main-title">Xbox</h2>
        <GameCard />
      </div>
      </body>
      </html>
    </ProtectedRoute>
    )
  }
  