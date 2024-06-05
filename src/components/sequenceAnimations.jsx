import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

// Import your Lottie animation JSON files
import animation1 from '../utils/lottie/globe.json';
import animation2 from '../utils/lottie/manpc.json';
import animation3 from '../utils/lottie/success.json';

const animations = [animation1, animation2, animation3];

const Sequence = () => {
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);

  useEffect(() => {
    // Set a timer to switch animations
    const interval = setInterval(() => {
      setCurrentAnimationIndex(prevIndex => (prevIndex + 1) % animations.length);
    }, 3000); // Change animation every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {animations.map((animation, index) => (
        <div
          key={index}
          style={{ display: currentAnimationIndex === index ? 'block' : 'none' }}>
          <Lottie animationData={animation} loop={false} />
        </div>
      ))}
    </div>
  );
};

export default Sequence;
