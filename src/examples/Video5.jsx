import { useState, useEffect } from "react";

const Video5 = (props) => {
  const { name } = props;
  const [age, setAge] = useState(0);
  return (
    <div>
      Name = {name}, age = {age}
    </div>
  );
};

export default Video5;
