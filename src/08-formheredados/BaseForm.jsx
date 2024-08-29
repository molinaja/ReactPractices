import React, { useState } from 'react';

const BaseForm = ({ onSubmit, children }) => {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            name="nombre"
            type="text"
            value={formState.nombre}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </div>
      {children} {/* Esto permite que otros componentes agreguen más campos */}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default BaseForm;
