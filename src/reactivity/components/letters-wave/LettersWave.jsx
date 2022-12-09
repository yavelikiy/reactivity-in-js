import React, { useEffect, useRef } from "react";
import initNameAnime from "./init-name-anime";
import styles from "./letters-wave.module.less";

const LettersWave = ({ text, loop = true }) => {
    const ref = useRef();

    useEffect(() => {
        const parent = ref.current;

        if (parent) {
            const letters = parent.querySelectorAll("." + styles.letter);
            initNameAnime({ parent, letters, delay: 1000, loop });

            return () => {
                anime.remove(parent);
                anime.remove(letters);
            };
        }
    }, [ref.current]);

    return (
        <span className={styles.ml9} ref={ref}>
            <span className={styles.textWrapper}>
                {text.replaceAll( " ", "\u00A0" ).split( "" ).map( ( l, i ) => <span key={i} className={styles.letter}>{l}</span> )}
            </span>
        </span>
    );
};

export default LettersWave;
