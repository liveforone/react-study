import React from "react";

type GreetingProps = {
  name: string;
  hightlightMark?: string;
};

const Greeting = ({ name, hightlightMark }: GreetingProps) => {
  return (
    <div>
      {name} {hightlightMark || "!"}
    </div>
  );
};

export default Greeting;
