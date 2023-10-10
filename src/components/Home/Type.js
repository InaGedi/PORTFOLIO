import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (

    <Typewriter
      options={{
        strings: [
          "Web developer & Designer",
        
        ],
       
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
