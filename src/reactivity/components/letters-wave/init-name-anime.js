import anime from "animejs";

const initNameAnime = ({ parent, letters, delay, loop = true }) =>
  anime
    .timeline({ loop })
    .add({
        targets: letters,
      scale: [0, 1],
      duration: 1500,
      elasticity: 600,
        delay: ( el, i ) => delay + 45 * ( i + 1 )
        } )
    .add({
        targets: parent,
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
        delay: 10000
    } );

export default initNameAnime;
