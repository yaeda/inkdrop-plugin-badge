import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import copy from "copy-to-clipboard";

const Home = () => {
  const [name, setName] = useState("vim");

  const onChangePluginName = (event) => {
    setName(event.target.value);
  };

  const onClickToCopy = (event) => {
    copy(event.target.textContent);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Badge for Inkdrop Plugin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Badge for <a href="https://my.inkdrop.app/plugins">Inkdrop Plugin</a>
        </h1>

        <p className={styles.description}>
          powered by <a href="https://shields.io/">Shields.io</a>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Plugin Name</h3>
            <p>
              <input type="text" value={name} onChange={onChangePluginName} />
            </p>
          </div>

          <div className={styles.card}>
            <h3>Version Badge </h3>
            <p>
              <img
                src={`https://inkdrop-plugin-badge.vercel.app/api/version/${name}`}
              />
            </p>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                https://inkdrop-plugin-badge.vercel.app/api/version/{name}
              </code>
            </p>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                ![Inkdrop Plugin
                Version](https://inkdrop-plugin-badge.vercel.app/api/version/
                {name})
              </code>
            </p>
          </div>

          <div className={styles.card}>
            <h3>Downloads Badge </h3>
            <p>
              <img
                src={`https://inkdrop-plugin-badge.vercel.app/api/downloads/${name}`}
              />
            </p>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                https://inkdrop-plugin-badge.vercel.app/api/downloads/{name}
              </code>
            </p>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                ![Inkdrop Plugin
                Downloads](https://inkdrop-plugin-badge.vercel.app/api/downloads/
                {name})
              </code>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/yaeda"
          target="_blank"
          rel="noopener noreferrer"
        >
          by @yaeda
        </a>
        <a
          href="https://github.com/yaeda/inkdrop-plugin-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          on{" "}
          <img
            src="https://unpkg.com/simple-icons@3.3.0/icons/github.svg"
            alt="GitHub Logo"
          />
        </a>
      </footer>
    </div>
  );
};

export default Home;
