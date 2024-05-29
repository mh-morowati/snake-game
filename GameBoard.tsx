import React, { useState, useEffect, useRef } from 'react';
import Snake from './Snake';
import Food from './Food';


const GameBoard: React.FC = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 1, y: 0 });
  const [isGameOver, setIsGameOver] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      setSnake((prev) => {
        const newSnake = [...prev];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;
        newSnake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
          setFood({
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20),
          });
        } else {
          newSnake.pop();
        }
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 ||
            newSnake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)) {
          setIsGameOver(true);
          clearInterval(gameInterval);
        }
        return newSnake;
      });
    }, 200);

    return () => clearInterval(gameInterval);
  }, [direction, food]);

  if (isGameOver) return <div className="text-center mt-10">Game Over</div>;

  return (
    <div ref={boardRef} className="relative mt-12 mx-auto w-600 h-600 bg-gray-800">
      <Snake snake={snake} />
      <Food food={food} />
    </div>
  );
};

export default GameBoard;

