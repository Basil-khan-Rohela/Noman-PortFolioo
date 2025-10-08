import React from 'react'
import './footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p> Noman Portfolio. © {new Date().getFullYear()}</p>
        <p>
          <a href="https://www.behance.net/Noman_Khan75">Behance</a> • 
          <a href="https://www.instagram.com/nkreativs/">Instagram</a>
        </p>
        <small>✨ Crafted with passion by Basil Khan Rohela</small>
      </div>
    </footer>
  )
}
