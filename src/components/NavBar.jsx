import React from "react";
import styles from './resources/NavBar.module.css';
import logo from './resources/images/cv_logo_lb-final.png';
import logo2 from './resources/images/cv_logo_final.png'; // stretched

function NavBar() {

    const navBarItems = ['About Me', 'Projects', 'Programming Language', 
        'Software Skills', 'Relevant Coursework'];
    

    return (
    <nav className={styles.navbar}>
      <div className={styles.tag}>
        <img src={logo} className={styles.logo} alt="logo" />
        <h2 className={styles.name}>Charles Vettoretti</h2>
      </div>

      <ul className={styles.navLinks}>
        <li key='Home'><a href="#">Home</a></li>
        {navBarItems.map((item, index) => (
          <li key={index}>
            <a href={"#" + item.replace(/\s+/g, "").toLowerCase()}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;