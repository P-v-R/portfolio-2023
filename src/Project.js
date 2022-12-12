import React from "react";

export default function Project({ project, key }) {
  const { title, stack, desc, link } = project;
  return (
    <div
      className="p-4 border-2 m-4 text-black border-black bg-white grid grid-cols-3 h-36"
      key={key}
    >
      <div className="col-span-2 ">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl ">{stack}</p>
        <p className="text-lg pt-1 ">{desc}</p>
      </div>
      <div className="m-auto">
        <a
          className="hover:cursor-none test card-body border-2 border-black my-auto bg-lightGray mr-4 mx-auto py-2 px-6 transition-colors duration-300 ease-in-out hover:bg-yellow"
          href={link}
        >
          Visit
        </a>
      </div>
    </div>
  );
}
