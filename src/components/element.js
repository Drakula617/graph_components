import React, { useState } from "react";
import style from "./css/element.module.css";

const Element = () => {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const moveelstart = (event) => {
    setStartX(event.clientX);
    setStartY(event.clientY);
    console.log("start");
  };

  const moveelend = (el, event) => {
    const offsetX = event.clientX - startX;
    const offsetY = event.clientY - startY;
    el.style.top = el.offsetTop + offsetY + "px";
    el.style.left = el.offsetLeft + offsetX + "px";
    console.log("end");
  };

  return (
    <div
      className={style.el}
      onDragStart={moveelstart}
      onDragEnd={(e) => moveelend(e.target, e)}
      draggable="true"
    >
      fhgjkdfhjgkhfdjkghjkdfh
    </div>
  );
};

export default Element;




