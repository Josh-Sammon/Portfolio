import React from "react";
import styles from "../page.module.css";
import Image from "next/image";



export default function MySkills() {
    return (
        <div className={styles.skillsPannel}>
            <div className={styles.details}>
                <h2 style={{ color: 'black', margin: '10px' }}>
                    My Skills
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
                    My experience with backend design gives me strong fundamentals I can build on to grow and become a better developer.
                    I have experience with the full stack of software engineering from database design, API development, frontend creation and optimisation.
                    I am always looking to improve my skillset and undertake new challenges and believe that I would be a great addition to the team.
                    I have developed systems from the ground up featuring sql server databases, .NET APIs and multiple frontend implementations including AngularJs and React.
                    Picking up new languages to further support my current skill set comes naturally to me.
                </p>


            </div>
        </div>
    );
}