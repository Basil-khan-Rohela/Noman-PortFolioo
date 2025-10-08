import React from 'react'
import './skills.css'

const SKILLS = [
  'Adobe After Effects (motion graphics, compositing)',
  'Adobe Premiere Pro (editing)',
  'Adobe Photoshop (textures, assets)',
  'Adobe Illustrator (vector assets)',
  'Cinema 4D / Blender (3D motion / modeling)',
  '2D Animation (frame-by-frame)',
  'Character Rigging & Animation',
  'Motion Graphics',
  'Storyboarding & Animatics',
  'Compositing & VFX',
  'Rotoscoping',
  'Timing & Easing',
  'Typography for motion',
  'Color Theory & Grading',
  'Lottie / JSON animations',
  'GIF / MP4 / WebM export optimization',
  'Sound design basics & sync',
  'Social media ad animations',
  'Animation for UI/UX',
  'Asset pipeline & versioning'
]

export default function Skills(){
  return (
    <section className="skills container" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <ul className="chips" role="list">
        {SKILLS.map(s => <li key={s} className="chip">{s}</li>)}
      </ul>
    </section>
  )
}