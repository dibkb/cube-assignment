import { useCallback, useEffect, useRef } from "react";
import "../styles/customer-image.css";
export const CustomerImage = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const updateImage = useCallback(() => {
    if (imageRef.current) {
      imageRef.current.src = getRandomImage();
    }
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateImage, 10 * 1000);
    return () => clearInterval(intervalId);
  }, [updateImage]);
  return (
    <img
      ref={imageRef}
      className="image-container"
      alt=""
      src={getRandomImage()}
    />
  );
};

function getRandomImage() {
  return `https://picsum.photos/600/600?random=${Math.random()}`;
}
