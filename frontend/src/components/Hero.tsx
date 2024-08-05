import React from 'react';
import backgroundImage from '../assets/29.jpg';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center bg-opacity-50 p-6 rounded">
        <h1 className='text-5xl text-white font-bold mb-4'>
          Find your next stay
        </h1>
        <p className='text-2xl text-white'>
          Search low prices on hotels for your dream vacation ...
        </p>
      </div>
    </div>
  );
}

export default Hero;
