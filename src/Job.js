import React from 'react';

export default function Job({ job, func }) {
  const { title, role, desc, when, link, special } = job;
  return (
    <a
      onClick={special ? () => func() : undefined}
      href={link}
      className={`card-body hover:cursor-none p-4 border-2 my-2 m-2 md:m-4 text-black border-black bg-white self-start ${
        special ? 'hidden lg:block lg:col-span-2 hover:animate-pulse' : ''
      }`}
    >
      <div className="flex justify-between items-start gap-2">
        <p className="text-xl md:text-2xl font-bold">{title}</p>
        <p className="text-sm text-black text-right shrink-0">{when}</p>
      </div>
      <p className="text-base md:text-xl pt-1" style={{ color: '#000' }}>{role}</p>
      <p className="text-sm md:text-base pt-2" style={{ color: '#000' }}>{desc}</p>
    </a>
  );
}
