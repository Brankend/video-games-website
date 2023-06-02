import React from "react";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ProtectedRoute from "@/components/ProtectedRoute";
import GameCard from "../components/GameCard";
import { AuthRoute } from "@/components/AuthContext";
import NavBar from "@/components/NavBar";

export default function About(props) {
  const router = useRouter();
  const gameType = ['Game', 'Xbox', 'MoreLess'];

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
  function OnCartClick(){
    router.push({
      pathname: '/cart',
    });
  }
  return (
    <AuthRoute>
    <ProtectedRoute>
      <html>
      {/* <header>
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
                    <li>
                      <button onClick={OnCartClick}>
                        Cart
                      </button>
                    </li>
                </ul>
                </div>
      </header> */}
      <NavBar/>
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
            src="arrow.png"
            alt="double down arrow image"
          ></img>
        </a>
      </div>
      {/* Hot Deals Section */}
      <div className="hot-deals" id="hot-deals">
        <h2 class="main-title">Hot Deals</h2>
        <GameCard type={gameType[0]} />
      </div>
      {/* Play More Pay Less Section */}
      <div className="play-more-pay-less" id="play-more-pay-less">
        <h2 class="main-title">Play More Pay Less</h2>
        <GameCard type={gameType[2]} />
      </div>
      {/* Xbox Section */}
      <div className="xbox" id="xbox">
        <h2 class="main-title">Xbox</h2>
        <GameCard type={gameType[1]} />
      </div>
      {/* Contact section */}
      <div className="contact" id="contact">
        <div className="container">
          <h2 className="special-heading">Contact</h2>
          <p>We are born to create</p>
          <div className="info">
            <p className="label">Feel free to drop us a line at:</p>
            <a
              href="mailto:m4n1_gamesforlife@yahoo.com?subject=Contact"
              className="link"
              target="_blank"
            >
              m4n1_gamesforlife@yahoo.com
            </a>
            <div className="social">
              Find Us on Social Network
              <a href="https://www.facebook.com/" target="_blank">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png"
                  alt="Facebook image"
                ></img>
              </a>
              <a href="https://www.linkedin.com/" target="_blank">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="linkedin image"
                ></img>
              </a>
              <a href="https://twitter.com/home" target="_blank">
                <img
                  src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
                  alt="twitter image"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      </body>
      </html>
    </ProtectedRoute>
    </AuthRoute>
    )
  }
  