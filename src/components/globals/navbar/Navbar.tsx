import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>Navbar
      <ul>
        <li>
        <Link to='test/simple-counter'>TestCounter</Link>  
        </li>
      </ul>
    </div>
  )
}
