import logoDesktop from "assets/img/logo/desktop-logo.png";

interface IProps {
  hideLeft: boolean;
  setHideLeft: (value: boolean) => void;
}
const LeftPart = (props: IProps) => {
  const { hideLeft, setHideLeft } = props;

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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About me</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
          <a
            className={hideLeft ? "arlo_tm_resize opened" : "arlo_tm_resize "}
            href="#"
            onClick={() => setHideLeft(!hideLeft)}
          >
            {hideLeft === true ? (
              <i className="xcon-angle-right"></i>
            ) : (
              <i className="xcon-angle-left"></i>
            )}
          </a>
        </div>
      </div>
    </>
  );
};
export default LeftPart;
