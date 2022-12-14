import React from "react";
import Job from "./Job";
import Project from "./Project";
import Fact from "./Fact";
import { experiences, skills, projects, facts } from "./things";

export default function LandingPage() {
  return (
    <div className="p-10 md:w-2/3 mx-auto">
      <p className="text-5xl text-center">Perry von Rosenvinge</p>
      <p className="text-3xl pt-4 text-center">
        Web Developer / Software Engineer
      </p>
      <p className="font-3xl pt-10 font-bold">EXPERIENCES</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {experiences.map((job, index) => {
          return <Job job={job} key={index} />;
        })}
      </div>
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
