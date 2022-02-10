// write code for Welcome component here
import React from "react";
import Child from "./Child";
const Welcome = (props) => {
  return (
    <>
      <h1>Hey ! {props.name}</h1>
      <section>
       <h2>Welcome to Newton School.</h2>
      </section>
    </>
  );
};

export default Welcome;
