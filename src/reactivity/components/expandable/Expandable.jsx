import React, { useEffect, useRef } from "react";
import styles from "./expandable.module.less";

const Expandable = ({ children, width }) => {
  const ref = useRef();

  useEffect(() => {
    const div = ref.current;
    const onClick = () => {
      const newDiv = div.cloneNode(true);
      newDiv.className = width ? styles.expandedWidth : styles.expandedHeight;
      newDiv.addEventListener("click", () => {
        console.log("close");
        newDiv.remove();
      });

      root.appendChild(newDiv);
    };

    if (div) {
      div.addEventListener("click", onClick);

      return () => {
        div.removeEventListener("click", onClick);
      };
    }
  }, [ref.current]);

  return (
    <div ref={ref} className={styles.container}>
      {children}
    </div>
  );
};

export default Expandable;
