// write code for Welcome component here
import React from "react";
import Child from "./Child";
const Welcome = (props) => {
  return (
    <>
      <h1>Hey ! {props.name}</h1>
      <section>
        <Child />
      </section>
    </>
  );
};

export default Welcome;
