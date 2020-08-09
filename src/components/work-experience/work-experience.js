import React from 'react';
import "./work-experience.css";


function WorkExperience()  {
  const workExperience = [
    {
      companyName: "MTS Group",
      position: "Frontend Developer",
      logoURL: "svg/mts-logo.svg",
      beginDate: "Jun 2019",
      endDate: "currently working",
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
      {workExperience.map((work, index) => (
        <div key={index}>
          <div className={"position-container"} >
            <div className={"company-logo"}>
              <img
                alt={`company logo ${index}`}
                src={require(`../../assets/${work.logoURL}`)}
              />
            </div>
            <div style={{ marginLeft: 80}}>
              <div className={"position"}> {work.position} </div>
              <div className={"company-name"}> {work.companyName} </div>
            </div>
          </div>
          <div style={{marginTop: 24, display: "flex"}}>
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
