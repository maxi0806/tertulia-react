import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="hero">
      <div className="overlay"></div>
      <div className="contenido-centrado">
        <h1 className="titulo">Tertulia</h1>
        <p>Mmm tomamos un café? Ya!</p>
        <p>Un café acogedor donde cada sorbo invita a la charla y al descanso.</p>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#contacto">Contacto</a>
          <Link to="/galeria">Galería</Link>
        </nav>


      </div>
    </header>
  )
}

export default Header

