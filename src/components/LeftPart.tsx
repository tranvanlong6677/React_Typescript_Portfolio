import logoDesktop from "assets/img/logo/desktop-logo.png";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

interface IProps {
  hideLeft: boolean;
  setHideLeft: (value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const { hideLeft, setHideLeft } = props;
  const [activeTab, setActiveTab] = useState<string>("home");
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const tab = hash.replace("#", "");
      setActiveTab(tab);
      const section = document.querySelector(`${hash}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);
  const handleClickTab = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveTab(tab);
    event.preventDefault();
    const section = document.querySelector(`#${tab}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.location.hash = tab;
      }, 500);
    }
  };

  return (
    <>
      <div
        className={
          hideLeft ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#">
              <img src={logoDesktop} alt="desktop-logo" />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  href="#home"
                  className={activeTab === "home" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("home", event)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("about", event)}
                  className={activeTab === "about" ? "active" : ""}
                >
                  About me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={activeTab === "skills" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("skills", event)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={activeTab === "projects" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("projects", event)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={(
                    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleClickTab("contact", event)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <i className="xcon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="xcon-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile ? (
            <a
              className={hideLeft ? "arlo_tm_resize opened" : "arlo_tm_resize "}
              href="#"
              onClick={(e) => {
                setHideLeft(!hideLeft);
                e.preventDefault();
              }}
            >
              {hideLeft === true ? (
                <i className="xcon-angle-right"></i>
              ) : (
                <i className="xcon-angle-left"></i>
              )}
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};
export default LeftPart;
