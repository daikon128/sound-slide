import styles from '../styles/Home.module.css'
import Head from "next/head";
import React from "react";
import {AudioControl} from "../components/audio/AudioControl";
import {Slide} from "../components/slide/Slide";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>sound-slide</title>
      </Head>
      <div>
        slide:
        <Slide></Slide>
      </div>
      <div>
        audio control
        <AudioControl></AudioControl>
      </div>

    </div>
  )
}

