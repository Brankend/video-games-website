import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
    faBars,
    faCaretDown,
}from "@fortawesome/free-solid-svg-icons";
export default function NavBar(){
    function HamburgerMenuOnClick() {
        var navigationBar = document.querySelector(".nav-bar");
        var websiteName = document.querySelector("#website-name");
        if (navigationBar.className === "nav-bar") {
            navigationBar.className += " responsive";
            websiteName.style.display = "none";
        
        } else {
            navigationBar.className = "nav-bar";
            websiteName.style.display = "block";
        }
    }
    return(
    <nav className='nav-bar'>
        <img src = 'logo.png' alt = 'logo' className = 'logo' width='50px' height='50px'/>
        <h1 id="website-name">M4N Games</h1>
        <div className="nav-content">
            <a className="a-dropdown"><div className="dropdown">            
                <a href = '#' className="dropbtn">Video Games <FontAwesomeIcon icon={faCaretDown}  fontSize={10}/></a>            
                <div className="dropdown-content">
                    <a href = '#'>Playstation</a>
                    <a href = '#'>Xbox</a>
                    <a href = '#'>Nintendo</a>
                    <a href = '#'>PC</a>
                </div>
            </div></a>
            <a className="a-dropdown"><div className="dropdown">
                <a href = '#' className="dropbtn">Gift Cards <FontAwesomeIcon icon={faCaretDown}  fontSize={10}/></a>            
                <div className="dropdown-content">
                    <a href = '#'>Playstation</a>
                    <a href = '#'>Xbox</a>
                    <a href = '#'>Nintendo</a>
                    <a href = '#'>Steam</a>
                </div>
            </div></a>
            <a href = '#'>About</a>
            <a href = '#'>Contact</a>
            <a href = '#'>Account</a>
        </div>
        <a href="javascript:void(0);" className='bars-icon' onClick={HamburgerMenuOnClick}>
        <FontAwesomeIcon icon={faBars}  fontSize={30}/>
        </a>
    </nav>
    )
}