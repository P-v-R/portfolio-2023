import React from "react";
import Job from "./Job";
import Project from "./Project";
import Fact from "./Fact";

export default function LandingPage() {
  const skills = [
    "TypeScript",
    "React",
    "Elixir/Phoenix",
    "Python",
    "UI/UX",
    "Node",
    "React-Native",
    "Vue",
    "NextJs",
    "SQL",
    "GraphQL",
    "MacOs",
    "Python",
    "Shopify",
    "Django",
    "Android",
  ];

  const projects = [
    {
      title: "Moveprice 📦",
      stack: "Elixir / Phoenix",
      desc: "Moving made simple! Full stack web application.",
      link: "https://moveprice.com",
    },
    {
      title: "Radix Wallet 🏦",
      stack: "Vue / Web3",
      desc: "Store, stake, send, and receive RADIX tokens",
      link: "https://www.radixdlt.com/",
    },
    {
      title: "Moveprice 📦",
      stack: "Elixir / Phoenix",
      desc: "Moving made simple! Full stack web application.",
      link: "https://moveprice.com",
    },
  ];

  const experiences = [
    {
      title: "Township",
      role: "L2 software engineer",
      desc: "here is the description of what I did at township, keep it short and simple",
      when: "2020 - Present",
      link: "https://www.township.agency/",
    },
    {
      title: "Freelance",
      role: "Web Developer",
      desc: "Shopify, React, open source, custom portfolios, web design",
      when: "2020 - Present",
      link: "",
    },
    {
      title: "Marin Software",
      role: "Software Engineer Intern",
      desc: "Angular legacy app, refactoring codebase to angular 3",
      when: "2020",
      link: "https://www.marinsoftware.com/",
    },
    {
      title: "Life",
      role: "Photography, Music, Food",
      desc: "A Few of my favorite things!",
      when: "1995 - present",
      link: "",
    },
  ];

  const facts = [
    {
      title: "Hobbies",
      points: ["Songwriting", "Photography", "Yoga"],
    },
    {
      title: "Interests",
      points: ["Film & Television", "Food", "Art"],
    },
    {
      title: "Goals",
      points: ["Start a family", "Make positive change", "Beat Dark Souls 3"],
    },
  ];

  return (
    <div className="p-10 md:w-2/3 mx-auto">
      <p className="text-4xl text-center">Perry von Rosenvinge</p>
      <p className="text-2xl pt-4 text-center">
        Web Developer / Software Engineer
      </p>
      <p className="font-3xl pt-10 pb-2 font-bold">SKILLS</p>
      <div className="grid grid-cols-2 md:grid-cols-4 text-center bg-white border-2 border-black m-4">
        {skills.map((skill, index) => {
          return (
            <div className="m-4" key={index}>
              <p className="">{skill}</p>
            </div>
          );
        })}
      </div>
      <p className="font-3xl pt-10 font-bold">EXPERIENCES</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {experiences.map((job, index) => {
          return <Job job={job} key={index} />;
        })}
      </div>
      <p className="font-3xl pt-10 font-bold">PROJECTS</p>
      <div>
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
      <p className="font-3xl pt-10 font-bold">THINGS YOU SHOULD KNOW</p>
      <div className="grid grid-cols-1 md:grid-cols-3 text-center">
        {facts.map((fact, index) => {
          return <Fact fact={fact} key={index} />;
        })}
      </div>
    </div>
  );
}
