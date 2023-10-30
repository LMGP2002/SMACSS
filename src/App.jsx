import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <main className="main">
      <header className="header">
        <h1 className="titulo">Arquitectura SMACSS</h1>
      </header>
      <nav className="nav">
        <ul className="menu">
          <li className="menu__items"><a>Home</a></li>
          <li className="menu__items"><a>Contact</a></li>
          <li className="menu__items"><a>About</a></li>
        </ul>
      </nav>
      <section className="section">
        <h2 className="subtitulo">Componentes</h2>
        <img src="https://miro.medium.com/v2/resize:fit:1000/1*EqNOOn4VG-c6dvMIEZGTRA.png" alt="Componentes de SMACSS" />
      </section>
      <footer className="footer"><h3>@SMACSS</h3></footer>
    </main>
    </>
  );
}

export default App;
