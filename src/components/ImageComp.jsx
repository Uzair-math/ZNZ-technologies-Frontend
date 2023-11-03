import React from "react";

const ImageComp = ({ src, alt, className, sx, style, ...otherProps }) => {
  const combinedStyles = {
    ...style,
    ...sx,
  };
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={combinedStyles}
      {...otherProps}
    />
  );
};

export default ImageComp;
