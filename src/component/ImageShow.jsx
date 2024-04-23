import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ProgressBar from './ProgressBar';

const ImageShow = ({ imageData, currentImageIndex, handleClick, time }) => {
  // Define the spring animation for zoom effect
  const [zoomAnimation, setZoomAnimation] = useSpring(() => ({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.2)' },
    config: { duration: 10000 }, // Animation duration
    reset: true,
  }));

  // Update the zoom animation when currentImageIndex changes
  useEffect(() => {
    setZoomAnimation({
      from: { transform: 'scale(1)' },
      to: { transform: 'scale(1.2)' },
    });
  }, [currentImageIndex, setZoomAnimation]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black', // Background color for the screen
      }}
    >
      {imageData?.map((record, index) => (
        <div
          key={record.id}
          style={{
            position: 'relative',
            display: index === currentImageIndex ? 'block' : 'none',
            maxHeight: '100vh',
            maxWidth: '100vw',
          }}
        >
          {/* Apply zoom animation to the image */}
          <animated.img
            src={record.url}
            alt={record.name}
            onClick={handleClick}
            style={{
              ...zoomAnimation,
              position: 'relative',
              zIndex: 1,
              width: '100%',
              height: '100%',
            }}
          />

          {/* Progress bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              marginBottom:'20px',
              width: '100%',
              zIndex: 2,
            }}
          >
            <ProgressBar time={time} currentImageIndex={currentImageIndex}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageShow;
