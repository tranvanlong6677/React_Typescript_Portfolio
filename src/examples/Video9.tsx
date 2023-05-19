import React, { useState } from "react";

const Video9 = () => {
  const [name, setName] = useState<string>("Long");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Video9;
