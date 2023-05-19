import { TypeAnimation } from "react-type-animation";

const HomeCV = () => {
  return (
    <div className="arlo_tm_section" id="home">
      <div className="arlo_tm_hero_header_wrap">
        <div className="arlo_tm_universal_box_wrap">
          <div className="bg_wrap">
            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
            <div className="overlay_color hero"></div>
          </div>
          <div className="content hero">
            <div className="inner_content">
              <div className="image_wrap">
                <img src="img/hero/avt.jpg" alt="hero" />
              </div>
              <div className="name_holder">
                <h3>
                  Tran <span>Long</span>
                </h3>
              </div>
              <div className="text_typing">
                <p style={{ marginTop: "30px", fontSize: "30px" }}>
                  <span>{"I'm a "}</span>
                  <TypeAnimation
                    sequence={[
                      "Frontend Developer (ReactJS)",
                      1000,
                      "Gamer",
                      2000,
                      () => {},
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="arlo_tm_arrow_wrap bounce anchor">
            <a href="#about">
              <i className="xcon-angle-double-down"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCV;
