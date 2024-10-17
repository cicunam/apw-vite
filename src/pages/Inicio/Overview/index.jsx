// APW
// Páginas
// Ejemplo (Overview)
// José Esteva <josesteva@cic.unam.mx>

import React from 'react';

// Librería de iconos
import Escudo from '@cicunam/sd/escudo?react';

import sprite from '@cicunam/sd/sprite';

import Bell from '@cicunam/sd/icons/bell.svg?react';

import { Icon } from '@cicunam/sd'

// import Icon from '../../../templates/Icon';



console.log('sprite', sprite);

// Componentes del sistema de diseño
// import {
//   Icon
//  } from '@cicunam/sd';

// Contexto de la aplicación
// import { Context } from '../../../index';

// Mecanismos utilizados
// import useList from '../../../has IconLocal
// Definición de la Interfaz
const Overview = () => {


  const type = 'heart';
  // Interfaz gráfica
  return (

    <div>

   
      {/* <img src={Icon} /> */}

      <Icon sprite={sprite} type="user" size="32px"/>

      <svg>
        <use href={`${sprite}#${type}`}  />
      </svg>

      <Bell />
      <Escudo />

    </div>

  );

}

export default Overview;
