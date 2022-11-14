import styles from "./Sobre.module.css";
import { Button } from "../Button/Button";

export function Sobre() {
  return (
    <section className={`${styles.section}`} id="sobre">
      <div className={`${styles.container} container`}>
        <div className={styles.sectionTitle}>
          <h2>Sobre Mim</h2>
          <span>Introdução</span>
        </div>

        <div className={styles.sectionInfo}>
          <div className={styles.infoImg}></div>

          <div className={styles.infoData}>
            <p>
              Meu nome é Hiago Martins Silva, tenho 20 anos, e vivo atualmente
              em Belo Horizonte/MG. <br /> Comecei a estudar e viver o mundo da
              programação em janeiro de 2022 por conta própria. Minha principal
              meta é conseguir ser um desenvolvedor FullStack, mas com ênfase no
              FrontEnd.
            </p>

            <Button
              pdfDownload={"#contact"}
              name={"Contato"}
              download={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
