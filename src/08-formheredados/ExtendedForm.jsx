import React, { useState } from 'react';
import BaseForm from './BaseForm';

const ExtendedForm = () => {
  const [extraFormState, setExtraFormState] = useState({
    edad: '',
  });

  const handleExtraChange = (e) => {
    setExtraFormState({
      ...extraFormState,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (formState) => {
    // Combina el estado del formulario base con el estado adicional
    const finalFormState = {
      ...formState,
      ...extraFormState,
    };
    console.log('Formulario enviado:', finalFormState);
  };

  return (
    <BaseForm onSubmit={handleSubmit}>

      <div>
        <label>
          Edad:
          <input
            name="edad"
            type="number"
            value={extraFormState.edad}
            onChange={handleExtraChange}
            
          />
        </label>
      </div>


    </BaseForm>
  );
};

export default ExtendedForm;
