import React from 'react';
import Image from 'next/image';

interface ItemMenuProps {
  title: string;
  description?: string;
  price?: string;
  photoUrl: string;
}

const ItemMenu: React.FC<ItemMenuProps> = ({ title, description, price, photoUrl }) => {
  return (
    <div>
      <Image src={photoUrl} alt={title} width={300} height={300} className="w-full h-auto object-cover" />
      <h3 className="text-xl uppercase border-b border-white py-2">{title}</h3>
      {description && <p className="py-4">{description}</p>}
      {price && (
        <div className="flex justify-between items-center">
          <div>{price}</div>
          <div className="text-xs">+10% taxa do garçom.</div>
        </div>
      )}
    </div>
  );
};

export default ItemMenu;
