import React, { useState } from "react";
import Preloader from "components/Preloader";
import RightPart from "components/RightPart";
import LeftPart from "components/LeftPart";
import MobileMenu from "components/Mobile/MobileMenu";
import { FloatButton } from "antd";

const Portfolio = () => {
  const [hideLeft, setHideLeft] = useState<boolean>(true);

  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>
      {/* <Preloader /> */}

      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div className="logo">
            <a href="index.html">
              <img src="img/logo/mobile_logo.png" alt="mobile_logo" />
            </a>
          </div>
          <div className="arlo_tm_trigger">
            <div className="hamburger hamburger--collapse-r">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
      <div className="arlo_tm_content">
        <LeftPart hideLeft={hideLeft} setHideLeft={setHideLeft} />
        <RightPart hideLeft={hideLeft} setHideLeft={setHideLeft} />

        <a className="arlo_tm_totop" href="#"></a>
      </div>
      <FloatButton.BackTop visibilityHeight={600} />
    </div>
  );
};

export default Portfolio;
