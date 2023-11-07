import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
        <div className='cocktail-footer'>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
            saiba mais
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
