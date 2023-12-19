import React from 'react';

const MyButton = () => {
  return (
    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded 
                       hover:bg-blue-700 
                       focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 
                       active:bg-blue-800">
      Click Me
    </button>
  );
};

export default MyButton;
