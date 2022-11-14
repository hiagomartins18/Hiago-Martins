import { Header } from "../components/Header/Header";
import { Principal } from "../components/Main/Main";
import { Sobre } from "../components/Sobre/Sobre";
import { Skills } from "../components/Habilidades/Skills";

import styles from "./App.module.css";
import "./index.css"; // Global CSS


function App() {
  return (
    <div>
      <Header />
      <Principal />
      <Sobre />
      <Skills />
    </div>
  );
}
export default App;