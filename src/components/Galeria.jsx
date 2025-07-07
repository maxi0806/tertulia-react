import React from 'react'
import '../styles/galeria.css'
import { Link } from 'react-router-dom'

const imagenes = [
  'pexels-eyad-tariq-2217318-3879495.jpg',
  'imagen-cafeteria.jpg',
  'pexels-ezequiel-campos-925408-29879921.jpg',
  'pexels-kevinmenajang-982612.jpg',
  'pexels-maxim-chizhevsky-484318817-15920111.jpg',
  'pexels-nadin-sh-78971847-11214712.jpg',
  'pexels-nataliaolivera-30632228.jpg'
]

const Galeria = () => {
  return (
    <div className="galeria-body">
      <div className="volver-btn">
        <Link to="/">Volver</Link>
      </div>


      <div className="container-img">
        {imagenes.map((img, index) => (
          <div className="box-img" key={index}>
            <a href="#">
              <figure>
                <img src={`/src/assets/galeria/${img}`} alt={`img-${index}`} />
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Galeria

