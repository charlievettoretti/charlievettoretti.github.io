import React from "react";
import styles from './resources/NavBar.module.css';

function NavBar() {

    const navBarItems = ['About Me', 'Projects', 'Programming Language', 
        'Software Skills', 'Relevant Coursework'];
    

    return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Charles Vettoretti</h2>

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