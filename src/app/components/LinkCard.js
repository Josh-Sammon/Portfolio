import React from "react";
import styles from "../page.module.css";
import Image from "next/image";


// reuseable card for the image links to socials
export default function LinkCard({linkTo, image}) {
    return (
        <div className={styles.card} style={{padding:'40px'}}>
            <div style={{textAlign: 'center'}}>
                <Image
                    className={styles.logo}
                    style={{ alignSelf: 'center' }}
                    src={"/"+ image + ".png"}
                    alt= {image + " Logo"}
                    width={100}
                    height={100}
                    sizes="100vw"
                />

                <h2>{linkTo}</h2>    
            </div>
            
        </div>
    );
}