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
      imageRef.current.style.backgroundImage = `url(${getRandomImage()})`;
    }
  }, [getRandomImage]);

  // load new images after every 10s
  useEffect(() => {
    const intervalId = setInterval(updateImage, 10 * 1000);
    return () => clearInterval(intervalId);
  }, [updateImage]);

  return (
    <div
      // ref={imageRef}
      className="image-container"
      style={{
        backgroundImage: `url(${getRandomImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};
