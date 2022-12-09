import React, { useEffect } from "react";
import Step from "../impress/step";
import styles from "./links.module.less";

const Links = () => (
  <Step
    id="links"
    x={1000 * 30}
    y={0}
    z={0}
    rotateZ={90}
    rotate={70}
    scale={30}
  >
    <h2 className={styles.theEnd}>Конец</h2>
    <h3 className={styles.sectionOne}>Линки</h3>
    <div
      style={{
        width: "100%",
        fontSize: "0.67em",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://reactjs.org/docs/hooks-reference.html#usereducer"
        target="_blank"
        rel="noreferrer"
      >
        react
      </a>
      <a
        href="https://redux-toolkit.js.org/introduction/getting-started"
        target="_blank"
        rel="noreferrer"
      >
        redux-toolkit
      </a>
      <a
        href="https://www.solidjs.com/tutorial/introduction_basics"
        target="_blank"
        rel="noreferrer"
      >
        SolidJs
      </a>
      <a
        href="https://rxjs.dev/guide/observable"
        target="_blank"
        rel="noreferrer"
      >
        RxJs
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        VueJs
      </a>
      <a
        href="https://github.com/redux-saga/redux-saga"
        target="_blank"
        rel="noreferrer"
      >
        ReduxSaga
      </a>
      <a
        href="https://habr.com/ru/company/oleg-bunin/blog/545702/"
        target="_blank"
        rel="noreferrer"
      >
        реактивное программирование на java
      </a>
      <a
        href="https://learn.microsoft.com/en-us/previous-versions/msp-n-p/jj591569(v=pandp.10)?redirectedfrom=MSDN"
        target="_blank"
        rel="noreferrer"
      >
        о сагах
      </a>
      <a
        href="https://blog.logrocket.com/exploring-reactive-programming-node-js/"
        target="_blank"
        rel="noreferrer"
      >
        о реактивности в js
      </a>
      <a
        href="https://medium.com/litslink/rxjs-basics-in-examples-73c3c3c415b7"
        target="_blank"
        rel="noreferrer"
      >
        rxjs в примерах
      </a>
    </div>
    <h3 className={styles.sectiontwo}>Тулы для презентации</h3>
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      <a href="https://impress.js.org/" target="_blank" rel="noreferrer">
        impress.js
      </a>
      <a href="https://animejs.com/" target="_blank" rel="noreferrer">
        anime.js
      </a>
    </div>
  </Step>
);

export default Links;
