import React, { useEffect, useRef } from "react";
import anime from "animejs";
import useActiveStep from "../../hook/useActiveStep";
import initNameAnime from "./init-name-anime";
import styles from "./letters-fall.module.less";

const LettersFall = ({ text, loop = true, stepId }) => {
  const ref = useRef();
  const [active] = useActiveStep({ id: stepId });

  useEffect(() => {
    const parent = ref.current;

    if (parent && active) {
      const words = parent.querySelectorAll("." + styles.word);
      initNameAnime({ parent, words, loop });

      return () => {
        anime.remove(parent);
        anime.remove(words);
      };
    }
  }, [ref.current, active]);

  const classes = [styles.ml15];

  if (active) {
    classes.push(styles.active);
  }

  const textArray = Array.isArray(text) ? text : text.split(" ");

  return (
    <span className={classes.join(" ")} ref={ref}>
      {textArray.map((l, i) => (
        <span key={i} className={styles.word}>
          {l + " "}
        </span>
      ))}
    </span>
  );
};

export default LettersFall;
