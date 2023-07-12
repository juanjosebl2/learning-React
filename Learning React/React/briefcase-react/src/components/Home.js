import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Hola soy Juan y realizo proyecto de programacion para aprender</h1>
      <h2>
        Te ayudo a realizar una pagina web desde 0 &nbsp;
        <Link>Contacta conmigo</Link>
      </h2>

      <section className='lasts-works'>
        <h2>Mis proyectos</h2>
        <p>Estos son algunos proyectos</p>
        <div className='works'>

        </div>
      </section>

    </div>
  )
}
