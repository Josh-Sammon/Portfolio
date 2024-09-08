
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";
import styles from './goTop.css';

const GoTop = () => {
    const [showGoTop, setShowGoTop] = useState(false)

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 50)
    }

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton)
    }, [])

    return (
        <>
            {
                showGoTop &&
                <a className="fixedButton" onClick={handleScrollUp}>
                    <div className="roundedFixedBtn">
                        <div className='arrowIcon'>
                            <FaArrowUp />
                        </div>
                    </div>
                </a>
            }

        </>
    );
};
export default GoTop;