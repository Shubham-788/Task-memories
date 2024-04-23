import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageShow = ({ imageData, currentImageIndex, handleClick }) => {
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
    <div style={{ width: '1000px', height: '1000px', overflow: 'hidden' }}>
      {imageData.map((record, index) => (
        // Apply zoom animation to the image container
        <animated.div key={record.id} style={{ ...zoomAnimation, display: index === currentImageIndex ? 'block' : 'none' }}>
          <img
            src={record.url}
            alt={record.name}
            onClick={handleClick}
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </animated.div>
      ))}
    </div>
  );
};

export default ImageShow;
