import React from 'react';

export default function Project({ project }) {
  const { title, stack, desc, link } = project;
  return (
    <div className='card-body p-4 border-2 m-2 md:m-4 text-black border-black bg-white grid md:grid-cols-3'>
      <div className='col-span-2 '>
        <p className='text-2xl font-bold'>{title}</p>
        <p className='text-xl py-2'>{stack}</p>
        <p className='text-lg pt-1 '>{desc}</p>
      </div>
      <div className='md:m-auto py-6 '>
        <a
          className='hover:hover:cursor-none test button-body border-2 border-black my-auto bg-lightGray mr-4 mx-auto py-2 px-6 transition-colors duration-300 ease-in-out hover:bg-yellow'
          href={link}
        >
          Visit
        </a>
      </div>
    </div>
  );
}
