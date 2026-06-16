import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { cats } from '../data';

export default function Product() {
  const { id } = useParams();
  const cat = cats.find(c => c.id === id);

  if (!cat) {
    return (
      <div style={{textAlign: 'center', padding: '5rem', backgroundColor: 'var(--color-hero)', minHeight: '100vh'}}>
        <h1 className="text-large text-stroke">KITTEN NOT FOUND</h1>
        <Link to="/store" className="btn-wood" style={{marginTop: '2rem'}}>Back to Store</Link>
      </div>
    );
  }

  return (
    <div className="product-page" style={{backgroundColor: 'var(--color-hero)', minHeight: '100vh', paddingBottom: '100px'}}>
      {/* Header */}
      <div style={{padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Link to="/store" className="btn-wood" style={{fontSize: '1rem', padding: '0.5rem 1rem'}}>&larr; Back</Link>
      </div>

      <div className="container product-container">
        {/* Product Image */}
        <div className="product-image-wrapper" style={{borderColor: cat.borderColor, backgroundColor: cat.color === 'White' ? '#ffeb3b' : 'var(--color-store)'}}>
          <img src={cat.image} alt={cat.name} className="product-image" />
        </div>

        {/* Product Details */}
        <div className="product-details">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <div>
              <h1 className="text-large text-stroke" style={{marginBottom: '0.5rem'}}>{cat.name}</h1>
              <span className="card-label" style={{background: cat.labelColor, color: cat.labelColor === '#8bc34a' ? '#fff' : '#000', fontSize: '1.1rem'}}>{cat.personality}</span>
            </div>
            <div style={{fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', fontSize: '2rem'}}>
              ${cat.price}
            </div>
          </div>

          <div className="card-status" style={{color: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50', justifyContent: 'flex-start', marginTop: '1.5rem', fontSize: '1.2rem'}}>
            <div className="status-dot" style={{backgroundColor: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50', animation: cat.status === 'Reserved' ? 'none' : 'pulse 2s infinite'}}></div>
            {cat.status === 'Reserved' ? 'Reserved' : 'Ready to go home'}
          </div>

          <div className="product-description" style={{marginTop: '2rem'}}>
            <h3 style={{fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1rem'}}>About {cat.name}</h3>
            <p style={{fontSize: '1.1rem', lineHeight: '1.8', fontWeight: '700'}}>{cat.description}</p>
            
            <h3 style={{fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--text-secondary)', marginTop: '2rem', marginBottom: '1rem'}}>Included</h3>
            <ul style={{fontSize: '1.1rem', fontWeight: '800', lineHeight: '1.6'}}>
              <li>✔️ Vet Checked & Vaccinated</li>
              <li>✔️ Microchipped</li>
              <li>✔️ 1 Month Premium Food</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="sticky-cta">
        <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
          <button className={`btn-wood full-width ${cat.status === 'Reserved' ? 'btn-disabled' : ''}`} style={{fontSize: '1.5rem', padding: '1.5rem', maxWidth: '500px'}} disabled={cat.status === 'Reserved'}>
            {cat.status === 'Reserved' ? 'RESERVED' : `ADOPT ${cat.name} ($${cat.price})`}
          </button>
        </div>
      </div>
    </div>
  );
}
