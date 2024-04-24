import React from 'react';

// ButtonAni component with animation and event handlers
const ButtonAni = ({ onClick }) => {
  return (
    <button
      style={{
        // Button styles including padding, background color, text color, border, border radius, cursor, and transitions
        padding: '10px 20px',
        backgroundColor: 'rgba(100, 100, 100, 0.5)',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
        // Box shadow for a 3D effect
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',
      }}
      // Event handler for mouse enter
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'rgba(30, 30, 30, 0.8)'; // Darker background color on hover
        e.target.style.transform = 'scale(1.5)'; // Scale up the button on hover
      }}
      // Event handler for mouse leave
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'rgba(100, 100, 100, 0.5)'; // Restore original background color on mouse leave
        e.target.style.transform = 'scale(1)'; // Restore original scale on mouse leave
      }}
      // Event handler for mouse down
      onMouseDown={(e) => e.target.style.transform = 'scale(0.90)'} // Shrink the button on mouse down
      // Event handler for mouse up
      onMouseUp={(e) => e.target.style.transform = 'scale(1)'} // Restore original scale on mouse up
      onClick={onClick} // Click event handler
    >
      Reload
    </button>
  );
};

export default ButtonAni;
