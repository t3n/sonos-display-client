import { useState, useEffect } from 'react';

const updateRotation = (setRotateX, setRotateY) =>
  window.requestAnimationFrame(() => {
    const timestamp = Date.now();

    const nextRotateX = Math.sin(timestamp * 0.0005) * 5;
    const nextRotateY = Math.sin(timestamp * 0.0005 + 180) * 5;
    setRotateX(nextRotateX);
    setRotateY(nextRotateY);

    updateRotation(setRotateX, setRotateY);
  });

export const useRotation = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  useEffect(() => {
    updateRotation(setRotateX, setRotateY);
  }, []);

  return { rotateX, rotateY };
};
