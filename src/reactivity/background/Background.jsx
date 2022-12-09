import React, { useEffect, useState } from "react";
import styles from "./background.module.less";

const Background = () => {
  const [classNames, setClassNames] = useState([styles.background]);

  const enableBackground = (e) => {
    if (e.target.id === "about-title") {
      setClassNames([styles.background, styles.copHeader]);
    }
    if (e.target.id === "links") {
      setClassNames([styles.background, styles.copExit]);
    }
  };
  const removeBackground = (e) => {
    if (e.target.id === "about-title") {
      setClassNames((cc) => [...cc, styles.leave]);
      setTimeout(() => {
        setClassNames((cc) =>
          cc.filter((c) => (c !== styles.leave) & (c !== styles.copHeader))
        );
      }, 1000);
    }
    if (e.target.id === "links") {
      setClassNames((cc) => [...cc, styles.leave]);
      setTimeout(() => {
        setClassNames((cc) =>
          cc.filter((c) => (c !== styles.leave) & (c !== styles.copExit))
        );
      }, 1000);
    }
  };

  useEffect(() => {
    document.addEventListener("impress:stepenter", enableBackground);
    document.addEventListener("impress:stepleave", removeBackground);

    return () => {
      document.removeEventListener("impress:stepenter", enableBackground);
      document.removeEventListener("impress:stepleave", removeBackground);
    };
  }, []);

  return <div className={classNames.join(" ")}></div>;
};

export default Background;
