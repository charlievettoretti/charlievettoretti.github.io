import React from 'react';
import styles from './resources/ProjectSection.module.css';

function ProjectCard({ title, tech = [], bullets = [] }) {
    return (
        <div className={styles.ProjectCard}>
            <h3 className={styles.title}>{title}</h3>
                <div className={styles.tech_line}>
                {!!tech.length && (
                    <p className={styles.tech}>
                        {tech.join(" | ")}
                    </p>
                )}
                </div>
            <ul className={styles.bullets}>
                {bullets.map((bullet, i) => (
                    <li key={i} className={styles.bullet}>
                        {bullet}
                    </li>
                ))}
            </ul>
            <div className={styles.cardFooter}>
                <a className={styles.cardLink}>GitHub: </a>
            </div>
        </div>
    );
};

export default ProjectCard;