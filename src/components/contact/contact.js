import React from 'react';
import "./contact.css";

function Contact()  {
  const contact = [
    {
      name: 'E-mail',
      value: 'sakhapovalbert@gmail.com'
    },
    {
      name: 'Phone',
      value: '+43 681 106-480-33'
    },
  ];

  return (
    <section className={"contact-container"}>
      <span className={"c-header"}>Contact Me</span>
      <img
        className={"contact-image"}
        alt={"contact"}
        src={require("../../assets/svg/anchors/contact.svg")}
      />
      <div style={{marginTop: '24px'}}>
        {contact.map((element, index) => (
          <div className={"contact-element"} key={index}>
            <div className={"contact-name"}>{element.name}</div>
            <div className={"contact-value"}>{element.value}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Contact;
