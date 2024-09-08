import React from "react";
import styles from "../page.module.css";

const Footer = () => {

    return (
        <div className={styles.footer}>
            <p style={{
                color: 'rgba(73, 158, 214, 0.952)',
                fontFamily: 'bodini'
            }}>
                Designed and Created by Josh Sammon
            </p>
        </div >
    );
}

export default Footer;