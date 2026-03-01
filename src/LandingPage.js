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
    <div className="relative px-2 mb-8">
      {isPhotoOn && (
        <div
          className="absolute h-[100%]"
          onDoubleClick={() => setIsPhotoOn(false)}
        >
          <div>
            <h1 className="text-center text-xl p-2 bg-yellow">
              Double click to exit
            </h1>
          </div>
          <P5Sketch />
        </div>
      )}
      <div className=" md:p-10 md:w-2/3 mx-auto">
        <h1 className="text-4xl md:text-6xl text-center mt-8">
          <span className="font-serif name-highlight">Perry von Rosenvinge</span>
        </h1>
        <h2 className="text-xl md:text-2xl pt-5 text-center tracking-widest uppercase text-gray-500 font-light">
          Software Engineer
        </h2>
        <p className="text-base pt-3 text-center text-gray-400">{`${emojis[random]} Los Angeles`}</p>

        <p className="text-center text-base text-gray-700 pt-5 max-w-md mx-auto">
          Fullstack engineer with agency, SaaS, AI, and e-commerce experience. Team-first, always.
        </p>

        <p className="text-xl pt-12 font-bold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-yellow"></span>
          EXPERIENCES
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {experiences.map((job, index) => {
            return (
              <Job job={job} key={index} func={() => setIsPhotoOn(true)} />
            );
          })}
        </div>
        <p className="text-xl pt-12 font-bold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-yellow"></span>
          SKILLS
        </p>
        <div className="m-2 py-2 md:m-4 grid grid-cols-2 lg:grid-cols-4 text-center bg-white border-2 border-black">
          {skills.map((skill, index) => {
            return (
              <div className="m-2 md:m-4" key={index}>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
        <p className="text-xl pt-12 font-bold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-yellow"></span>
          PROJECTS
        </p>
        <div>
          {projects.map((project, index) => {
            return <Project project={project} key={index} />;
          })}
        </div>
        <p className="text-xl pt-12 font-bold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-yellow"></span>
          THINGS YOU SHOULD KNOW
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          {facts.map((fact, index) => {
            return <Fact fact={fact} key={index} />;
          })}
        </div>
        <p className="text-xl pt-12 font-bold tracking-widest flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-yellow"></span>
          CONTACT & MORE
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}
