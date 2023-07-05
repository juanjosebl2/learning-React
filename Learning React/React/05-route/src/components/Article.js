import React from 'react'
import { useParams } from 'react-router-dom'

export const Article = () => {

  const params = useParams();

  return (
    <div>
        <h1>Page article: {params.name} - {params.lastname} </h1>
    </div>
 )
}
