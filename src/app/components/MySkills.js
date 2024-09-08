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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam sit amet sem finibus lobortis.
                    Curabitur fermentum rutrum ligula. Fusce nec convallis nibh, non venenatis felis.
                    Vestibulum massa odio, mollis sed tristique in, pellentesque sed lacus.
                    Curabitur ac enim placerat, luctus neque vel, porta neque. Nam malesuada, ipsum at porta condimentum, odio nisi viverra neque, at hendrerit augue quam ut nisi.
                    Aenean bibendum placerat tristique.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu diam sit amet sem finibus lobortis.
                    Curabitur fermentum rutrum ligula. Fusce nec convallis nibh, non venenatis felis.
                    Vestibulum massa odio, mollis sed tristique in, pellentesque sed lacus.
                    Curabitur ac enim placerat, luctus neque vel, porta neque. Nam malesuada, ipsum at porta condimentum, odio nisi viverra neque, at hendrerit augue quam ut nisi.
                    Aenean bibendum placerat tristique.
                </p>
            </div>
        </div>
    );
}