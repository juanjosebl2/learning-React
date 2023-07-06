import React from 'react'
import { Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
      <div>
        <h1>Panel Control</h1>
        <nav>
          <ul>
            <li><a href="/panel/home">Home</a></li>
            <li><a href="/panel/create-article">About Us</a></li>
            <li><a href="/panel/management-user">Services</a></li>

          </ul>
        </nav>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>

  )
}
