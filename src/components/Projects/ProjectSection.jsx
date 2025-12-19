import React from 'react';
import styles from './resources/ProjectSection.module.css';
import ProjectCard from './ProjectCard';

function ProjectSection() {

    const projects = [
        {
            title: "Task & Time Management Platform",
            tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'CSS', 'JavaScript', 'Python', 'Passport.js'],
            bullets: [
                'Developed a web application that allows users to create, manage, and track tasks and events',
                'Built with React using Redux Toolkit for state management, modular components, and CSS for styling',
                'Implemented a RESTful API with Node.js and Express to handle backend operations and data storage',
                'Utilized PostgreSQL for database management and authentication with Passport.js',
                'Created a user-friendly interface with a calendar view for task scheduling and event management',
                'Implemented a search functionality to quickly find tasks and events',
                'Created a dashboard to display important information and statistics',
            ],
        },
        {
            title: 'Predictive NFL Quarter Winner Modal',
            tech: ['Python', 'JSON'],
            bullets: [
                'Developed a predictive model to forecast NFL quarter outcomes based on historical data',
                'Utilized the ESPN API and parsed JSON data to gather up-to-date NFL team data, including quarterly point differentials and home/away statistics',
                'Created a system to measure prediction accuracy enabling performance testing and analysis',
            ],
        },
        {
            title: 'Generative Large Language Modal',
            tech: ['Python', 'TensorFlow', 'PyTorch', 'Hugging Face'],
            bullets: [
                'Developed an AI-powered Generative LLM using machine learning transformer architecture that produces proposals and research documentation according to user specified guidelines',
                'Designed LLM framework and algorithm with the anticipation for future developments',
                'Established a system to automate the process of creating such documents with efficiency and accuracy',
            ],
        },
        {
            title: 'Dynamic Memory Allocator',
            tech: ['C'],
            bullets: [
                'Developed a dynamic memory allocator for C programs, focusing on efficient and accurate memory management',
                'Implemented Best-Fit allocation to improve memory utilization and reduce memory fragmentation',
            ]
        },
        {
            title: 'File Handling API',
            tech: ['C'],
            bullets: [
                'Developed “read” and “write” functions to manipulate bits across multiple memory disks',
                'Implemented a cache system to reduce request latency by 33% using the Least-Recently-Used algorithm',
                'Designed and implemented comprehensive test cases to identify and eliminate 40% of potential system defects',
                'Expanded API to manipulate data over multiple servers using standard network communication protocols',
            ],
        },
        {
            title: 'Course Management System',
            tech: ['Java', 'JavaSwing', 'SQL', 'DerbyDB'],
            bullets: [
                'Designed and implemented a Java-based application that enables students & faculty to manage course schedules',
                'Utilized DerbyDB to develop a robust database schema for storing user and Penn State course data',
                'Implemented a user-friendly GUI using Java Swing and engineered 15 endpoints for updating DerbyDB',
            ],
        },
        {
            title: 'Plant Watering Effeciency Prototype',
            tech: ['Arduino'],
            bullets: [
                'Researched and designed prototype system to reduce wasted water by 60% in Africa’s farming industry',
                'Designed and created hardware to detect the dirt’s moisture levels to enhance water efficiency',
                'Engineered a software program to turn a water pump on or off according to the dirt’s moisture level',
            ],
        }
    ];

    return (
        <section id="projects">
            <h3>Projects:</h3>
            <div className={styles.ProjectGrid}>
                {projects.map((p) => (
                    <ProjectCard
                        key={p.title}
                        title={p.title}
                        tech={p.tech}
                        bullets={p.bullets}
                     />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;