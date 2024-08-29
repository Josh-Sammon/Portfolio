
import React from "react";
import styles from "../page.module.css";



export default function Header(){
    return (
        <div className={styles.Header}>

            <div>
                <h2 style={{paddingBottom:'10px'}}>Josh Sammon</h2>
                <hr
                    style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: '0.5px',
                    width:'100%'}}/>
                    <p style={{marginTop:'20px'}}>Full Stack Software Developer</p>
            </div>

            
        </div>

    );
}