import React from 'react';
import "./additional-info.css";

function AdditionalInfo()  {
  const skills = [
    'React',
    'Angular',
    'Javascript, Typescript',
    'HTML5, CSS',
    'Adobe Photoshop',
    'Adobe Illustrator',
    'Git'
  ];
  const languages = [
    {
      name: 'English',
      level: 'C2',
      link: 'https://www.efset.org/cert/CSVT4k'
    },
    {
      name: 'Russian',
      level: 'Mother Tongue'
    },
  ];

  return (
    <section className={"additional-info-container"}>
      <div className={"block"} style={{marginRight: '12px'}}>
        <span className={"info-header"}>Skills</span>
        <div className={"addinfo-container"}>
          {skills.map((skill, index) => (
            <div className={"addinfo-element"} key={index}>
              – {skill}
            </div>
          ))}
        </div>
      </div>
      <div className={"block language"}>
        <span className={"info-header"}>Languages</span>
        <div className={"addinfo-container"}>
          {languages.map((lang, index) => (
            <div className={"addinfo-element"} key={index}>
              – {lang.name} ({
              lang.link ?
              <a className={'link'} href={lang.link}>{lang.level}</a> :
              lang.level
            })
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalInfo;
