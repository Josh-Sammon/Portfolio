import Image from "next/image";
import styles from "./page.module.css";
import LinkCard from "./components/LinkCard";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className={styles.main}>

      <div >
        <Header/>
      </div>
      
      <div>
        <AboutMe/>

      </div>




      <MySkills/>


      
    </main>
  );
}
