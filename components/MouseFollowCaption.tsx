// MouseFollowCaption.tsx
import React from 'react';
import Figure from './Figure'; // Adjust the import path according to your project structure

interface MouseFollowCaptionProps {
  images: { src: string; alt: string }[];
}

const MouseFollowCaption: React.FC<MouseFollowCaptionProps> = ({ images }) => {
  return (
    <div className="flex justify-center items-center min-h-screen space-x-8">
      {images.map((image, index) => (
        <Figure key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default MouseFollowCaption;
