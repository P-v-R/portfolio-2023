import React from 'react';

export default function Job({ job, func }) {
  const { title, role, desc, when, link, special } = job;
  return (
    <>
      <a
        onClick={() => func()}
        href={link}
        className={`hidden card-bp:block hover:cursor-none p-4 border-2 my-2 m-2 card-bp:m-4 text-black border-black bg-white card-body hover:bg-gradient-to-tr from-yellow via-yellow to-amber-300 card-bp:h-52 ${
          special ? 'col-span-2 hover:animate-pulse' : ''
        }`}
      >
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{title}</p>
          <p className=" font-lightGray my-auto">{when}</p>
        </div>
        <p className="text-xl ">{role}</p>
        <p className="pt-2">{desc}</p>
      </a>
      <a
        onClick={() => func()}
        href={link}
        className={`card-body card-bp:hidden hover:cursor-none p-4 border-2 my-2 m-2 card-bp:m-4 text-black border-black bg-white card-bp:h-52 ${
          special ? 'col-span-2 hover:animate-pulse' : ''
        }`}
      >
        <div className="flex justify-between">
          <p className="text-2xl font-bold">{title}</p>
          <p className=" font-lightGray my-auto">{when}</p>
        </div>
        <p className="text-xl ">{role}</p>
        <p className="pt-2">{desc}</p>
      </a>
    </>
  );
}
