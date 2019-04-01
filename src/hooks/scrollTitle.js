import { useEffect, useState } from 'react';

export const useScrollTitle = (titleContainerRef, titleRef, title, artist) => {
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    let animationFrame = null;

    const containerWidth = titleContainerRef.current.offsetWidth;
    const titleWidth = titleRef.current.offsetWidth;

    if (titleWidth < containerWidth) {
      setOffsetX(0);
    } else {
      const overflowX = titleWidth - containerWidth;

      const scroll = (frame = 0) => {
        const frequency =
          (frame / (overflowX * 1.15)) * (1 + overflowX * 0.005);
        const amplitude = overflowX;

        const nextOffsetX =
          (Math.sin(frequency) * 0.5 + 0.5) * amplitude * -1.0;

        setOffsetX(nextOffsetX);

        animationFrame = window.requestAnimationFrame(() => scroll(frame + 1));
      };

      scroll();
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [title, artist]);

  return offsetX;
};
