import styles from './resources/SkillsCard.module.css';

function SkillsCard({ name, icon }) {

    return(
        <div className={styles.box}>
            <img src={icon} className={styles.icon} alt={`${name} logo`} />
            <div className={styles.label}>
                <span>{name}</span>
            </div>
        </div>
    );
};

export default SkillsCard;