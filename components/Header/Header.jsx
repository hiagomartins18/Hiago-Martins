import styles from "./Header.module.css";
import { useState } from "react";
import { Button } from "../Button/Button";
import { List } from "phosphor-react";
import { MobileNav } from "./MobileNav.jsx";

export function Header() {

  const [fix, setFix ] = useState(false);
  function setFixed(){
    if(window.scrollY > 0){
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed)
  return (
    <header className={fix ? `${styles.sticky}` : false}>
      <div className={`${styles.nav} container`}>
        <div className={styles.logo}>
          <p className={styles.logoimg}>HM</p>
          <span className={styles.logotitle}>HMartins</span>
        </div>

        <ul className={`${styles.navlist} ${styles.normalNav}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <div className={styles.btnHead}>
          <Button
            name="Download CV"
            pdfDownload="../../src/assets/curriculo.pdf"
            download={"Currículo Hiago"}
          />
        </div>
          < MobileNav/>
      </div>
    </header>
  );
}
