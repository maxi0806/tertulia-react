import React, { useState } from 'react'

const Contacto = () => {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:')
    console.log({ nombre, telefono, email, mensaje })

    // Opcional: mostrar alerta
    alert('¡Gracias por tu mensaje!')

    // Limpiar formulario
    setNombre('')
    setTelefono('')
    setEmail('')
    setMensaje('')
  }

  return (
    <section id="contacto" className="container mt-5">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div className="mb-3">
          <label>Teléfono</label>
          <input
            type="text"
            className="form-control"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Tu teléfono"
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu email"
          />
        </div>
        <div className="mb-3">
          <label>Mensaje</label>
          <textarea
            className="form-control"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            placeholder="Escribí tu mensaje"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
  )
}

export default Contacto

