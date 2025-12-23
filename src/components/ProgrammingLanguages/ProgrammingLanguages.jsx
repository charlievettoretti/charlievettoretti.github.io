import React from 'react';
import SkillsCard from '../SkillsCard';
import styles from './resources/ProgrammingLanguages.module.css';

import PythonLogo from '../resources/images/python_logo.png'
import JavaScriptLogo from '../resources/images/javascript_logo.png'
import CLogo from '../resources/images/c_logo.png';
import JavaLogo from '../resources/images/java_logo.png';
import SQLLogo from '../resources/images/sql_logo.png';
import HTMLLogo from '../resources/images/html_logo2.png';
import CSSLogo from '../resources/images/css_logo.png';
import BashLogo from '../resources/images/bash_logo.png';
import MATLABLogo from '../resources/images/matlab_logo.png';
import VerilogLogo from '../resources/images/verilog_logo.png';
import AssemblyLogo from '../resources/images/assem_lang_logo.png';

function ProgrammingLanguages() {

    //const programLang = ['Python', 'JavaScript', 'C', 'Java', 'SQL', 'HTML', 'CSS', 'Bash', 'MATLAB', 'Verilog', 'Assembly Language'];

    const programLanguages = [
        {
            name: 'Python',
            icon: PythonLogo
        },
        {
            name: 'JavaScript',
            icon: JavaScriptLogo
        },
        {
            name: 'C',
            icon: CLogo
        },
        {
            name: 'Java',
            icon: JavaLogo
        },
        {
            name: 'SQL',
            icon: SQLLogo
        },
        {
            name: 'HTML',
            icon: HTMLLogo
        },
        {
            name: 'CSS',
            icon: CSSLogo
        },
        {
            name: 'Bash',
            icon: BashLogo
        },
        {
            name: 'MATLAB',
            icon: MATLABLogo
        },
        {
            name: 'Verilog',
            icon: VerilogLogo
        },
        {
            name: 'Assembly Language',
            icon: AssemblyLogo
        }
    ];

    return (
        <section className={styles.background} id="programminglanguage">
            <h3>Programming Languages:</h3>
            <div className={styles.container}>
                {programLanguages.map((p) => (
                    <SkillsCard name={p.name} icon={p.icon} />
                ))}
            </div>
        </section>
    );
};

export default ProgrammingLanguages;