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
  return (
    <main className={styles.main}>
      <nav className="nav-bar">
        <img src="logocool.png" alt="logo" className="logo" width="150px" />

        <ul className="nav-content">
          <li>
            <a href="#">Video Games</a>
          </li>
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <a
          href="javascript:void(0);"
          className="bars-icon"
          onClick={HamburgerMenuOnClick}
        >
          <FontAwesomeIcon icon={faBars} width={30} />
        </a>
      </nav>
      <div className="home-page">
        <div className="bigboss">
          <div className="hotdeals">
            <h2>HOT&#128293; Deals</h2>
          </div>
          <div className="line"></div>
        </div>
        <div className="games-flex">
          <div className="game-hogwarts">
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://www.games2egypt.com/Images/Products/41550?fileFormat=0"
                  class="cover-image"
                />
              </div>
              <img
                src="https://impulsogeek.com/wp-content/uploads/2023/02/Logo-Hogwarts-Legacy.png"
                class="title"
              />
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0919/yTXDDExaBC9CdKogHinDnIqJ.png"
                class="character"
              />
            </div>
            <div className="pricing">
              <h3>
                HOGWARTS(P4)
                <br />
                1000.00EGP
              </h3>
            </div>
          </div>
          <div className="game-godofwar">
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://product.takwene.com/Files/Catalog/Products/3284/photo_06f1ad30-bbf5-460a-a7ac-a876b29fb767.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://freepngimg.com/save/37565-god-of-war-logo-photos/725x189"
                class="title"
              />
              <img
                src="https://www.games2egypt.com/Images/Products/62459?fileFormat=0&height=300"
                class="character"
              ></img>
            </div>
            <div className="pricing">
              <h3>
                HOGWARTS(P4)
                <br />
                1000.00EGP
              </h3>
            </div>
          </div>
          <div className="game-uncharted">
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://m.media-amazon.com/images/I/510y0SxTi+L._AC_UF1000,1000_QL80_.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://freepngimg.com/save/21599-uncharted-logo-image/627x204"
                class="title"
              />
              <img
                src="https://www.pngkey.com/png/full/155-1559360_nathan-drake-uncharted-4-png-uncharted-4-a.png"
                class="character"
                height={250}
              ></img>
            </div>
            <div className="pricing">
              <h3>
                HOGWARTS(P4)
                <br />
                1000.00EGP
              </h3>
            </div>
          </div>
          <div className="game-streetfighter">
            <div class="card">
              <div class="wrapper">
                <img
                  src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6528/6528693_sd.jpg"
                  class="cover-image"
                />
              </div>
              <img
                src="https://image.api.playstation.com/vulcan/ap/rnd/202211/1408/CreEfSV23RtMWePDxSwZeuDi.png"
                class="title"
              />
              <img
                src="https://cdn.dashfight.com/eb459169e64464436b03f3e0b86589345c2665ae.png"
                class="character"
                height={250}
              ></img>
            </div>
            <div className="pricing">
              <h3>
                HOGWARTS(P4)
                <br />
                1000.00EGP
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
