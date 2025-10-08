import React, { useRef, useEffect } from "react";
import "./about.css";
import aboutVideo from "../assets/Noman-About.mp4"; 

export default function About({ onBadge52 = () => {}, onBadge76 = () => {} }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

   
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title">
        About Me
      </h2>

      <div className="about-content">
        {/* ==== VIDEO CARD ==== */}
        <div className="video-card" role="region" aria-label="About Video">
          <video
            ref={videoRef}
            className="about-video"
            src={aboutVideo} // ✅ imported video use ho rahi hai
            loop
            muted
            playsInline
            preload="auto"
          />

          {/* Floating badges (optional) */}
          <div className="video-badges">
            <button className="badge" onClick={onBadge52}>52</button>
            <button className="badge" onClick={onBadge76}>76</button>
          </div>
        </div>

        {/* ==== ABOUT TEXT ==== */}
        <div className="about-text">
          <p>🎞️ 6+ Years of transforming concepts into captivating motion.</p>
          <p>🌍 Collaborated with clients across 🇹🇿 🇺🇸 🇵🇰 🇦🇺 🇦🇪 🇩🇪 🇸🇦 and beyond.</p>
          <p>
            👋 I’m <strong>Noman Khan</strong> — a Motion Designer & Animator.
            Available for freelance & collaborations. Reach out via{" "}
            <a href="mailto:contact@nomanportfolio.com">
              contact@nomanportfolio.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
