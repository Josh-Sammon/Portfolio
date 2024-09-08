'use Client'

import React, { useState } from 'react';
import styles from "../page.module.css";

const Carousel = () => {
    const skills = ["C#", "React", "HTML", "CSS"]

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

    return (
        <div className="carousel">
            <p className={styles.center}>{skills[index]}</p>

            <img src="./leftArrow.png" alt="Previous Arrow" style={{ marginRight: '20%' }} className={styles.arrowImage} onClick={handlePrevious} />
            <img src="./rightArrow.png" alt="Next Arrow" className={styles.arrowImage} onClick={handleNext} />

        </div>
    );
};

export default Carousel;