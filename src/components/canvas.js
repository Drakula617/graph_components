import React from "react";
import Element from "../components/element";
import style from "../components/css/canvas.module.css";
const Canvas = ()=> 
{
    return(
        <div className={style.area}>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
            <Element></Element>
        </div>
    )
}
export default Canvas;