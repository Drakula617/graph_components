import Selector from '../selector/selector';
import areaStyles from './area.module.css';
import baseElementStyles from '../baseElement/baseElement.module.css'; 
import React, { useState } from 'react';
const Area = (props) => {
    
    const mouseEvents = {
        selector: "selector",
        none: "none"
    };
    const [mouseEvent, setMouseEvent] = useState(mouseEvents.none); 
    const isSelector = props.isSelector;
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);
    const [selectionElements, setSelectionElements] = useState([]);
    const [positionSelector, setPositionSelector] = useState({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });


    const mouseDown = (event) => {
        switch(mouseEvent)
        {
            default:
            {
                const allBaseElements = Array.from(document.querySelector(`.${areaStyles.area}`)
                .children).filter(el=> el.className === baseElementStyles.elem); 
                allBaseElements.forEach(element => {
                if(isInsideSelection(element) )
                {
                    element.style.border = null;
                    setSelectionElements([]);
                }
                });
                const elementClass = event.target.className;
                if(elementClass === areaStyles.area)
                {
                    setMouseEvent(mouseEvents.selector);
                    restartPositionSelector();
                    setStartX(event.clientX);
                    setStartY(event.clientY);
                    setEndX(event.clientX);
                    setEndY(event.clientY);
                    updatePositionSelector();
                    break;
                }
            }
        }
    };
    const mouseMove = (event) => {
        switch(mouseEvent)
        {
            case(mouseEvents.selector):
            {
                setEndX(event.clientX);
                setEndY(event.clientY);
                updatePositionSelector();
                break;
            }
            default:
                break;
        }
        
    };
    const mouseUp = (e) => {
        switch(mouseEvent)
        {
            case(mouseEvents.selector):
            {
                restartPositionSelector();
                const allBaseElements = Array.from(document.querySelector(`.${areaStyles.area}`)
                                    .children).filter(el=> el.className === baseElementStyles.elem); 
                allBaseElements.forEach(element => {
                    if(isInsideSelection(element) )
                    {
                        element.style.border = "3px black solid";
                        setSelectionElements([...selectionElements, element]);
                    }
                });
                setMouseEvent(mouseEvents.none);
                break;
            }
            default:
                break;
        }

    };

    const isInsideSelection = (element) => {
        
        const ax = element.offsetLeft;
        const ay = element.offsetTop;

        const dx = element.offsetLeft + element.clientWidth;
        const dy = element.offsetTop + element.clientHeight;
        return ax >= startX && ax <= endX &&
                ay >= startY && ay <= endY &&
                dx <= endX && 
                dy <= endY;
    }; 

    const updatePositionSelector = () => {
        if(mouseEvent === mouseEvents.selector)
        {
            setPositionSelector({
            left: Math.min(startX, endX),
            top: Math.min(startY, endY),
            width: Math.abs(endX - startX),
            height: Math.abs(endY - startY) });
        }

    }

    const restartPositionSelector =() =>{
        setPositionSelector({
            left: 0,
            top: 0,
            width: 0,
            height: 0
        });
    }
    

    return(
        <div
            onMouseDown={mouseDown}
            onMouseMove={mouseMove}
            onMouseUp={mouseUp}
            className={areaStyles.area}
            >
                {isSelector && <Selector position={positionSelector} />}
                {props.children}
        </div>
        
    );
};
export default Area;