//import styles from './page.module.css'
import styles from './style.css'
import
export default function Home() {
  return (
    <main className={styles.main}>
      <nav className='nav-bar'>
        <img src = 'logo.png' alt = 'logo' className = 'logo' width='50px' height='50px'/>
        
        <ul className="nav-content">
          <li><a href = '#'>Video Games</a></li>
          <li><a href = '#'>Gift Cards</a></li>
        </ul>
        
        <ul className="nav-content">
          <li><a href = '#'>Home</a></li>
          <li><a href = '#'>About</a></li>
          <li><a href = '#'>Contact</a></li>
        </ul>
      </nav>
    </main>
  )
}
