//import styles from './page.module.css'
'use client'
import styles from './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faBars,
}from "@fortawesome/free-solid-svg-icons";
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
      <nav className='nav-bar'>
      
        <img src = 'logo.png' alt = 'logo' className = 'logo' width='50px' height='50px'/>
        
        <ul className="nav-content">
          <li><a href = '#'>Video Games</a></li>
          <li><a href = '#'>Gift Cards</a></li>
          <li><a href = '#'>About</a></li>
          <li><a href = '#'>Contact</a></li>
        </ul>
        <a href="javascript:void(0);" className='bars-icon' onClick={HamburgerMenuOnClick}>
        <FontAwesomeIcon icon={faBars}  width={30}/>
        </a>
      </nav>

    </main>
  )
}

