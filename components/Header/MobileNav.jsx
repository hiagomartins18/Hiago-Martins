import classes from "./Header.module.css";
import { List } from "phosphor-react";
import { useState } from "react";
import { Button } from "../Button/Button";
import { X } from "phosphor-react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const hamburguerIcon =
    <List
      size={40}
      className={classes.Hamburguer}
      onClick={() => setOpen(true)}
      color={'green'}
    />;

  const closeIcon = 
    <X
      size={40}
      className={classes.Hamburguer}
      onClick={() => setOpen(false)}
      color={'green'}
    />;
  return (
    <nav className={classes.MobileNavigation}>
      {open ? closeIcon : hamburguerIcon}
      {open && (
        <>
        <div className={classes.teste}>
            <ul className={`${classes.navlist} ${classes.mobNav}`}>
              <li onClick={() => setOpen(false)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#sobre">Sobre</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#skills">Habilidades</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#projects">Projetos</a>
              </li>
              <li onClick={() => setOpen(false)}>
                <a href="#contact">Contato</a>
              </li>
              <li>
                <Button
                  name="Download CV"
                  pdfDownload="../../src/assets/curriculo.pdf"
                  download={"Currículo Hiago"}
                />
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}
