import React from 'react';
import resume from '../src/assets/pvr_resume-24.pdf';

export default function Contact() {
  return (
    <div className='p-4 border-2 m-2 md:m-4 col-span-3 text-black border-black bg-white mt-10 flex flex-col'>
      <p className=' cursor-none text-xl py-2'>me@perryvon.dev</p>
      <a
        href={resume}
        download='pvr_resume_24'
        target='_blank'
        rel='noreferrer'
        className='special w-fit mx-auto cursor-none text-xl p-2 hover:font-bold active:bg-yellow'
      >
        Download Resume
      </a>
      <a
        className='cursor-none text-xl py-2 special-link'
        href='https://www.linkedin.com/in/perry-von-rosenvinge-65a27a89/'
      >
        Linkedin
      </a>
      <a
        className='cursor-none text-xl py-2 special-link'
        href='https://www.github.com/p-v-r'
      >
        Github
      </a>
    </div>
  );
}
