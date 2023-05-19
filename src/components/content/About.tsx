import React from "react";
import imgAvt from "assets/img/hero/avt.jpg";
import CV from "assets/CV.pdf";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div className="arlo_tm_section relative" id="about">
      <div className="arlo_tm_about_wrapper_all">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>About Me</h3>
            <span>Main informations about me</span>
          </div>
          <div className="arlo_tm_about_wrap">
            <div className="author_wrap">
              <div className="leftbox">
                <div
                  className="about_image_wrap parallax"
                  data-relative-input="true"
                >
                  <div className="image layer" data-depth="0.1">
                    <img
                      src={imgAvt}
                      alt="550x640"
                      style={{ width: 550, height: 360, opacity: 1 }}
                    />
                    <div className="inner" data-img-url="img/about/1.jpg"></div>
                  </div>
                  <div className="border layer" data-depth="0.2">
                    <img src="img/about/550x640.jpg" alt="550x640" />
                    <div className="inner"></div>
                  </div>
                </div>
              </div>
              <div className="rightbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Trần Văn Long</h4>
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer (ReactJS)",
                      2000,
                      "Gamer",
                      2000,
                      () => {},
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </div>
                <div className="definition">
                  <p>
                    Xin chào.Tôi là <strong>Trần Văn Long</strong>. Tôi là 1 Web
                    Developer.
                  </p>
                </div>
                <div className="about_short_contact_wrap">
                  <ul>
                    <li>
                      <span>
                        <label>Ngày sinh:</label> 23.06.2001
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Tuổi:</label> 22
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Thành phố:</label> Hà Nội
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Sở thích:</label> Nghe nhạc,Đọc sách
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Trường học:</label> HUST
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Chuyên ngành:</label> Khoa học máy tính
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Trình độ:</label> Fresher
                      </span>
                    </li>
                    <li>
                      <span>
                        <label>Gmail:</label>
                        <a href="mailto:example@gmail.com">
                          tranvanlong6677@gmail.com
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="buttons_wrap">
                  <ul>
                    <li>
                      <a href={CV} download>
                        <span>Download CV</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
