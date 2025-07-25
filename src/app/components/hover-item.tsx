import React from 'react';
import Image from 'next/image';

interface HoverItemProps {
  title: string;
  imageUrl: string;
}

const HoverItem: React.FC<HoverItemProps> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full max-w-[600px] group">
      <Image src={imageUrl} alt={title} width={600} height={600} className="w-full h-auto object-cover" />

      <div
        className="absolute inset-0 flex items-center justify-center 
               bg-black/60 text-white transition-all duration-300 
               group-hover:bg-white group-hover:text-black"
      >
        <p className="text-xl font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default HoverItem;
