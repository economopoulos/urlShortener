import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AiOutlineMenu } from "react-icons/ai"

export default function Navbar() {
  return (
    <div className="main-content">
      <nav>
        <div className="links-section">
          <img src={logo} alt="logo" />
          <ul className="nav-links">
            <li>
              <a href="#">features</a>
            </li>
            <li>
              <a href="#">pricing</a>
            </li>
            <li>
              <a href="#">resources</a>
            </li>
          </ul>
        </div>
        <div className="login-section">
          <a href="#">login</a>
          <button className="btn-type-a">
            Sign up
          </button>
        </div>
        <div className="menu">
          <AiOutlineMenu />
        </div>
      </nav>
    </div>
  )
}
