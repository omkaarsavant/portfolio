// Figure.tsx
import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
  stiffness: 200,
  damping: 20,
};

interface FigureProps {
  src: string;
  alt: string;
}

const Figure: React.FC<FigureProps> = ({ src, alt }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(0, springValues);
  const rotateY = useSpring(0, springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const ref = useRef<HTMLDivElement>(null);
  const [lastY, setLastY] = useState(0);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const div = ref.current;
    const rect = div.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -14;
    const rotationY = (offsetX / (rect.width / 2)) * 14;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  };

  function handleMouseEnter() {
    scale.set(1.1);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);

    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative flex h-[150px] sm:h-[300px] flex-col items-center justify-center overflow-hidden m-1"
      style={{
        perspective: "800px",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-4 text-center text-sm sm:hidden">
        
      </div>
      <motion.img
        src={src}
        alt={alt}
        style={{
          rotateX,
          rotateY,
          scale,
        }}
        className="h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] object-cover will-change-transform"
      />
    </figure>
  );
};

export default Figure;
