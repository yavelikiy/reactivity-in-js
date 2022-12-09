import { useEffect, useState } from "react";

const useActiveStep = ({ id }) => {
  const [active, setActive] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const checkIfCurrentActive = (e) => {
    if (e.target.id === id) {
      setActive(true);
      return;
    }

    setActive(false);
  };
  const checkIfCurrentLeave = (e) => {
    if (e.target.id === "about-title") {
      setLeaving(true);
      return;
    }

    setLeaving(false);
  };

  useEffect(() => {
    document.addEventListener("impress:stepenter", checkIfCurrentActive);
    document.addEventListener("impress:stepleave", checkIfCurrentLeave);

    return () => {
      document.removeEventListener("impress:stepenter", checkIfCurrentActive);
      document.removeEventListener("impress:stepleave", checkIfCurrentLeave);
    };
  }, []);

  return [active, leaving];
};

export default useActiveStep;
