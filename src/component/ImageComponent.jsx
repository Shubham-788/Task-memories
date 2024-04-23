import React, { useState, useEffect, useRef } from 'react';
import ImageShow from './ImageShow';
import BackgroundImage from './BackgroundImage'; // Import the BackgroundImage component
import imageData from './images_.json';
import ButtonAni from './ButtonAni';

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        {currentImageIndex < imageData.length && (
          <>
            <BackgroundImage imageUrl={imageData[currentImageIndex].url} />
            <ImageShow
              imageData={imageData}
              currentImageIndex={currentImageIndex}
              handleClick={handleClick}
              time={time}
            />
          </>
        )}
        {currentImageIndex >= imageData.length && (
          <>
            <h2>End of Memories</h2>
            <ButtonAni onClick={resetHandler} /> {/* Button to reset component */}
          </>
        )}
      </div>
  );
};

export default ImageComponent;
