import React from "react";

const Presentation = ({
  width = 1024,
  height = 768,
  maxScale = 3,
  minScale = 0,
  transitionDuration = 1000,
  perspective = 1000,
  autoplay,
  children,
}) => (
  <div
    id="impress"
    data-transition-duration={transitionDuration}
    data-width={width}
    data-height={height}
    data-max-scale={maxScale}
    data-min-scale={minScale}
    data-perspective={perspective}
    data-autoplay={autoplay}
  >
    {children}
  </div>
);

export default Presentation;
