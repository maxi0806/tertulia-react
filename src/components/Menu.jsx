function Menu() {
  return (
    <div id="menu">
      <h1 className="titulo-menu">Menu</h1>
      <main className="cards-container">

        <div className="card">
          <img src="/img/cafe-con-medialunas.jpg" alt="Café y medialunas" />
          <h2>Desayuno Clásico</h2>
          <p>Incluye café con leche y medialunas recién horneadas.</p>
          <button>Ver más</button>
        </div>

        <div className="card">
          <img src="/img/jugo-con-tostado.jpg" alt="Jugo y tostado" />
          <h2>Combo Saludable</h2>
          <p>Jugo natural con tostado de pan integral y queso fresco.</p>
          <button>Ver más</button>
        </div>

        <div className="card">
          <img src="/img/yogur-frutas-del-bosque.jpg" alt="Yogur con frutas" />
          <h2>Desayuno Dulce</h2>
          <p>Yogur con frutas de estación, granola casera y un toque de miel natural.</p>
          <button>Ver más</button>
        </div>

        <div className="card">
          <img src="/img/dasdaasdasda.jpg" alt="Sándwich clásico" />
          <h2>Sándwich Clásico</h2>
          <p>Pan artesanal con jamón cocido, queso, acompañado con bebida.</p>
          <button>Ver más</button>
        </div>

      </main>
    </div>
  )
}

export default Menu

