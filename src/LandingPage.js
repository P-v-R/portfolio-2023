import React, { useState, useRef } from 'react';
import Job from './Job';
import Project from './Project';
import Fact from './Fact';
import { experiences, skills, projects, facts } from './things';
import Contact from './Contact';
import P5Sketch from './P5Sketch';

const palette = [
  { bg: '#FFD301', text: '#000' }, // Gold Yellow
  { bg: '#6FA09A', text: '#000' }, // Dusty Jade
  { bg: '#6B4E71', text: '#fff' }, // Vintage Grape
  { bg: '#3A4454', text: '#fff' }, // Slate Navy
  { bg: '#C96A42', text: '#fff' }, // Deep Terracotta
  { bg: '#7A9E76', text: '#000' }, // Muted Sage
  { bg: '#C47F7F', text: '#000' }, // Dusty Rose
  { bg: '#9B7B8A', text: '#fff' }, // Warm Mauve
];

function SkillTag({ label, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className='px-3 py-1.5 border-2 border-black text-xs font-bold tracking-widest uppercase cursor-default'
      style={{
        backgroundColor: hovered ? color.bg : '#FFD301',
        color: hovered ? color.text : '#000',
        transition: hovered
          ? 'background-color 0.3s ease, color 0.3s ease'
          : 'background-color 0.8s ease, color 0.8s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  );
}

function SectionHeader({ label }) {
  return (
    <div className='pt-14 pb-1'>
      <p className='text-xs font-bold tracking-[0.35em] text-black'>{label}</p>
    </div>
  );
}

export default function LandingPage() {
  const [isPhotoOn, setIsPhotoOn] = useState(false);
  const emojis = ['👨‍💻', '🏝', '🏄', '🏖️', '⛳️', '🎸'];
  const random = Math.floor(Math.random() * 6);
  const shuffledSkills = useRef(
    [...skills].sort(() => Math.random() - 0.5)
  ).current;

  const skillColors = useRef(
    shuffledSkills.map(
      () => palette[Math.floor(Math.random() * palette.length)]
    )
  ).current;

const factColors = useRef(
    [...palette]
      .sort(() => Math.random() - 0.5)
      .slice(0, facts.length)
      .map((c) => c.bg)
  ).current;

  return (
    <div className='relative px-2 mb-8'>
      {isPhotoOn && (
        <div
          className='absolute h-[100%]'
          onDoubleClick={() => setIsPhotoOn(false)}
        >
          <div className='fixed top-0 left-0 w-full z-50 bg-black text-yellow text-center py-4 text-lg font-bold tracking-widest uppercase animate-pulse'>
            ✕ &nbsp; Double click anywhere to exit &nbsp; ✕
          </div>
          <P5Sketch />
        </div>
      )}
      <div className='md:p-10 md:w-4/5 mx-auto'>
        {/* Hero */}
        <div className='pt-10 pb-6'>
          <h1 className='text-5xl md:text-7xl lg:text-8xl text-center leading-tight'>
            <span className='font-serif name-highlight'>
              Perry von Rosenvinge
            </span>
          </h1>
          <div className='flex items-center justify-center gap-4 mt-6'>
            <span className='text-sm tracking-[0.35em] uppercase text-gray-500 font-light'>
              Software Engineer
            </span>
            <span className='text-gray-300'>|</span>
            <span className='text-sm tracking-[0.25em] text-gray-400'>{`${emojis[random]} Los Angeles`}</span>
          </div>
          <p className='text-center text-sm text-gray-600 mt-4 max-w-sm mx-auto leading-relaxed'>
            Fullstack engineer with agency, SaaS, AI, and e-commerce experience.{' '}
            <span className="font-bold">Team-first, always.</span>
          </p>
        </div>

        <SectionHeader label='EXPERIENCES' />
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-4'>
          {experiences.map((job, index) => (
            <Job job={job} key={index} func={() => setIsPhotoOn(true)} />
          ))}
        </div>

        <SectionHeader label='SKILLS' />
        <div className='flex flex-wrap gap-2 mt-4 pb-2 mx-2 md:mx-4'>
          {shuffledSkills.map((skill, index) => (
            <SkillTag key={index} label={skill} color={skillColors[index]} />
          ))}
        </div>

        <SectionHeader label='PROJECTS' />
        <div className='mt-4'>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>

        <SectionHeader label='THINGS YOU SHOULD KNOW' />
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center mt-4'>
          {facts.map((fact, index) => (
            <Fact fact={fact} key={index} color={factColors[index]} />
          ))}
        </div>

        <SectionHeader label='CONTACT & MORE' />
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center mt-4'>
          <Contact />
        </div>
      </div>
    </div>
  );
}
