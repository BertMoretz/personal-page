import React from 'react';
import "./projects.css";
import {Button} from "../shared/button/button";


function Projects()  {
  const projects = [
    {
      name: 'Personal Page',
      description: 'This exact page written in React',
      link: 'https://github.com/BertMoretz/personal-page'
    },
    {
      name: 'Cryptocurrency converter',
      description: 'Simple cryptocurrency converter written in React using CryptoCompare API',
      link: 'https://github.com/BertMoretz/CryptoConverter'
    },
    {
      name: 'Video Game Network',
      description: 'Platform for leaving/tracking game reviews written in React, Express.js, MySQL and MongoDB.',
      link: 'https://github.com/BertMoretz/Video-Game-Network'
    }
  ];

  return (
    <section className={"projects-container"}>
      <span className={"p-header"}>Projects</span>
      <img
        className={"projects-image"}
        alt={"projects"}
        src={require("../../assets/svg/anchors/projects.svg")}
      />
      {projects.map((project, index) => (
        <div className={"pr-container"} key={index}>
          <div>
            <div className={"project-name"}>
              {project.name}
            </div>
            <div  className={"project-description"}>
              {project.description}
            </div>
          </div>
          <Button
            className={"source-button"}
            label={'Source'}
            onClick={() => window.location.href = project.link}
          />
        </div>
      ))}
      <div className={'git-link'}>
        <a className={'link'} href={'https://github.com/BertMoretz'}>Look through</a> my other projects on GitHub Account
      </div>
    </section>
  )
}

export default Projects;
