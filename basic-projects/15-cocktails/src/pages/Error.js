import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! É Um Beco Sem Saída</h1>
        <Link to='/' className='btn btn-primary'>
          Voltar para home
        </Link>
      </div>
    </section>
  );
};

export default Error;
