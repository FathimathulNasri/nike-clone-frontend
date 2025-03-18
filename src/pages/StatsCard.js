import React from 'react';
// import './StatsCard.css';

const StatsCard = ({ title, count, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{count}</p>
    </div>
  );
};

export default StatsCard;
