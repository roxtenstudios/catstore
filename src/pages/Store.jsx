import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cats } from '../data';

export default function Store() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColor, setFilterColor] = useState('All');
  const [sortOrder, setSortOrder] = useState('None');

  let filteredCats = cats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesColor = filterColor === 'All' || cat.color === filterColor;
    return matchesSearch && matchesColor;
  });

  if (sortOrder === 'Price: Low to High') {
    filteredCats.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'Price: High to Low') {
    filteredCats.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="store-page" style={{backgroundColor: 'var(--color-store)', minHeight: '100vh', padding: '2rem 0'}}>
      <div className="container">
        <Link to="/" className="btn-wood" style={{marginBottom: '2rem', fontSize: '1rem', padding: '0.5rem 1rem'}}>
          &larr; Back Home
        </Link>
        
        <div className="section-header">
          <h1 className="text-large text-stroke">FULL STORE</h1>
          <p className="section-subtitle">Find your perfect furry companion</p>
        </div>

        {/* E-Com Filters */}
        <div className="filters-container">
          <input 
            type="text" 
            placeholder="Search kittens..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="filter-group">
            <select className="filter-select" value={filterColor} onChange={(e) => setFilterColor(e.target.value)}>
              <option value="All">All Colors</option>
              <option value="White">White</option>
              <option value="Ginger">Ginger</option>
              <option value="Grey">Grey</option>
            </select>
            <select className="filter-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="None">Sort By...</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Store Grid */}
        <div className="store-grid">
          {filteredCats.length === 0 ? (
            <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '3rem'}}>
              <h3 className="text-medium text-stroke">No kittens found!</h3>
            </div>
          ) : (
            filteredCats.map(cat => (
              <Link to={`/product/${cat.id}`} key={cat.id} className="store-card">
                <div className="card-image-wrapper" style={{borderColor: cat.borderColor}}>
                  <img src={cat.image} alt={cat.name} />
                </div>
                <div className="card-content">
                  <span className="card-label" style={{background: cat.labelColor, color: cat.labelColor === '#8bc34a' ? '#fff' : '#000'}}>{cat.personality}</span>
                  <h3 className="card-title">{cat.name}</h3>
                  <div style={{fontFamily: 'var(--font-heading)', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '0.5rem'}}>${cat.price}</div>
                  <div className="card-status" style={{color: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50'}}>
                    <div className="status-dot" style={{backgroundColor: cat.status === 'Reserved' ? 'var(--wood-btn)' : '#4caf50', animation: cat.status === 'Reserved' ? 'none' : 'pulse 2s infinite'}}></div>
                    {cat.status === 'Reserved' ? 'Reserved' : 'Ready to go home'}
                  </div>
                  <button className={`btn-wood full-width ${cat.status === 'Reserved' ? 'btn-disabled' : ''}`} disabled={cat.status === 'Reserved'}>
                    {cat.status === 'Reserved' ? 'RESERVED' : 'ADOPT ME'}
                  </button>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
