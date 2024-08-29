import React, { useState } from 'react';

function DynamicForm ({ formData, onSubmit }) {
  const [formState, setFormState] = useState(formData);

  const handleChange = (e) => {
    console.log("aki cambie")
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState); // Ejecuta la función callback del componente padre
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formState).map((key) => (
        <div key={key}>
          <label>
            {key.charAt(0).toUpperCase() + key.slice(1)}:
            {Array.isArray(formState[key]) ? (
              <select name={key} value={formState[key][0]} onChange={handleChange}>
                {formState[key].map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                name={key}
                type={typeof formState[key] === 'number' ? 'number' : 'text'}
                value={formState[key]}
                onChange={handleChange}
              />
            )}
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;