/* eslint-disable @next/next/no-img-element */
//import styles from './page.module.css'
"use client";
import styles from "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  function HamburgerMenuOnClick() {
    var x = document.querySelector(".nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }

  const myFunction = function (url) {
    window.location.href = url;
  };

  return (
    <main>
      <header>
        <div className="container">
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
          </ul>
        </div>
      </header>
      <div className="landing">
        <div className="container">
          <div className="text">
            <h1>Unlock the Ultimate Gaming Experience</h1>
            <p>
              Welcome to the ultimate gaming destination, where your gaming
              dreams come true!
            </p>
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
            src="./double-down-arrows.png"
            alt="double down arrow image"
          ></img>
        </a>
      </div>
      {/* Hot Deals Section */}
      <div className="hot-deals" id="hot-deals">
        <h2 class="main-title">Hot Deals</h2>
        <div class="container">
          <div className="box" onClick={() => myFunction("https://google.com")}>
            <img
              src="https://www.games2egypt.com/Images/Products/41550?fileFormat=0"
              alt="Game 1 Image"
            ></img>
            <h3>Hogwarts Legacy (PS5)</h3>
            <h4>1990 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/61OlrxlXo0L.jpg"
              alt="Game 2 Image"
            ></img>
            <h3>Jedi (PS5)</h3>
            <h4>2000 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/717xPIQzxBL._AC_UF1000,1000_QL80_.jpg"
              alt="Game 3 Image"
            ></img>
            <h3>God Of Wars(PS4)</h3>
            <h4>1990 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/71Ku7i1sXUL.jpg"
              alt="Game 4 Image"
            ></img>
            <h3>The Last Of Us(PS4)</h3>
            <h4>1990 EGP</h4>
          </div>
        </div>
      </div>
      {/* Play More Pay Less Section */}
      <div className="play-more-pay-less" id="play-more-pay-less">
        <h2 class="main-title">Play More Pay Less</h2>
        <div class="container">
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/81nXJXDWZLL.jpg"
              alt="Game 1 Image"
            ></img>
            <h3>Plants Vs Zombies(PS4)</h3>
            <h4>PRE OWNED 400 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://www.games2egypt.com/Images/Products/36387?fileFormat=0&height=500"
              alt="Game 2 Image"
            ></img>
            <h3>Saints Row (PS4)</h3>
            <h4>PRE OWNED 750 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/91gfAHAu2hL.jpg"
              alt="Game 3 Image"
            ></img>
            <h3>Zombie Army(PS4)</h3>
            <h4>PRE OWNED 600 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/81LOjMJ-47L._AC_UF1000,1000_QL80_.jpg"
              alt="Game 4 Image"
            ></img>
            <h3>Spider Man(PS5)</h3>
            <h4>PRE OWNED 1000 EGP</h4>
          </div>
        </div>
      </div>
      {/* Xbox Section */}
      <div className="xbox" id="xbox">
        <h2 class="main-title">Xbox</h2>
        <div class="container">
          <div className="box">
            <img
              src="https://m.media-amazon.com/images/I/71LSwnEXpXL._AC_UF1000,1000_QL80_.jpg"
              alt="Game 1 Image"
            ></img>
            <h3>Forza Horizon</h3>
            <h4>2000 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://product.takwene.com/Files/Catalog/Products/3593/photo_b7408d94-53a8-4584-bc44-4d82665926f0.jpg"
              alt="Game 2 Image"
            ></img>
            <h3>Red Dead 2</h3>
            <h4>2500 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://product.takwene.com/Files/Catalog/Products/622/photo_e9feb3f8-a1a2-4259-8e09-dc70e27d0c5e.jpg"
              alt="Game 3 Image"
            ></img>
            <h3>Minecraft</h3>
            <h4>2300 EGP</h4>
          </div>
          <div className="box">
            <img
              src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414163_sd.jpg"
              alt="Game 4 Image"
            ></img>
            <h3>Halo Infinity</h3>
            <h4>2300 EGP</h4>
          </div>
        </div>
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
          <div className="copyright">
            <img
              src="https://www.freepnglogos.com/uploads/copyright-png/copyright-logo-png-clipart-best-5.png"
              alt="copyright icon"
            ></img>
            <h2>Copyright by m4n1_gamesforlife 2023</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
