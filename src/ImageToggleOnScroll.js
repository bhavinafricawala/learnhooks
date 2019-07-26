import React, { useState, useRef, useEffect } from 'react';

const ImageToggleOnScroll = (prop) => {
  const imageRef = useRef(null);

  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => isInView());
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    setInView(isInView());
    setIsLoading(false);
    return () => {
      window.addEventListener('scroll', scrollHandler);
    };
  }, [isLoading]);

  return isLoading ? null : (
    <img
      src={inView ? prop.secondaryImg : prop.primaryImg}
      alt=""
      ref={imageRef}
      width="200"
      height="200"
    />
  );
};

export default ImageToggleOnScroll;
