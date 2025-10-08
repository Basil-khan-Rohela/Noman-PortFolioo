import React, { useState } from 'react'
import './contact.css'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const onChange = e => setForm({...form, [e.target.name]: e.target.value})
  const onSubmit = e => {
    e.preventDefault()
    // mailto fallback - keeps everything client-side
    const mail = `mailto:replace-with-email@example.com?subject=${encodeURIComponent('Portfolio contact from ' + form.name)}&body=${encodeURIComponent(form.message + '\n\n' + form.email)}`
    window.location.href = mail
  }

  return (
    <section className="contact container" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>DM or email for collaborations and freelance work.</p>

      <form onSubmit={onSubmit} className="contact-form" aria-label="Contact form">
        <label>
          <span className="visually-hidden">Name</span>
          <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required />
        </label>

        <label>
          <span className="visually-hidden">Email</span>
          <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Your email" required />
        </label>

        <label>
          <span className="visually-hidden">Message</span>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Your message" required />
        </label>

        <button type="submit" className="btn">Send</button>
      </form>
    </section>
  )
}