

import style from './baseElement.module.css';
import React, { useState } from "react";

const BaseElement = () =>
{
    const [initialX, setinitialX] = useState(0);
    const [initialY, setinitialY] = useState(0);
    const [moveElement, setmoveElement] = useState(false);

    const moving_down = (e) => {
            e.preventDefault();
            setinitialX(e.clientX);
            setinitialY(e.clientY);
            setmoveElement(true);
    }
    const moving_move = (e) => {
        if(moveElement)
        {
            e.preventDefault();
            e.target.style.top = e.target.offsetTop - (initialY - e.clientY) + "px";
            e.target.style.left = e.target.offsetLeft - (initialX - e.clientX) + "px";
            setinitialX(e.clientX);
            setinitialY(e.clientY);
        }
    }
    const moving_up = (e) => {
        setmoveElement(false);
    }

    const moving_leave = (e) => {
        setmoveElement(false);
    }
    return(
        <div onMouseDown={moving_down}
            onMouseMove={moving_move}
            onMouseUp={moving_up}
/*             onMouseLeave={moving_leave}
 */            className={style.elem}>
            <label>
                AAAAAAAAAAA
            </label>
        </div>
    )
};

export default BaseElement;