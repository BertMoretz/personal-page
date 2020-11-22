import React from 'react';
import "./work-experience.css";


function WorkExperience()  {
  const workExperience = [
    {
      companyName: "Greentube Internet Entertainment Solutions GmbH",
      position: "Software Developer",
      logoURL: "images/greentube-logo.png",
      beginDate: "Oct 2020",
      endDate: "currently working",
      description: [
        "Developing admin web application that helps employees to control and manage company's iGames solutions."
      ]
    },
    {
      companyName: "MTS Group",
      position: "Frontend Developer",
      logoURL: "svg/mts-logo.svg",
      beginDate: "Jun 2019",
      endDate: "Oct 2020",
      description: [
        "Developing B2C system that provides users service to register new SIM-cards. The application is a part of big ecosystem for online sales of company services.",
        "Developing B2B web application for online purchases of SIM and satellite equipment with tracking current expenditures and sales.",
        "Developing company’s internal back-office web application.",
        "Supporting web application for administrators and merchants to monitor overall statistics of sales."
      ]
    }
  ];

  return (
    <section className={"work-experience-container"}>
      <span className={"we-header"}>Work Experience</span>
      <img
        className={"laptop-image"}
        alt={"laptop"}
        src={require("../../assets/svg/anchors/laptop.svg")}
      />
      {workExperience.map((work, index) => (
        <div key={index} style={{marginTop: 36}}>
          <div className={"position-container"} >
            <div className={"company-logo-container"}>
              <img
                className={"company-logo"}
                alt={`company logo ${index}`}
                src={require(`../../assets/${work.logoURL}`)}
              />
            </div>
            <div className={"name-position"}>
              <div className={"position"}> {work.position} </div>
              <div className={"company-name"}> {work.companyName} </div>
              <div className={"period-date-mobile"}> {work.beginDate} - {work.endDate} </div>
            </div>
          </div>
          <div className={"work-details"}>
            <div className={"work-period"}>
              <span className={"period-date"}>{work.endDate}</span>
              <div className={"divider"}>

              </div>
              <span className={"period-date"}>{work.beginDate}</span>
            </div>
            <div className={"detailed-description"}>
              {work.description.map((line, i)=> (
                <div key={i}>
                  {line}
                  <br/>
                  {i !== work.description.length-1 && <br/>}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default WorkExperience;
