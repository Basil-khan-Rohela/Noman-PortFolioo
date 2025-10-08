import React from 'react'
import './portfolio.css'
import work1 from '../assets/work1.mp4'
import work2 from '../assets/work2.mp4'
import work3 from '../assets/work3.mp4'
import work4 from '../assets/work4.mp4'

const PROJECTS = [
  {
    id: 1,
    title: 'Brand Motion Ad',
    desc: '30s promotional animation for Brand X',
    video: work1,
    behance: 'https://www.behance.net'
  },
  {
    id: 2,
    title: 'Character Animation',
    desc: '2D animated storytelling short',
    video: work2,
    behance: 'https://www.behance.net'
  },
  {
    id: 3,
    title: 'UI Animation Concept',
    desc: 'Smooth micro-interaction design for app UI',
    video: work3,
    behance: 'https://www.behance.net'
  },
  {
    id: 4,
    title: 'Logo Reveal',
    desc: 'Stylish motion logo intro for media agency',
    video: work4,
    behance: 'https://www.behance.net'
  }
]

export default function Portfolio() {
  return (
    <section className="portfolio-section container" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">My Projects</h2>

      <div className="portfolio-grid" role="list">
        {PROJECTS.map((p) => (
          <article key={p.id} className="portfolio-card" role="listitem">
            <div className="card-thumb">
              <video
                src={p.video}
                className="video-thumb"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="thumb-overlay">
                <span>View Project</span>
              </div>
            </div>

            <div className="card-meta">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a
                href={p.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="behance-link"
              >
                View on Behance
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
