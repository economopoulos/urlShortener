import React from 'react'
import './Header.css'
import image from '../../images/illustration-working.svg'

export default function Header() {
  return (
    <div className="header">
      <section className="cta-section">
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
        <a href="#" className='btn-type-a big'>get started</a>
      </section>
      <section className="img-section">
        <img src={image} alt="illustration" />
      </section>
    </div>
  )
}