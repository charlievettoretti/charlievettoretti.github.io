import React from 'react';
import styles from './resources/ProjectSection.module.css';

function ProjectCard({ title, tech = [], bullets = [] }) {
    return (
        <div className={styles.ProjectCard}>
            <h3 className={styles.title}>{title}</h3>
            {!!tech.length && (
                <p className={styles.tech}>
                    {tech.join(" | ")}
                </p>
            )}
            <ul>
                {bullets.map((bullet, i) => (
                    <li key={i} className={styles.bullet}>
                        {bullet}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectCard;