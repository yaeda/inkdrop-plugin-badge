import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, Fragment } from "react";
import copy from "copy-to-clipboard";

const STYLE_NAMES = {
  default: "default (= plastic)",
  plastic: "plastic",
  flat: "flat",
  "flat-square": "flat-square",
  "for-the-badge": "for-the-badge",
  social: "social",
};

const Home = () => {
  const [name, setName] = useState("vim");
  const [badgeStyle, setBadgeStyle] = useState("default");

  const onChangePluginName = (event) => {
    setName(event.target.value);
  };

  const onClickToCopy = (event) => {
    copy(event.target.textContent);
  };

  const onSelectionChanged = (style) => {
    return () => {
      setBadgeStyle(style);
    };
  };

  const versionUrl =
    badgeStyle === "default"
      ? `https://inkdrop-plugin-badge.vercel.app/api/version/${name}`
      : `https://inkdrop-plugin-badge.vercel.app/api/version/${name}?style=${badgeStyle}`;

  const downloadsUrl =
    badgeStyle === "default"
      ? `https://inkdrop-plugin-badge.vercel.app/api/downloads/${name}`
      : `https://inkdrop-plugin-badge.vercel.app/api/downloads/${name}?style=${badgeStyle}`;

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
            <h2>Configuration</h2>
            <h3>Plugin Name</h3>
            <p>
              <input type="text" value={name} onChange={onChangePluginName} />
            </p>
            <h3>Badge Style</h3>
            <p className={styles.selection}>
              {Object.keys(STYLE_NAMES).map((name) => {
                return (
                  <Fragment key={`style-${name}`}>
                    <input
                      type="radio"
                      name="style-selection"
                      id={`style-${name}`}
                      checked={badgeStyle === name}
                      onChange={onSelectionChanged(name)}
                    />
                    <label htmlFor={`style-${name}`}>{STYLE_NAMES[name]}</label>
                  </Fragment>
                );
              })}
            </p>
          </div>

          <div className={styles.card}>
            <h2>Version Badge </h2>
            <p>
              <img src={versionUrl} />
            </p>
            <h3>URL</h3>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                {versionUrl}
              </code>
            </p>
            <h3>Markdown</h3>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                ![Inkdrop Plugin Version]({versionUrl})
              </code>
            </p>
          </div>

          <div className={styles.card}>
            <h2>Downloads Badge </h2>
            <p>
              <img src={downloadsUrl} />
            </p>
            <h3>URL</h3>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                {downloadsUrl}
              </code>
            </p>
            <h3>Markdown</h3>
            <p>
              <code className={styles.code} onClick={onClickToCopy}>
                ![Inkdrop Plugin Downloads]({downloadsUrl})
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
