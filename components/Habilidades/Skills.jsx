import styles from "./Skills.module.css";

import htmlLogo from "../../src/assets/htmlicon.svg";
import cssLogo from "../../src/assets/cssicon.svg";
import reactLogo from "../../src/assets/reacticon.svg";
import jsLogo from "../../src/assets/jsicon.svg";
import githubLogo from "../../src/assets/githubicon.svg";
import gitLogo from "../../src/assets/giticon.svg";

import { SkillItem } from "./Item/Item";

export function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={`${styles.skillsContainer} container`}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillsList}>
          <SkillItem
            name={"HTML"}
            logo={htmlLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />

          <SkillItem
            name={"CSS"}
            logo={cssLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />

          <SkillItem
            name={"JavaScript"}
            logo={jsLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />

          <SkillItem
            name={"ReactJS"}
            logo={reactLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />

          <SkillItem
            name={"Git"}
            logo={gitLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />

          <SkillItem
            name={"GitHub"}
            logo={githubLogo}
            info={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta lectus id odio tempus rhoncus. Duis volutpat elementum ornare. Nam dapibus, metus id posuere accumsan."
            }
          />
        </div>
      </div>
    </section>
  );
}
