import React, { useState } from 'react';

export default function Project({ project }) {
  const { title, stack, desc, link } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <div className='p-4 border-2 m-2 md:m-4 text-black border-black bg-white grid md:grid-cols-3' style={{ boxShadow: '5px 5px 0px 0px black' }}>
      <div className='col-span-2'>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-xl py-2'>{stack}</p>
        <p className='text-lg pt-1'>{desc}</p>
      </div>
      <div className='md:m-auto py-6'>
        <a
          className='hover:cursor-none button-body border-2 border-black my-auto mr-4 mx-auto py-2'
          href={link}
          style={{
            backgroundColor: hovered ? '#6FA09A' : '#F2F2F2',
            color: hovered ? '#fff' : '#000',
            boxShadow: hovered ? '-8px 8px 0px 0px black' : 'none',
            transform: hovered ? 'translate(5px, -5px)' : 'none',
            paddingLeft: hovered ? '1.75rem' : '1.5rem',
            paddingRight: hovered ? '1.75rem' : '1.5rem',
            transition: 'background-color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease, color 0.3s ease, padding 0.2s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Visit
        </a>
      </div>
    </div>
  );
}
