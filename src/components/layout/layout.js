import React from "react";
import "./layout.css"
import brasil from "../../images/brasil-1.png";
import eua from "../../images/estados-unidos-1.png";
import spain from "../../images/spain-1.png";
import Header from "../header/header";

const Layout = ({ children }) => {
  
  return (
    <div className="page-wrapper">
      <Header />
      <main>
        {children }
      </main>
      <footer>
        <div className="image-container">
          <img src={brasil} alt="bandeira do brasil" />
          <img src={eua} alt="bandeira dos estados unidos" />
          <img src={spain} alt="bandeira da espanha" />
        </div>
        <p className="language">Idioma selecionado: Português</p>
      </footer>
    </div>
  );
}

export default Layout;
