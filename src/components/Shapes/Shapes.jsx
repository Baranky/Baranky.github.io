import React from "react";
import "./Shapes.css";
import { randomAnimation } from "./RandomAnimation";

const Shapes = () => {
  return (
    <div className="svg-shapes__root">
      <div className={`svg-shapes__item__1 ${randomAnimation(1, 5)}`}></div>
      <div className={`svg-shapes__item__2 ${randomAnimation(1, 5)}`}></div>
      <div className={`svg-shapes__item__3 ${randomAnimation(1, 5)}`}></div>
      <div className={`svg-shapes__item__4 ${randomAnimation(1, 5)}`}></div>
      <div className={`svg-shapes__item__5 ${randomAnimation(1, 5)}`}></div>
    </div>
  );
};

export default Shapes;
