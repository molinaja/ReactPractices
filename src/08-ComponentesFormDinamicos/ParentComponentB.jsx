import React, { useState } from 'react';
import DynamicForm from './DynamicForm';

function ParentComponentB() {
  const [formData] = useState({
    username: 'Bob123',
    isAdmin: true,
    signUpDate: '2024-08-20',
    status: ['Active', 'Inactive', 'Pending'],  // Campo tipo lista
  });

  const handleSubmit = async (data) => {
    try {
        console.log('form 2')

      const response = await fetch('https://api.endpointB.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Form B Submitted:', result);
    } catch (error) {
      console.error('Error submitting Form B:', error);
    }
  };

  return (
    <div>
      <h1>Form B</h1>
      <DynamicForm formData={formData} onSubmit={handleSubmit} />
    </div>
  );
}

export default ParentComponentB;
