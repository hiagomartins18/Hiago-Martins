import styles from './Item.module.css';

export function SkillItem({name, level, info, logo}) {
  return (
    <div className={styles.skillItem}>
      <img src={logo} alt="" className={styles.skillImg} />
      <div className={styles.skillTexts}>
        <h2>{name}</h2>
        <p>
          {info}
        </p>
      </div>
    </div>
  );
}
