import React from "react";

export default function Job({ job, key }) {
  const { title, role, desc, when, link } = job;
  return (
    <a
      href={link}
      className="hover:cursor-none p-4 border-2 m-4 text-black border-black bg-white card-body hover:bg-gradient-to-tr from-yellow via-yellow to-amber-300"
      key={key}
    >
      <div className="flex justify-between">
        <p className="text-2xl font-bold">{title}</p>
        <p className=" font-lightGray my-auto">{when}</p>
      </div>
      <p className="text-xl ">{role}</p>
      <p className="pt-4">{desc}</p>
    </a>
  );
}
