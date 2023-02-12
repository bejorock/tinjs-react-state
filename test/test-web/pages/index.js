import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import * as reactState from "@tinqjs/tinjs-react-state";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PersistentStateExample />
    </div>
  );
}

function PersistentStateExample() {
  // const [tmpState, setTmpState] = us()
  console.log(reactState);

  return (
    <div
      style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div>
        <button>Update</button>
      </div>
    </div>
  );
}
