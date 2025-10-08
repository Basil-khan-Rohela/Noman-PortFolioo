import React from 'react'
import './profile.css'
import profileVideo from '../assets/profilev.mp4'

export default function ProfileVIP(){
  return (
    <section className="profile container" aria-labelledby="profile-heading">
      <h2 id="profile-heading">Profile</h2>

      <div className="profile-card">
        <div className="photo-wrap">
          <video 
            src={profileVideo} 
            className="vip-photo"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>

        <div className="profile-meta">
          <h3>Noman Khan</h3>
          <ul>
            <li>6+ years — Motion Design & Animation</li>
            <li>Freelance & agency work: ads, UI animation, shorts</li>
            <li>Available for hire — DM or email</li>
          </ul>

          <div className="links">
            <a href="https://www.behance.net/Noman_Khan75" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://www.instagram.com/nkreativs/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  )
}
