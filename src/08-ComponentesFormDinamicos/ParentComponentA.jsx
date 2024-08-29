import React, { useState } from 'react';
import DynamicForm from './DynamicForm';

function ParentComponentA() {
  const [formData] = useState({
    name: 'Alice',
    email: 'alice@example.com',
    campoBool:true,
    age: 25,
    role: ['User', 'Admin', 'Guest'],  // Campo tipo lista
  });

  const handleSubmit = async (data) => {
    try {
        console.log('form 1')
      const response = await fetch('https://api.endpointA.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Form A Submitted:', result);
    } catch (error) {
      console.error('Error submitting Form A:', error);
    }
  };

  return (
    <div>
      <h1>Form A</h1>
      <DynamicForm formData={formData} onSubmit={handleSubmit} />
    </div>
  );
}

export default ParentComponentA;
