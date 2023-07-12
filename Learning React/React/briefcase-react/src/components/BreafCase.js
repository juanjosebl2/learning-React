import React from 'react';
import { works } from '../datas/Works';
import { Link } from 'react-router-dom';

export const BreafCase = () => {
  return (
    <div className='page'>
      <h1 className='heading'>BreafCase</h1>
      <section className='works'>
        {
          works.map(work => {
            return (
              <article key={work.id} className='work-item'>
                <div className='mask'>
                  <img src={'/images/' + work.image + ".png"} alt='#'/>
                </div>
                <h2><Link to={"/proyect/" + work.id} > {work.name} </Link></h2>
                <h3>{work.tecnologys}</h3>
              </article>
            );

          })
        }
      </section>
    </div>
  )
}
