import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ImageShow = ({ imageData, currentImageIndex, handleClick, time }) => {
  // Define the spring animation for zoom effect
  const [zoomAnimation, setZoomAnimation] = useSpring(() => ({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: { duration: 10000 }, // Animation duration
    reset: true,
  }));

  // Update the zoom animation when currentImageIndex changes
  useEffect(() => {
    setZoomAnimation({
      from: { transform: "scale(1)" },
      to: { transform: "scale(1.2)" },
    });
  }, [currentImageIndex, setZoomAnimation]);

  return (
    <div
      style={{
        position: "fixed",
        top: "auto",
        left: "auto",
        width: "90%",
        height: "90%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        // backgroundColor: 'black', // Background color for the screen
      }}
    >
      {imageData?.map((record, index) => (
        <div
          key={record.id}
          style={{
            position: "relative",
            display: index === currentImageIndex ? "block" : "none",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        >

          {/* Apply zoom animation to the image */}
          <animated.img
            src={record.url}
            alt={record.name}
            onClick={handleClick}
            style={{
              ...zoomAnimation,
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageShow;
