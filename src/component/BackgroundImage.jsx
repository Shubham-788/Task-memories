// BackgroundImage component
import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1, // Ensure it's behind other content
      }}
    >
      <img
        src={imageUrl}
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(10px)', // Adjust blur amount as needed
        }}
      />
    </div>
  );
};

export default BackgroundImage;
