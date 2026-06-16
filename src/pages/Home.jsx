import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cats } from '../data';

// Using the images
const heroCatCenter = "/images/hero_cat_center_1781632442304.png";
const heroCatLeft = "/images/hero_cat_left_1781632453260.png";
const heroCatRight = "/images/hero_cat_right_1781632465440.png";

export default function Home() {
  const featuredCats = cats.filter(c => c.featured);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      
      {/* HEADER BAR & MENU */}
      <header className="header-bar">
        <div className="header-logo" style={{color: isMenuOpen ? '#000' : 'var(--text-primary)'}}>HPC</div>
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{color: isMenuOpen ? '#000' : 'var(--text-secondary)'}}>
          {isMenuOpen ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </header>

      {/* OVERLAY MENU */}
      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="overlay-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/store" className="overlay-link" onClick={() => setIsMenuOpen(false)}>Store</Link>
        <a href="#process" className="overlay-link" onClick={() => setIsMenuOpen(false)}>Process</a>
        <a href="#contact" className="overlay-link" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>

      {/* CLEAN HERO SECTION */}
      <section className="hero">
        <div className="container">
          
          <div className="hero-badge">Available Now!</div>
          
          <h1 className="hero-title">
            HYDERABAD<br/>PERSIAN CATS
          </h1>
          
          <p className="hero-subtitle">
            Playful Persian Kittens offering trusted companionship and endless joy.
          </p>
          
          <div className="hero-cta-container">
            <Link to="/store" className="btn-wood" style={{fontSize: '1.2rem', padding: '1.2rem 2.5rem'}}>ADOPT A KITTEN</Link>
          </div>
        </div>

        <div className="hero-cats-container">
          <img src={heroCatLeft} alt="Ginger Cat" className="hero-cat left" />
          <img src={heroCatCenter} alt="White Cat" className="hero-cat center" />
          <img src={heroCatRight} alt="Grey Cat" className="hero-cat right" />
        </div>
        
        {/* WAVE: Hero (cream) -> Store (yellow) */}
        <div className="wave-divider wave-hero">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--color-store)" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,80C960,85,1056,75,1152,58.7C1248,43,1344,21,1392,10.7L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 1. STORE SECTION - Left Aligned + Swipe */}
      <section id="store" className="store-section section-padded">
        <div className="container">
          <div className="header-left-swipe">
            <h2 className="text-stroke">AVAILABLE<br/>KITTENS</h2>
            <div className="swipe-hint">Swipe ➔</div>
          </div>
        </div>
          
        <div className="horizontal-scroll-container">
          {featuredCats.map(cat => (
            <Link to={`/product/${cat.id}`} key={cat.id} className="store-card horizontal-scroll-card">
              <div className="card-image-wrapper" style={{borderBottomColor: cat.borderColor, backgroundColor: cat.color === 'White' ? '#ffeb3b' : 'var(--color-hero)'}}>
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className="card-content">
                <span className="card-label" style={{background: cat.labelColor, color: cat.labelColor === '#8bc34a' ? '#fff' : '#000'}}>{cat.personality}</span>
                <h3 className="card-title" style={{fontSize: '1.5rem'}}>{cat.name} - ${cat.price}</h3>
                <div className="card-status" style={{color: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50', fontSize: '0.9rem'}}>
                  <div className="status-dot" style={{backgroundColor: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50', animation: cat.status === 'Reserved' ? 'none' : 'pulse 2s infinite'}}></div>
                  {cat.status === 'Reserved' ? 'Reserved' : 'Ready to go home'}
                </div>
                <button className={`btn-wood full-width ${cat.status === 'Reserved' ? 'btn-disabled' : ''}`} disabled={cat.status === 'Reserved'}>
                  {cat.status === 'Reserved' ? 'RESERVED' : 'ADOPT ME'}
                </button>
              </div>
            </Link>
          ))}

          <Link to="/store" className="store-card horizontal-scroll-card cta-card">
            <div className="cta-card-content">
              <div className="paw-icon" style={{fontSize: '4rem'}}>🐾</div>
              <h3 className="text-large text-stroke" style={{color: '#fff', marginBottom: '1rem'}}>VIEW ALL</h3>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem'}}>See all our fluffy friends!</p>
              <div className="btn-wood">BROWSE STORE</div>
            </div>
          </Link>
        </div>

        {/* WAVE: Store (yellow) -> Process (blue) */}
        <div className="wave-divider wave-store">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--color-process)" d="M0,0L48,16C96,32,192,64,288,69.3C384,75,480,53,576,42.7C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 2. HOW IT WORKS SECTION - Zigzag Timeline */}
      <section id="process" className="process-section section-padded">
        <div className="container">
          <h2 className="text-large text-stroke" style={{textAlign: 'left', marginBottom: '0.5rem'}}>THE PROCESS</h2>
          <p className="section-subtitle" style={{textAlign: 'left', margin: 0}}>3 steps to furry happiness</p>

          <div className="zigzag-timeline">
            <div className="zigzag-item">
              <div className="zigzag-number">1</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Choose</h3>
              <p style={{fontWeight: 700}}>Find the perfect kitten that matches your family's personality.</p>
            </div>
            <div className="zigzag-item">
              <div className="zigzag-number">2</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Reserve</h3>
              <p style={{fontWeight: 700}}>Place a small deposit to secure your fluffy new best friend.</p>
            </div>
            <div className="zigzag-item">
              <div className="zigzag-number">3</div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem'}}>Cuddle</h3>
              <p style={{fontWeight: 700}}>Take them home and enjoy a lifetime of purrs and cuddles!</p>
            </div>
          </div>
        </div>

        {/* WAVE: Process (blue) -> Packages (pink) */}
        <div className="wave-divider wave-process">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
             <path fill="var(--color-packages)" d="M0,96L60,85.3C120,75,240,53,360,58.7C480,64,600,96,720,101.3C840,107,960,85,1080,69.3C1200,53,1320,43,1380,37.3L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 3. PACKAGES SECTION - Big Ticket */}
      <section id="packages" className="packages-section section-padded">
        <div className="container">
          <div className="ticket-box">
            <h2 className="ticket-header">ROYAL PACKAGE</h2>
            <ul style={{textAlign: 'center', display: 'block', fontWeight: 800, fontSize: '1.2rem', lineHeight: 2, padding: 0, listStyle: 'none'}}>
              <li>✔️ Fully Vet Checked</li>
              <li>✔️ Core Vaccinations</li>
              <li>✔️ Microchipped</li>
              <li>✔️ 1 Month Premium Food</li>
              <li>✔️ Favorite Toy & Blanket</li>
            </ul>
            <div style={{textAlign: 'center', marginTop: '1.5rem'}}>
              <div className="hero-badge" style={{position: 'relative', display: 'inline-block'}}>Included free!</div>
            </div>
          </div>
        </div>

        {/* WAVE: Packages (pink) -> Tips (Coral) */}
        <div className="wave-divider wave-packages">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#ffccbc" d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,37.3C672,32,768,64,864,80C960,96,1056,96,1152,80C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 4. TIPS SECTION - Asymmetrical Layout */}
      <section className="tips-section section-padded">
        <div className="container">
          <div className="asym-layout">
            <h2 className="vertical-title">CAT CARE 101</h2>
            <div className="asym-content">
              <div className="step-card" style={{borderColor: 'var(--text-primary)', margin: 0, textAlign: 'left'}}>
                <div style={{fontSize: '2.5rem'}}>🧶</div>
                <h3 style={{fontSize: '1.3rem'}}>Play Daily</h3>
                <p style={{fontWeight: 700}}>Interactive toys keep them healthy!</p>
              </div>
              <div className="step-card" style={{borderColor: 'var(--accent-blue)', margin: 0, textAlign: 'left'}}>
                <div style={{fontSize: '2.5rem'}}>🧹</div>
                <h3 style={{fontSize: '1.3rem'}}>Grooming</h3>
                <p style={{fontWeight: 700}}>Brush their coat 3 times a week.</p>
              </div>
            </div>
          </div>
        </div>

        {/* WAVE: Tips (Coral) -> Schedule (Green) */}
        <div className="wave-divider" style={{background: '#ffccbc'}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#dcedc8" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 5. SCHEDULE SECTION - Polaroid Layout */}
      <section className="schedule-section section-padded">
        <div className="container">
          <div className="polaroid-box">
            <h2 className="polaroid-title">Book a Playdate!</h2>
            <input type="date" className="input-field" />
            <select className="input-field">
              <option>Morning (10am - 12pm)</option>
              <option>Afternoon (1pm - 4pm)</option>
            </select>
            <button className="btn-wood full-width">SCHEDULE VISIT</button>
          </div>
        </div>

        {/* WAVE: Schedule (Green) -> FAQ (Pink) */}
        <div className="wave-divider" style={{background: '#dcedc8'}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#f8bbd0" d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,37.3C672,32,768,64,864,80C960,96,1056,96,1152,80C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 6. FAQ SECTION - Speech Bubble Layout */}
      <section className="faq-section section-padded">
        <div className="container">
          <div className="speech-bubble">
            <h3 style={{fontSize: '1.4rem', color: 'var(--text-secondary)'}}>Do you ship kittens?</h3>
            <p style={{fontWeight: 700, marginBottom: '1.5rem'}}>No, we require all families to pick up their kitten in person!</p>
            
            <h3 style={{fontSize: '1.4rem', color: 'var(--text-secondary)'}}>Are they litter trained?</h3>
            <p style={{fontWeight: 700, margin: 0}}>Yes! All our kittens are fully litter trained by the time they go home.</p>
          </div>
        </div>

        {/* WAVE: FAQ (Pink) -> Reviews (Cream orange) */}
        <div className="wave-divider" style={{background: '#f8bbd0'}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--color-reviews)" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section id="reviews" className="reviews-section section-padded">
        <div className="container">
          <div className="section-header">
            <h2 className="text-large text-stroke">HAPPY FAMILIES</h2>
            <p className="section-subtitle">Purrs from our amazing parents</p>
          </div>

          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"Snowball is the sweetest kitten ever! She settled into our home instantly."</p>
              <p className="review-author">- Sarah T.</p>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="review-text">"You can really tell these kittens are raised with so much love."</p>
              <p className="review-author">- Mike & Jenny</p>
            </div>
          </div>
        </div>

        {/* WAVE: Reviews (cream orange) -> Contact (cyan) */}
        <div className="wave-divider wave-reviews">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#b2ebf2" d="M0,32L48,48C96,64,192,96,288,90.7C384,85,480,43,576,37.3C672,32,768,64,864,80C960,96,1056,96,1152,80C1248,64,1344,32,1392,16L1440,0L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* 7. CONTACT SECTION - Airmail Envelope */}
      <section id="contact" className="contact-section section-padded">
        <div className="container">
          <div className="airmail-box">
            <h2 className="airmail-header">Drop us a purr!</h2>
            <input type="text" placeholder="Your Name" className="input-field" />
            <input type="email" placeholder="Your Email" className="input-field" />
            <textarea placeholder="Your Question..." className="input-field" style={{height: '100px'}}></textarea>
            <button type="button" className="btn-wood full-width">SEND MESSAGE</button>
          </div>
        </div>

        {/* WAVE: Contact (cyan) -> Footer (wood) */}
        <div className="wave-divider" style={{background: '#b2ebf2'}}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="var(--color-footer)" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <h2 className="text-medium text-stroke">JOIN OUR FAMILY!</h2>
          <div className="footer-nav">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="copyright">
            © 2026 Hyderabad Persian Cats. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
