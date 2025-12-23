import SkillsCard from "../SkillsCard";
import styles from './resources/RelevantCoursework.module.css';

import FullStackLogo from '../resources/images/fullstack_logo.png';
import OOPLogo from '../resources/images/oop_logo.png';
import DSALogo from '../resources/images/dsa_logo.png';
import SysPLogo from '../resources/images/sys_p_logo.png';
import CODLogo from '../resources/images/cod_logo.png';
import AILogo from '../resources/images/ai_logo.png';
import ComALogo from '../resources/images/comp_a_logo.png';
import ComNetLogo from '../resources/images/com_net_logo.png';
import SDMLogo from '../resources/images/sdm_logo.png';
import OSLogo from '../resources/images/os_logo.png';
import DM4CSLogo from '../resources/images/dm4cs_logo.png';
import TechWLogo from '../resources/images/tech_w_logo.png';


function RelevantCoursework() {

    const courses = [
        {
            name: 'Full-Stack Engineering',
            icon: FullStackLogo,
        },
        {
            name: 'Object Oriented Programming',
            icon: OOPLogo,
        },
        {
            name: 'Data Structures & Algorithms',
            icon: DSALogo,
        },
        {
            name: 'Systems Programming',
            icon: SysPLogo,
        },
        {
            name: 'Computer Organization & Design',
            icon: CODLogo,
        },
        {
            name: 'Artificial Intelligence',
            icon: AILogo,
        },
        {
            name: 'Computer Architecture',
            icon: ComALogo,
        },
        {
            name: 'Communication Networks',
            icon: ComNetLogo
        },
        {
            name: 'Software Design Methods',
            icon: SDMLogo
        },
        {
            name: 'Operating Systems Design & Construction',
            icon: OSLogo,
        },
        {
            name: 'Discrete Math for Computer Science',
            icon: DM4CSLogo,
        },
        {
            name: 'Technical Writing',
            icon: TechWLogo
        }
    ];

    return (
        <section class={styles.background}>
            <h3>Relevant Coursework:</h3>
            <div class={styles.container}>
                {courses.map((course) => (
                    <SkillsCard name={course.name} icon={course.icon} />
                ))}
            </div>
        </section>
    );
};

export default RelevantCoursework;


// Object Oriented Programming, Data Structures & Algorithms, Systems Programming,
// Computer Organization & Design, Artificial Intelligence, Computer Architecture, 
// Communication Networks, Software Design Methods, Operating Systems Design & Construction,
// Discrete Math for Computer Science, Technical Writing