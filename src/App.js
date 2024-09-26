import React from "react";
import "./App.css";

function App() {
  return (
    <header className="menu-container">
      <img src="logo.png" alt="Logo" className="menu-logo" />
      <nav className="menu-options">
        <a href="#products">Produtos</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </nav>
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
    </header>
  );
}

export default App;
