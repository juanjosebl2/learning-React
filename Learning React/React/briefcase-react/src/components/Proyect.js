import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { works } from '../datas/Works';

export const Proyect = () => {

    const [proyect, setProyect] = useState({});
    const params = useParams();

    useEffect(() =>{
        let proyect = works.filter(work => work.id === params.id);
        setProyect(proyect[0]); 
    }, []);

  return (
    <div className='page page-work'>
        <h1 className='heading'>Proyect: {proyect.name}</h1>
        <div className='mask'>
            <img src={'/images/' + proyect.image + ".png"} alt='#'/>
        </div>
        <h2>{proyect.name} </h2>
        <h3>{proyect.tecnologys}</h3>
        <a href={"https://"+proyect.url} target='_blank' >Go proyect code</a>
    </div>
  )
}
