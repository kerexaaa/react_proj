import logo from '/images/brand_logo.png'
import styles from './Navbar.module.css'
import RedButton from '../Buttons/RedButton/RedButton';

const Navbar = () => {
    return(
        
            <nav className={styles.navbar}>
                <div className="nav-logo">
                    <img src={logo} alt="Brand logo" />
                </div>
                <ul className={styles.navList}>
                    <li href="#" className={styles.navItem}>menu</li>
                    <li href="#" className={styles.navItem}>location</li>
                    <li href="#" className={styles.navItem}>about</li>
                    <li href="#" className={styles.navItem}>contacts</li>
                </ul>
                <button className={styles.loginButton}>
                    Login
                </button>
            </nav>

    );
}

export default Navbar;