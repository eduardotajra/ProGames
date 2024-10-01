import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import styles from "./Navbar.module.css";
import logo from "./img/logo.png";
import lupa from "./img/lupa.png";
import carrinho from "./img/carrinho.png";
import login from "./img/login.png";
import Cadastro from "./Cadastro.js"

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    ScrollReveal().reveal(".page-header", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      reset: false,
    });
  }, []);

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <header id="page-header">
        <div className={styles.interface}>
          <div className={styles.logo}>
            <a className="logo" href="index.html">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <div className={styles.central}>
            <nav className={styles.menu.desktop}>
              <ul className={styles.menu}>
                <li>
                  <a href="#Ofertas">Ofertas</a>
                </li>
                <li>
                  <a href="#PC">PC</a>
                </li>
                <li>
                  <a href="#Xbox">Xbox</a>
                </li>
                <li>
                  <a href="#PlayStation">PlayStation</a>
                </li>
                <li>
                  <a href="#Nintendo">Nintendo</a>
                </li>
              </ul>
            </nav>
            <div className={styles.search}>
              <input type="text" id="busca" placeholder="Buscar" required />

              <a className={styles.linko} href="">
                <img
                  className={styles.lupa}
                  id="lupa"
                  src={lupa}
                  alt="Mostrar/Esconder"
                />
              </a>
            </div>
          </div>

          <div className={styles.rightNav}>
            <div className={styles.compras}>
              <a href="#CarrinhoDeCompras">
                <img id="carrinho" src={carrinho} alt="Mostrar/Esconder" />
              </a>
            </div>

            <div className={styles.loginIcone}>
              <button className={styles.loginbotao}>
                <img src={login} alt="Logo" className="navbar-logo" />{" "}
                <p> Entrar </p>
              </button>

              <div className={styles.dropdown}>
                <ul className={styles.ulDropdown}>
                  <li>
                    <button href="/signup">Criar Conta</button>
                  </li>
                  <li>
                    <button href="/login">Fazer Login</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
