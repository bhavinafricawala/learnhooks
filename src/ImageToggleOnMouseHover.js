import React, { useRef } from 'react';

const ImageToggleOnMouseHover = (prop) => {
  const imageRef = useRef(null);

  return (
    <img
      onMouseOver={() => {
        imageRef.current.src = prop.secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = prop.primaryImg;
      }}
      src={prop.primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseHover;
