import React, { useState } from 'react';
import Job from './Job';
import Project from './Project';
import Fact from './Fact';
import { experiences, skills, projects, facts } from './things';
import Contact from './Contact';
import P5Sketch from './P5Sketch';

export default function LandingPage() {
  const [isPhotoOn, setIsPhotoOn] = useState(false);
  const emojis = ['👨‍💻', '🏝', '🏄', '🏖️', '⛳️', '🎸'];
  const random = Math.floor(Math.random() * 6);

  return (
    <div className='relative px-2'>
      {isPhotoOn && (
        <div
          className='absolute h-[100%]'
          onDoubleClick={() => setIsPhotoOn(false)}
        >
          <P5Sketch />
        </div>
      )}
      <div className=' md:p-10 md:w-2/3 mx-auto'>
        <h1 className='text-4xl md:text-5xl text-center mt-8 '>
          Perry von Rosenvinge
        </h1>
        <h2 className='text-2xl md:text-2xl pt-4 text-center'>
          Web Developer / Software Engineer
        </h2>
        <p className='text-2xl pt-4 text-center'>{`${emojis[random]} Los Angeles`}</p>

        <p className='text-2xl pt-10 font-bold'>EXPERIENCES</p>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {experiences.map((job, index) => {
            return (
              <Job job={job} key={index} func={() => setIsPhotoOn(true)} />
            );
          })}
        </div>
        <p className='text-2xl pt-10 font-bold'>SKILLS</p>
        <div className='m-2 py-2 md:m-4 grid grid-cols-2 lg:grid-cols-4 text-center bg-white border-2 border-black'>
          {skills.map((skill, index) => {
            return (
              <div className='m-2 md:m-4' key={index}>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
        <p className='text-2xl pt-10 font-bold'>PROJECTS</p>
        <div>
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
        <p className='text-2xl pt-10 font-bold'>THINGS YOU SHOULD KNOW</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center'>
          {facts.map((fact, index) => {
            return <Fact fact={fact} key={index} />;
          })}
        </div>
        <p className='text-2xl pt-10 font-bold'>CONTACT & MORE</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
