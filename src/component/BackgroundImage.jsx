// BackgroundImage component
import React from 'react';

const BackgroundImage = ({ imageUrl }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'auto',
        left: 'auto',
        width: '90%',
        height: '90%',
        // margin:'20px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:'15px',
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
