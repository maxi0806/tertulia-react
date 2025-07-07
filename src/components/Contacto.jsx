import React, { useState } from 'react';
import '../styles/contacto.css';

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    alert('¡Gracias por contactarnos!');
    setForm({
      nombre: '',
      telefono: '',
      email: '',
      mensaje: ''
    });
  };

  return (
    <div className="contacto-container" id='contacto'>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="contacto-row">
          <div className="contacto-col">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="contacto-col">
            <label>Teléfono</label>
            <input
              type="text"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Tu teléfono"
              required
            />
          </div>
        </div>
        <div className="contacto-col">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Tu email"
            required
          />
        </div>
        <div className="contacto-col">
          <label>Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Escribí tu mensaje"
            required
          ></textarea>
        </div>
        <button type="submit" className="contacto-boton">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;



