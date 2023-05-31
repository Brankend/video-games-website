'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faCaretDown,
}from "@fortawesome/free-solid-svg-icons";
export default function NavBar(){
    function HamburgerMenuOnClick() {
        
    var navBar = document.getElementById("myTopnav");
    if (navBar.className === "topnav") {
        navBar.className += " responsive";
    } else {
    navBar.className = "topnav";
}
    }
    return(
    <div className='topnav' id="myTopnav">
        <a><img src = 'logo.png' alt = 'logo' id = 'logo' width='50px' height='50px'/></a>
        <h1 id="website-name">M4N Games</h1>

        {/* <div className="nav-content"> */}
                <div className="dropdown">            
                    <button className="dropbtn">Video Games <FontAwesomeIcon icon={faCaretDown}  fontSize={10}/></button>            
                    <div className="dropdown-content">
                        <a href = '#'>Playstation</a>
                        <a href = '#'>Xbox</a>
                        <a href = '#'>Nintendo</a>
                        <a href = '#'>PC</a>
                    </div>
                </div>

                <div className="dropdown">
                    <button className="dropbtn">Gift Cards <FontAwesomeIcon icon={faCaretDown}  fontSize={10}/></button>            
                    <div className="dropdown-content">
                        <a href = '#'>Playstation</a>
                        <a href = '#'>Xbox</a>
                        <a href = '#'>Nintendo</a>
                        <a href = '#'>Steam</a>
                    </div>
                </div>
            <a href = '#'>About</a>
            <a href = '#'>Contact</a>
            <a href = '#'>Account</a>
        {/* </div> */}
        <a href="#" className="icon" onClick={HamburgerMenuOnClick}>&#9776;</a>
    </div>
    )
}