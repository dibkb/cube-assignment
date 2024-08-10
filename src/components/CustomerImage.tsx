// CSS file
import "../styles/customer-image.css";
import React, { useCallback, useEffect, useRef } from "react";

export const CustomerImage = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  // Function to get a random image URL
  const getRandomImage = useCallback(() => {
    return `https://picsum.photos/600/600?random=${Math.random()}`;
  }, []);

  // update image element handler
  const updateImage = useCallback(() => {
    if (imageRef.current) {
      imageRef.current.src = getRandomImage();
    }
  }, [getRandomImage]);

  // load new images after every 10s
  useEffect(() => {
    const intervalId = setInterval(updateImage, 10 * 1000);
    return () => clearInterval(intervalId);
  }, [updateImage]);

  return (
    <img
      // ref={imageRef}
      className="image-container"
      alt="random-image"
      // src={getRandomImage()}
    />
  );
};
