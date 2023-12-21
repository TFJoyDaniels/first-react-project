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
        <p className='name'>{props.name} en {props.country}</p>
        <p className='profession'>{props.profession} en {props.enterprise}</p>
        <p className='text'>"{props.testimony}"</p>
      </div>
    </div>
  );  
};

export default Testimonio;