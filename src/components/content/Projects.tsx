import React, { useState } from "react";
import { Button, Modal } from "antd";
import {
  FaReact,
  FaFacebook,
  FaInstagram,
  FaNodeJs,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

interface IProject {
  image: JSX.Element;
  title: string;
  shortDescription: string;
  details: {
    description: string;
    technology: string;
    member: string;
    role: string;
    demo: string;
    github: string;
  };
}
const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<IProject | null>();
  const dataProjects: IProject[] = [
    {
      image: <FaReact size="50" />,
      title: "ReactJS",
      shortDescription: "Một dự án về ReactJS",
      details: {
        description: "Một dự án về ReactJS",
        technology: "ReactJS+TypeScript",
        member: "1",
        role: "Frontend",
        demo: "ReactJS",
        github: "ReactJS",
      },
    },
    {
      image: <FaFacebook size="50" />,
      title: "Facebook",
      shortDescription: "Clone Facebook",
      details: {
        description: "Clone Facebook",
        technology: "ReactJS+TypeScript",
        member: "2",
        role: "Frontend",
        demo: "Facebook",
        github: "Facebook",
      },
    },
    {
      image: <FaInstagram size="50" />,
      title: "Instagram",
      shortDescription: "Clone Instagram",
      details: {
        description: "Clone Instagram",
        technology: "ReactJS+TypeScript",
        member: "3",
        role: "Frontend",
        demo: "Instagram",
        github: "Instagram",
      },
    },
    {
      image: <FaNodeJs size="50" />,
      title: "NodeJs",
      shortDescription: "Clone NodeJs",
      details: {
        description: "Clone NodeJs",
        technology: "ReactJS+TypeScript",
        member: "4",
        role: "Frontend",
        demo: "NodeJs",
        github: "NodeJs",
      },
    },
    {
      image: <FaTwitter size="50" />,
      title: "Twitter",
      shortDescription: "Clone Twitter",
      details: {
        description: "Clone Twitter",
        technology: "ReactJS+TypeScript",
        member: "5",
        role: "Frontend",
        demo: "Twitter",
        github: "Twitter",
      },
    },
    {
      image: <FaTiktok size="50" />,
      title: "Tiktok",
      shortDescription: "Clone Tiktok",
      details: {
        description: "Clone Tiktok",
        technology: "ReactJS+TypeScript",
        member: "6",
        role: "Frontend",
        demo: "Tiktok",
        github: "Tiktok",
      },
    },
  ];
  const showModal = (data: IProject) => {
    setIsModalOpen(true);
    setDataDetail(data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title={dataDetail?.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        maskClosable={false}
      >
        <p>description:{dataDetail?.details?.description}</p>
        <p>technology:{dataDetail?.details?.technology}</p>
        <p>member:{dataDetail?.details?.member}</p>
        <p>role:{dataDetail?.details?.role}</p>
        <p>demo:{dataDetail?.details?.demo}</p>
        <p>github:{dataDetail?.details?.github}</p>
      </Modal>
      <div className="arlo_tm_section" id="projects">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Dự án </h3>
              <span>Các dự án đã tham gia</span>
            </div>
            <div className="list_wrap">
              <ul>
                {dataProjects.map((item: IProject) => {
                  return (
                    <li
                      onClick={() => showModal(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="inner">
                        <div className="icon">{item.image}</div>
                        <div className="title_service">
                          <h3>Photography</h3>
                        </div>
                        <div className="text">
                          <p>{item.shortDescription}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
