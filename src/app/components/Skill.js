import React from "react";
import styles from "../page.module.css";


export default function Skill({skill, colour}) {
    return (
        <div className={styles.rectangle} style={{background:colour}}>
            {skill}
        </div>
    );
}