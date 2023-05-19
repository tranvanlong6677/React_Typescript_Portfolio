import React from "react";
interface IProps {
  name?: string;
  age?: number;
  address?: string;
}

const Video13 = (props: IProps) => {
  //   const person = {
  //     name: "long",
  //     age: 20,
  //     address: "HN",
  //   };
  const { name = "Long default", age = 23, address = "hn default" } = props;
  return <div>Hello world 13 with name={name}</div>;
};

export default Video13;
