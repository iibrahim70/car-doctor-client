import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const service = useLoaderData();  
  return (
    <div>
      <h2>Book Service: {service.title}</h2>
    </div>
  );
};

export default Checkout;