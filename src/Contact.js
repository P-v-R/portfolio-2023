import React from 'react';
import resume from '../src/assets/PvR_resume_26.pdf';

export default function Contact() {
  return (
    <div className='p-6 border-2 m-2 md:m-4 col-span-3 text-black border-black bg-white mt-10 flex flex-col items-center gap-3'>
      <p className='cursor-none text-xl'>perry.j.vr@gmail.com</p>
      <a
        className='cursor-none text-xl teal-link underline underline-offset-4'
        href='https://www.linkedin.com/in/perry-von-rosenvinge-65a27a89/'
      >
        Linkedin
      </a>
      <a
        className='cursor-none text-xl teal-link underline underline-offset-4'
        href='https://www.github.com/p-v-r'
      >
        Github
      </a>
      <a
        href={resume}
        download='PvR_resume_26'
        target='_blank'
        rel='noreferrer'
        className='button-body cursor-none text-xs font-bold tracking-widest uppercase border-2 border-black bg-lightGray py-2 px-8'
      >
        Download Resume
      </a>
    </div>
  );
}
