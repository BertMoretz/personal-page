import React from 'react';
import "./publications.css";
import {Button} from "../shared/button/button";


function Publications()  {
  const publications = [
    {
      name: 'Understanding Attitudes Towards Emergency Training Modes: Conventional Drills And Serious Games',
      authors: 'Hamna Aslam, Irek Almuhametov, Albert Sakhapov ',
      link: 'https://link.springer.com/chapter/10.1007/978-3-030-34350-7_36'
    }
  ];

  return (
    <section className={"publications-container"}>
      <span className={"pub-header"}>Publications</span>
      <img
        className={"publications-image"}
        alt={"publications"}
        src={require("../../assets/svg/anchors/publications.svg")}
      />
      {publications.map((paper, index) => (
        <div className={"pub-container"} key={index}>
          <div>
            <div className={"publication-name"}>
              {paper.name}
            </div>
            <div  className={"publication-authors"}>
              {paper.authors}
            </div>
          </div>
          <Button
            className={"read-button"}
            label={'Read'}
            onClick={() => window.location.href = paper.link}
          />
        </div>
      ))}
    </section>
  )
}

export default Publications;
