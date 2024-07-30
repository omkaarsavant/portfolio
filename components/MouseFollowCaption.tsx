// MouseFollowCaption.tsx
import React from 'react';
import Figure from './Figure'; // Adjust the import path according to your project structure

interface MouseFollowCaptionProps {
  images: { src: string; alt: string }[];
}

const MouseFollowCaption: React.FC<MouseFollowCaptionProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 p-24">
      {images.map((image, index) => (
        <Figure key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

export default MouseFollowCaption;
