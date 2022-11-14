import styles from "./Button.module.css";

export function Button({ name, pdfDownload, download, color }) {

  return (
    <a href={pdfDownload} download={download}>
      <button className={styles.btn}>
        <span>{name}</span>
      </button>
    </a>
  );
}
