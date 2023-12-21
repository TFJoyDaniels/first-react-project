import React from 'react';
import '../Styles/Testimony.css'

function Testimonio(props)
{
  return(
    <div className='container'>
      <img
        className='img'
        src={require(`../img/testimonio-${props.img}.png`)}
        alt='Emma img'
      />
      <div className='text-container'>
        <p className='name'>
          <strong>{props.name}</strong> en {props.country}
        </p>
        <p className='profession'>
          {props.profession} en <strong>{props.enterprise}</strong>
        </p>
        <p className='text'>
          "{props.testimony}"
        </p>
      </div>
    </div>
  );  
};

export default Testimonio;