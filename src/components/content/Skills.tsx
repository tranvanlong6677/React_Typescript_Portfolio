import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Skills = () => {
  return (
    <div className="arlo_tm_section" id="skills">
      <div className="arlo_tm_skills_wrap">
        <div className="container">
          <div className="inner_wrap">
            <div className="leftbox">
              <div className="arlo_tm_mini_title_holder">
                <h4>Some About my Abilities</h4>
              </div>
            </div>
            <div className="rightbox">
              <div className="progress_bar_wrap_total">
                <div
                  className="arlo_tm_progress_wrap"
                  data-size="small"
                  data-round="c"
                  data-strip="off"
                >
                  <div
                    className="arlo_tm_progress"
                    data-value="95"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">ReactJS - </span>
                    </span>
                    <ProgressBar
                      height="18px"
                      bgColor={"#333"}
                      completed={95}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="90"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Typescript - </span>
                    </span>
                    <ProgressBar
                      height="18px"
                      bgColor={"#333"}
                      completed={90}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="85"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">Css - </span>
                    </span>
                    <ProgressBar
                      height="18px"
                      bgColor={"#333"}
                      completed={85}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="75"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">HTML - </span>
                    </span>
                    <ProgressBar
                      height="18px"
                      bgColor={"#333"}
                      completed={75}
                    />
                  </div>
                  <div
                    className="arlo_tm_progress"
                    data-value="90"
                    data-color="#000"
                  >
                    <span>
                      <span className="label">After Effect - </span>
                    </span>
                    <ProgressBar
                      height="18px"
                      bgColor={"#333"}
                      completed={90}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
