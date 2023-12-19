import React from 'react';

export default function Fact({ fact }) {
  const { title, points } = fact;
  return (
    <div className='p-4 border-2 m-2 md:m-4 text-black border-black bg-white'>
      <div className=''>
        <p className='text-2xl font-bold pb-2'>{title}</p>
      </div>
      {points.map((point, index) => {
        return (
          <p className='py-1' key={index}>
            {point}
          </p>
        );
      })}
    </div>
  );
}
