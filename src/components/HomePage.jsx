import React from 'react';
import styles from './resources/HomePage.module.css';
import RelevantExperience from './RelevantExperience/RelevantExperience';
import ProjectSection from './Projects/ProjectSection';
import ProgrammingLanguages from './ProgrammingLanguages/ProgrammingLanguages';
import SoftwareSkills from './SoftwareSkills/SoftwareSkills';
import RelevantCoursework from './RelevantCoursework/RelevantCoursework';
import Footer from './Footer';

import CharliePicture from './resources/images/charlie_photo.png';

function HomePage() {
    return (
        <div className={styles.background}>
            <div id='aboutme' className={styles.aboutMe}>
                <h3>About Me:</h3>
                <div className={styles.aboutMeGroup}>
                    <img src={CharliePicture} className={styles.photo} />
                    <p className={styles.aboutMeText}>
                        I’m a Computer Engineering graduate with a strong interest in building full stack applications 
                        and working with AI. I primarily work with React, Node.js, and PostgreSQL, and I enjoy 
                        creating systems that are both functional and user focused. Lately, I’ve been exploring how 
                        large language models and AI tools can be integrated into real applications to improve workflows 
                        and automate processes. I’m highly self motivated, always learning new technologies, and 
                        focused on continuously improving the quality of what I build.
                    </p>
                </div>
            </div>
            <RelevantExperience />
            <ProjectSection />
            <ProgrammingLanguages />
            <SoftwareSkills />
            <RelevantCoursework />
            <Footer />
        </div>
    );
};

export default HomePage;