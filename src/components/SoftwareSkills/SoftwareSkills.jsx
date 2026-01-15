import SkillsCard from "../SkillsCard";
import styles from './resources/SoftwareSkills.module.css';

import GitLogo from '../resources/images/git_logo.png';
import GitHubLogo from '../resources/images/github_logo.png';
import LinuxLogo from '../resources/images/linux_logo.png';
import ReactLogo from '../resources/images/react_logo.png';
import TensorFlowLogo from '../resources/images/tensorflow_logo.png';
import UnixLogo from '../resources/images/unix_logo.png';
import NodejsLogo from '../resources/images/nodejs_logo.png';
import ExpressjsLogo from '../resources/images/express_logo.png';
import PostgreLogo from '../resources/images/postgresql_logo.png';
import ReduxLogo from '../resources/images/redux_logo.png';
import PassportjsLogo from '../resources/images/passportjs_logo.png';

function SoftwareSkills() {

    const Skills = [
        {
            name: 'Git',
            icon: GitLogo,
        },
        {
            name: 'GitHub',
            icon: GitHubLogo,
        },
        {
            name: 'Linux',
            icon: LinuxLogo
        },
        {
            name: 'React',
            icon: ReactLogo
        },
        {
            name: 'TensorFlow',
            icon: TensorFlowLogo,
        },
        {
            name: 'Unix',
            icon: UnixLogo,
        },
        {
            name: 'Node.js',
            icon: NodejsLogo,
        },
        {
            name: 'Express.js',
            icon: ExpressjsLogo
        },
        {
            name: 'PostgreSQL',
            icon: PostgreLogo,
        },
        {
            name: 'Redux',
            icon: ReduxLogo
        },
        {
            name: 'Passport.js',
            icon: PassportjsLogo,
        }
    ];

    return (
        <section id='softwareskills' className={styles.background}>
            <h3>Software Skills:</h3>
            <div className={styles.container}>
                {Skills.map((skill) => (
                    <SkillsCard name={skill.name} icon={skill.icon} />
                ))}
            </div>

        </section>

    );
};

export default SoftwareSkills;