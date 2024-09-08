'use client'

import styles from "./page.module.css";
import AboutMe from "./components/AboutMe";
import MySkills from "./components/MySkills";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";
import GoTop from "./components/goTop/TopButton";

export default function Home() {
  return (
    <>

      <main className={styles.main}>

        <Header />

        <AboutMe />

        <MySkills />

        <div className={styles.carouselBackground}>
          <div className={styles.carouselCard}>
            <Carousel />

          </div>
        </div>

      </main >

      <NavBar />
      <Footer />
      <GoTop />
    </>

  );
}
