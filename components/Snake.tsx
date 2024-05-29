import React from 'react';

interface SnakeProps {
  snake: { x: number, y: number }[];
}

 const Snake: React.FC<SnakeProps> = ({ snake }) => {
  return (
    <>
      {snake.map((segment, index) => (
        <div
          key={index}
          className='absolute bg-green-500 w-30 h-30'
          style={{
            left: `${segment.x * 30}px`,
            top: `${segment.y * 30}px`
          }}
        />
      ))}
    </>
  );
};

 
export default Snake;
