import React, { useState } from 'react'
import './header.css'
import logo from '../assets/logo.png'
import profileVideo from '../assets/profilev.mp4'

export default function Header({ onViewWork, onContact }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* ===== Brand Logo + Name ===== */}
        <div className="brand">
          <img src={logo} alt="Noman Khan Logo" className="brand-logo" />
          <div>
            <h1 className="brand-name">Noman Khan</h1>
            <p className="subtitle">Motion Designer & Animator</p>
          </div>
        </div>

        {/* ===== Navbar ===== */}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <button className="btn" onClick={onViewWork}>View Work</button>
          <a className="btn" href="mailto:replace-with-email@example.com" onClick={onContact}>Contact / DM</a>
        </nav>

        {/* ===== Mobile Menu Toggle ===== */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu Toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* ===== Hero Section ===== */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner container">

          {/* ===== Profile Video ===== */}
          <div className="profile-video-wrap">
            <video
              src={profileVideo}
              className="profile-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <h2 id="hero-heading">Noman Khan</h2>
          <p className="hero-sub">Motion Designer & Animator</p>
          <p className="hero-bio">
            🎞️ 6+ Years of turning ideas into animation. 🌍 Worked with clients across the globe. 👋 I’m Noman Khan — DM for collab or freelance work.
          </p>

          <div className="hero-ctas">
            <button onClick={onViewWork} className="cta">View Work</button>
            <a className="cta ghost" href="mailto:replace-with-email@example.com">Contact / DM</a>
          </div>

          <div className="socials" aria-hidden="false">
            <a href="https://www.behance.net/Noman_Khan75" target="_blank" rel="noopener noreferrer" aria-label="Behance">Behance</a>
            <a href="https://www.instagram.com/nkreativs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </section>
    </header>
  )
}
