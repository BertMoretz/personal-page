import React from 'react';
import "./education.css";


function Education()  {
  const education = [
    {
      degree: "Master's degree",
      field: "Computer Science",
      logoUrl: "images/uniwien.png",
      universityName: "University of Vienna",
      beginYear: "2020",
      endYear: "2022"
    },
    {
      degree: "Bachelor's degree",
      field: "Computer Science",
      logoUrl: "svg/others/innopolis.svg",
      universityName: "Innopolis University",
      beginYear: "2015",
      endYear: "2019"
    },
  ];


  return (
    <section className={"education-container"}>
      <span className={"e-header"}>Education</span>
      <img
        className={"education-image"}
        alt={"education"}
        src={require("../../assets/svg/anchors/education.svg")}
      />
      {education.map((uni, index) => (
          <div className={"uni-container"} key={index}>
            <div>
              <img
                className={"uni-logo"}
                alt={`university logo ${index}`}
                src={require(`../../assets/${uni.logoUrl}`)}
              />
            </div>
            <div style={{ marginLeft: 64}}>
              <div className={"specialty"}> {uni.degree} in {uni.field} </div>
              <div className={"additional-information"}>
                {uni.universityName} <br/>
                {uni.beginYear} - {uni.endYear}
              </div>
            </div>
          </div>
      ))}
    </section>
  )
}

export default Education;
