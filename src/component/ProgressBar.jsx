import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const ProgressBar = ({ time, currentImageIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define the spring animation for the progress bar width
  const [progressWidth, setProgressWidth] = useSpring(() => ({
    width: `${time * 10}%`,
    from: { width: "0%" },
    config: { duration: 10000 }, // Animation duration
  }));

  // Update the animation when time or currentImageIndex changes
  useEffect(() => {
    setProgressWidth({
      width: `${time * 10}%`,
      from: { width: "0%" },
    });
  }, [time, currentImageIndex, setProgressWidth]);

  return (
    <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: isHovered ? "scale(1.05) translate(-50%, -50%)" : "scale(1) translate(-50%, -50%)",
      width: "50vw", // Set width to half of the screen width
      backgroundColor: isHovered ? "rgba(30, 30, 30, 0.8)" : "rgba(0, 0, 0, 0.5)",
      padding: "10px",
      borderRadius: "15px",
      transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <div
        style={{
          // Styles for the progress bar
          position:'absolute',
          top:0,
          left:0,
          width: "100%",
          height: "3px",
          backgroundColor: "lightgray",
          position: "relative",
        }}
      >
        <animated.div
          style={{
            ...progressWidth,
            height: "100%",
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></animated.div>
      </div>
    </div>
  );
};

export default ProgressBar;
