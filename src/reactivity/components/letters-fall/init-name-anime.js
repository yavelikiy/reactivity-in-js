import anime from "animejs";

const initNameAnime = ({ parent, words, loop = true }) => {
  const a = anime.timeline({ loop }).add({
    targets: words,
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i,
  });

  if (loop) {
    a.add({
      targets: parent,
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000,
    });
  }
};

export default initNameAnime;
