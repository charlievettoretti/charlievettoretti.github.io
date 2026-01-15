import styles from './resources/RelevantExperience.module.css';
import ProjectCard from '../Projects/ProjectCard';

function RelevantExperience() {

    const experience = [
        {
            title: "Order Automation & Data Extraction Tool",
            tech: ['Python', 'Playwright', 'Asyncio', 'Pandas'],
            bullets: [
                'Developed a browser automation system to extract order data from a proprietary dashboard for thousands of orders',
                'Reduced total processing time by 74% through the use of concurrent scraping with Playwright and Asyncio',
                'Optimized performance by eliminating non-essential network resources (images, fonts, etc.) and implementing session persistence to avoid repeated logins',
                'Parsed order IDs to generate authenticated dashboard URLs and incrementally saved extracted data using pandas',
                'Built validation mechanisms to verify extracted values and handle failures to ensure data integrity'
            ]
        }
    ]

    return (
        <section id="relevantexperience" className={styles.background}>
            <h3>Relevant Experience:</h3>
            <div className={styles.ExperienceGrid}>
                {experience.map((e) => (
                    <ProjectCard
                        key={e.title}
                        title={e.title}
                        tech={e.tech}
                        bullets={e.bullets}
                     />
                ))}
            </div>
        </section>
    );
}

export default RelevantExperience;