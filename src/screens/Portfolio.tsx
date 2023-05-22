import React, { useEffect, useState } from "react";
import Preloader from "components/Preloader";
import RightPart from "components/RightPart";
import LeftPart from "components/LeftPart";
import MobileMenu from "components/Mobile/MobileMenu";
import { FloatButton } from "antd";
import { isMobile } from "react-device-detect";
import logoMobile from "assets/img/logo/mobile_logo.png";

const Portfolio = () => {
  const [hideLeft, setHideLeft] = useState<boolean>(false);
  useEffect(() => {
    if (isMobile) {
      setHideLeft(true);
    }
  }, [isMobile]);
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

      <MobileMenu />
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
