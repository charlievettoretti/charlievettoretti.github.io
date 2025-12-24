import React from "react";
import styles from './resources/NavBar.module.css';
import logo from './resources/images/cv_logo_lb-final.png';
import logo2 from './resources/images/cv_logo_final.png'; // stretched

import LinkedinLogo from './resources/images/linkedin_logo.png';
import GitHubLogo from './resources/images/github_icon_2.svg';
import ResumeLogo from './resources/images/resume_icon.png';

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
      <div className={styles.links}>
        <a 
          href="https://www.linkedin.com/in/charles-vettoretti-601902234/" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my Linkedin"
          className={styles.wrapper}
        >
          <img src={LinkedinLogo} className={styles.logo_link} alt="Linkedin" />
          <span className={styles.popup_label}>Linkedin</span>
        </a>
        <a 
          href="https://github.com/charlievettoretti" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub"
          className={styles.wrapper}
        >
          <img src={GitHubLogo} className={styles.logo_link} alt='GitHub' />
          <span className={styles.popup_label}>GitHub</span>
        </a>
        <a
          className={styles.wrapper}
        >
          <img src={ResumeLogo} className={styles.logo_link} alt='Resume' />
          <span className={styles.popup_label}>Resume PDF</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;