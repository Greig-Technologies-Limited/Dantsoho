import React, { useState, useEffect } from 'react';
import './SpinT.css';
import spin from '../../assets/dantsoho.png';

function SpinT() {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle(rotationAngle + 1); // Adjust the speed of rotation by changing the increment value
    }, 50); // Adjust the interval duration for the speed of rotation

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [rotationAngle]);

  return (
    <div className="Ap">
      
      <div className="image-container" style={{ transform: `rotateY(${rotationAngle}deg)` }}>
        <img className='yay'
          src={spin}
          alt="Rotating"
        />
      </div>
    </div>
  );
}

export default SpinT;