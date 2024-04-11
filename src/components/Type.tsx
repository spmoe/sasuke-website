import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";

const Type: FC = () => {
  return (
    <Typewriter
      words={[
        "Smart Contract Developer",
        "Web3 Developer",
        "Front-end Developer",
        "Back-end Developer",
      ]}
      loop={0}
      cursor
      cursorStyle=""
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default Type;
