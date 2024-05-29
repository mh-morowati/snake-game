import React from 'react';

interface FoodProps {
  food: { x: number, y: number };
}

 const Food: React.FC<FoodProps> = ({ food }) => {
  return (
    <div
      className="absolute bg-red-500 w-30 h-30"
      style={{
      
        left: `${food.x * 30}px`,
        top: `${food.y * 30}px`
      }}
    />
  );
};

 
export default Food;
