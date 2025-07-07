

function Contacto() {
  return (
    <section className="formulario-contenedor" id="contacto">
      <h1 className="titulo-contacto">Contacto</h1>

      <div className="input-group">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" name="name" placeholder="Nombre" />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Teléfono" />
          </div>

          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
          </div>

          <div className="col-12">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" name="message" rows="5" placeholder="Mensaje"></textarea>
          </div>

          <div className="col-12 text-center">
            <button type="submit" className="btn boton-enviar">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contacto
