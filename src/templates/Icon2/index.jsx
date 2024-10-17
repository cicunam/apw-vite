// SD
// Átomos
// Icon (Ícono)

import React from 'react';
import PropTypes from 'prop-types';

// Estilos
import style from './style.module.css';


// Definición del componente
const Icon = props => {

  const {sprite, type = 'command', color = 'black', size = 'medium', ...other} = props;

  return (
    <svg className={`${style.icon} ${style[color]} ${style[size]}`} {...other}>
      <use href={`${sprite}#${type}`}  />
    </svg>
  );
}

// Parámetros
Icon.propTypes = {
  sprite:PropTypes.any,
  type: PropTypes.string,
  color: PropTypes.string,  //.string, //.oneOf(['black','neutral','white']),
  size: PropTypes.string,   //.string, //.oneOf(['huge','large','medium','small','tiny'])
}

export default Icon;
