import React from 'react';
import "./header.css";


function Header()  {

    return (
        <header className={"header-container"}>
          <div className={"background-tile"}>
          </div>
          <div className={"content"}>
            <div className={"profile-pic"}>
            </div>
            <div className={"data-container"}>
              <div className={"name"}>
                Albert Sakhapov
              </div>
              <div className={"status"}>
                Frontend Developer
              </div>
              <div className={"socials"}>
                <a className={"social-item"} href="https://www.linkedin.com/in/sakhapov/">
                  <div className={"linkedin"}>
                  </div>
                </a>
                <a className={"social-item"} href="https://github.com/BertMoretz">
                  <div className={"git"}>
                  </div>
                </a>
                <a className={"social-item"} href="https://vk.com/id23151540">
                  <div className={"vk"}>
                  </div>
                </a>
                <a className={"social-item"} href="https://www.instagram.com/bertmoretz/">
                  <div className={"instagram"}>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </header>
    )
}

export default Header;
