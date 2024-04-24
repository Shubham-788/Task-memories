import React, { useState, useEffect, useRef } from "react";
import ImageShow from "./ImageShow";
import BackgroundImage from "./BackgroundImage";
import imageData from "./images_.json";
import ButtonAni from "./ButtonAni";
import ProgressBar from "./ProgressBar";

const ImageComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalIdRef = useRef(null);
  const [time, setTime] = useState(10);

  useEffect(() => {
    // Start interval to change images
    intervalIdRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= imageData.length) {
          clearInterval(intervalIdRef.current);
          setTime(10); // Reset time only if it's the last image
          // Pause audio when images finish loading
        }
        return nextIndex;
      });
    }, 10000);

    // Clear interval on component unmount
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  // Function to handle image click events
  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= imageData.length) {
        clearInterval(intervalIdRef.current);
      }
      return nextIndex;
    });
    setTime(10);
  };

  // Function to reset the component (reload button)
  const resetHandler = () => {
    setCurrentImageIndex(0);
    setTime(10);

    intervalIdRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= imageData.length) {
          clearInterval(intervalIdRef.current);
        }
        return nextIndex;
      });
      setTime(10);
    }, 10000);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "auto",
      }}
      onClick={handleClick}
    >
      {currentImageIndex < imageData.length && (
        <>
          {/* Progress bar */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              marginTop: "50px",
              width: "100%",
              zIndex: 2,
            }}
          >
            <ProgressBar time={time} currentImageIndex={currentImageIndex} />
          </div>
          {/* Play audio when images start loading */}
          <audio src='song.mp3' autoPlay onError={(e) => console.error("Error playing audio:", e)} />
          <BackgroundImage imageUrl={imageData[currentImageIndex].url} />
          <ImageShow
            imageData={imageData}
            currentImageIndex={currentImageIndex}
            time={time}
          />
        </>
      )}
      {currentImageIndex >= imageData.length && (
        <>
          <h2 style={{ color: "white" }}>End of Memories</h2>
          <ButtonAni onClick={resetHandler} />
        </>
      )}
    </div>
  );
};

export default ImageComponent;
