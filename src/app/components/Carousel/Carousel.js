'use Client'

import React, { useState } from 'react';
import { FaHtml5, FaReact, FaCss3 } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import styles from "./Carousel.css";

const Carousel = () => {
    const stylings = ["cSharpStyle", "reactStyle", "htmlStyle", "cssStyle"]
    const skills = ["C#", "React", "HTML", "CSS"]
    const skillComponents = [SiCsharp, FaReact, FaHtml5, FaCss3]

    const [index, setIndex] = useState(0);
    const length = 4;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };

    const getComponent = () => {
        var Component = skillComponents[index];

        return (<Component className={"skillImage " + stylings[index]} />)
    }

    return (
        <div className="carousel">
            {getComponent()}

            <img src="./leftArrow.png" alt="Previous Arrow" style={{ marginRight: '20%' }} className="arrowImage" onClick={handlePrevious} />
            <img src="./rightArrow.png" alt="Next Arrow" className="arrowImage" onClick={handleNext} />

            <p className={styles.Center}>{skills[index]}</p>

        </div>
    );
};

export default Carousel;