import React, { useState } from 'react';

export default function Fact({ fact, color }) {
  const { title, points } = fact;
  const [shadow, setShadow] = useState('5px 5px 0px 0px black');

  return (
    <div
      className='p-4 border-2 m-2 md:m-4 text-black border-black bg-white'
      style={{ boxShadow: shadow, transition: 'all 0.2s ease-in-out' }}
      onMouseEnter={() => setShadow(`-8px 8px 0px 0px ${color}`)}
      onMouseLeave={() => setShadow('5px 5px 0px 0px black')}
    >
      <div className=''>
        <p className='text-2xl font-bold pb-2'>{title}</p>
      </div>
      {points.map((point, index) => (
        <p className='py-1' key={index}>{point}</p>
      ))}
    </div>
  );
}
