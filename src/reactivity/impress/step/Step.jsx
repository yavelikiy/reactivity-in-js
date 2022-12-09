import React from "react";

const Step = ({
  ref,
  id,
  className,
  style,
  x,
  y,
  z,
  scale,
  rotate,
  rotateZ,
  autoplay,
  children,
}) => (
  <div
    ref={ref}
    id={id}
    style={style}
    className={`step ${className ?? ""}`}
    data-x={x}
    data-y={y}
    data-z={z}
    data-autoplay={autoplay}
    data-scale={scale}
    data-rotate={rotate}
    data-rotate-z={rotateZ}
  >
    {children}
  </div>
);

export default Step;
