import React from "react";

const ScrollView = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        borderTop: "5px solid black",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default ScrollView;
