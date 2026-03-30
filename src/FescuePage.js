import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FescuePage() {
  const [backHovered, setBackHovered] = useState(false);
  const [ghHovered, setGhHovered] = useState(false);

  const btnStyle = (hovered) => ({
    backgroundColor: hovered ? '#6FA09A' : '#F2F2F2',
    color: hovered ? '#fff' : '#000',
    boxShadow: hovered ? '-8px 8px 0px 0px black' : '5px 5px 0px 0px black',
    transform: hovered ? 'translate(5px, -5px)' : 'none',
    transition: 'all 0.2s ease',
    cursor: 'none',
  });

  return (
    <div
      style={{ backgroundColor: '#FEF1E5', minHeight: '100vh', color: '#000' }}
    >
      {/* Nav */}
      <div className='flex items-center justify-between px-6 md:px-16 py-4 border-b-2 border-black'>
        <Link
          to='/'
          className='hover:cursor-none text-xs font-bold tracking-widest uppercase border-2 border-black px-4 py-2'
          style={btnStyle(backHovered)}
          onMouseEnter={() => setBackHovered(true)}
          onMouseLeave={() => setBackHovered(false)}
        >
          ← Back
        </Link>
        <a
          href='https://github.com/P-v-R/fescue-web'
          target='_blank'
          rel='noreferrer'
          className='hover:cursor-none text-xs font-bold tracking-widest uppercase border-2 border-black px-4 py-2'
          style={btnStyle(ghHovered)}
          onMouseEnter={() => setGhHovered(true)}
          onMouseLeave={() => setGhHovered(false)}
        >
          GitHub ↗
        </a>
      </div>

      <div className='md:w-4/5 mx-auto px-4 pb-20'>
        {/* Title */}
        <div className='pt-12 pb-10 text-center'>
          <p className='text-xs font-bold tracking-[0.35em] uppercase text-gray-400 mb-3'>
            Freelance Project
          </p>
          <h1 className='text-5xl md:text-7xl font-serif leading-tight'>
            <span className='name-highlight'>Fescue Golf Club</span>
          </h1>
          <p className='mt-4 text-gray-500 tracking-wide text-lg'>
            Marketing Website &amp; Member Portal
          </p>
          <div className='flex justify-center gap-2 mt-4 flex-wrap'>
            {[
              'Next.js 15',
              'Supabase',
              'Sanity CMS',
              'Shopify',
              'Resend',
              'Railway',
            ].map((tag) => (
              <span
                key={tag}
                className='text-xs font-bold tracking-widest uppercase border-2 border-black px-3 py-1 bg-white'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* GIF — the main event */}
        <div
          className='border-2 border-black mb-12'
          style={{ boxShadow: '8px 8px 0px 0px black' }}
        >
          <img
            src='/fescue-demo.gif'
            alt='Fescue Golf Club walkthrough'
            className='w-full block'
          />
        </div>

        {/* Description */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div
            className='md:col-span-2 p-6 border-2 border-black bg-white'
            style={{ boxShadow: '5px 5px 0px 0px black', color: '#000' }}
          >
            <p className='text-xs font-bold tracking-[0.35em] uppercase mb-3'>
              About the Project
            </p>
            <p className='text-black leading-relaxed'>
              A production-grade platform for Fescue, a private golf simulator
              club. Members get an invite-only portal with a real-time bay
              reservation system, a Sanity-powered bulletin board and events
              calendar, and a member directory — all backed by Supabase with
              row-level security. Admins have a full dashboard: member
              management, booking on behalf of members, and a membership
              pipeline that fires automated intro emails via Resend. The public
              site, a Shopify merch store, and a tour request flow round it out.
              Deployed on Railway with a fully automated CI/CD pipeline —
              merging a release PR tags the version, runs production migrations,
              and ships to{' '}
              <a
                href='https://fescuegolf.com'
                target='_blank'
                rel='noreferrer'
                className='font-bold underline'
              >
                fescuegolf.com
              </a>{' '}
              automatically.
            </p>
          </div>
          <div
            className='p-6 border-2 border-black bg-white'
            style={{ boxShadow: '5px 5px 0px 0px black', color: '#000' }}
          >
            <p className='text-xs font-bold tracking-[0.35em] uppercase mb-3'>
              What's Inside
            </p>
            <ul className='text-black leading-loose list-disc list-inside'>
              <li>Invite-only member auth</li>
              <li>Real-time bay reservations</li>
              <li>Sanity CMS content</li>
              <li>Shopify merch store</li>
              <li>Automated emails (Resend)</li>
              <li>Admin dashboard</li>
              <li>Automated CI/CD pipeline</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
