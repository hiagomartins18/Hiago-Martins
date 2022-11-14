import styles from "./Main.module.css";
import Typewriter from "typewriter-effect";
import { InstagramLogo, GithubLogo, LinkedinLogo } from "phosphor-react";

export function Principal() {
  return (
    <main id="#home">
      <div className={`${styles.home} ${styles.container} container`}>
        <div className={styles.homeText}>
          <h2>Seja bem vindo, me chamo</h2>
          <h1>
            <span className={styles.autotype}>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hiago Martins").pauseFor(2000).start();
                }}
              />
            </span>
          </h1>
          <h5>
            <span>Front-End</span> Developer
          </h5>
          <p>
            Desenvolvedor Júnior com foco no Front-End, <br />
            localizado em Belo Horizonte, Minas Gerais, Brasil.
          </p>

          <div className={styles.socials}>
            <a href="https://www.instagram.com/hiagopvdz/" target="_blank">
              <InstagramLogo size={32} />
            </a>
            <a href="https://github.com/hiagomartins18" target="_blank">
              <GithubLogo size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/hiago-martins-2a0294234/"
              target="_blank"
            >
              <LinkedinLogo size={32} />
            </a>
          </div>
        </div>

        <div className={styles.homeImg}></div>

        <a href="#sobre" className={styles.scrollDown}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </main>
  );
};