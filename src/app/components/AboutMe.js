import React from "react";
import styles from "../page.module.css";
import Image from "next/image";


// reuseable card for the image links to socials
export default function AboutMe() {
    return (
        <div className={styles.aboutMePannel}>
            <div className={styles.details}>
                <h2 style={{ color: 'black', paddingTop: '40px' }}>
                    About Me
                    <hr
                        style={{
                            color: 'black',
                            backgroundColor: 'black',
                            height: '3px',
                            marginLeft: '25%',
                            width: '50%'
                        }}
                    />
                </h2>

                <p>
                    Hello! I am a software developer based in the North West of the UK.
                    With a genuine passion for technology and a constant drive to expand my skillset, I thrive on tackling new challenges and finding innovative solutions.
                    My approachable and friendly demeanor helps me collaborate effectively within teams and build lasting relationships.
                    Outside of coding, I enjoy hitting the gym, exploring the great outdoors and experimenting in the kitchen.
                </p>

                <p>
                    I’m eager to bring my enthusiasm and dedication to a dynamic team where I can contribute to impactful projects and continue growing both professionally and personally.
                </p>

            </div>
        </div>
    );
}