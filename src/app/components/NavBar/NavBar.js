import React from "react";
import styles from './NavBar.css';
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";


const NavBar = () => {

    return (
        <div className="navbar">
            <div>
                <h2>Josh Sammon</h2>
            </div>

            <div className="links">
                <a className='linkItem' href="https://github.com/Josh-Sammon">
                    < FaGithub style={{ width: "25px", height: "25px" }} />
                </a>
                <a className='linkItem' href="https://www.linkedin.com/in/josh-sammon/">
                    < FaLinkedin style={{ width: "25px", height: "25px" }} />
                </a>
                <a className='linkItem' href="Resume.pdf" download="Josh_Sammon_Resume">
                    < FaDownload style={{ width: "25px", height: "25px" }} />
                </a>
            </div>

        </div>
    );
}

export default NavBar;