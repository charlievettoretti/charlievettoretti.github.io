import React from 'react';
import styles from './resources/HomePage.module.css';
import ProjectSection from './Projects/ProjectSection';
import ProgrammingLanguages from './ProgrammingLanguages/ProgrammingLanguages';
import SoftwareSkills from './SoftwareSkills/SoftwareSkills';
import RelevantCoursework from './RelevantCoursework/RelevantCoursework'

function HomePage() {
    return (
        <div className={styles.background}>
            <div className={styles.aboutMe}>
                <h3>About Me:</h3>
            </div>
            <ProjectSection />
            <ProgrammingLanguages />
            <SoftwareSkills />
            <RelevantCoursework />
        </div>
    );
};

export default HomePage;