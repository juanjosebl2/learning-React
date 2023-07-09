import React from 'react'
import {Link} from 'react-router-dom';

export const Error = () => {
  return (
    <div>
        <h1>Page not found ERROR 404</h1>
        <Link to="/home" > Go back</Link>
    </div>
  )
}
