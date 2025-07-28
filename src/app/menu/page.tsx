import React from 'react';
import HoverItem from '../components/hover-item';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <main className="grid md:grid-cols-2 gap-4 p-8">
      <div className="flex items-center">
        <h2 className="text-6xl font-bold leading-16">ENCONTRE O QUÊ VOCÊ DESEJA.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Link href={'entrada'}>
            <HoverItem imageUrl="/entrada.webp" title="Entrada" />
          </Link>
        </div>
        <div>
          <Link href={'prato-principal'}>
            <HoverItem imageUrl="/prato-principal.webp" title="Prato Principal" />
          </Link>
        </div>
        <div>
          <Link href={'bebidas'}>
            <HoverItem imageUrl="/bebidas.webp" title="Bebidas" />
          </Link>
        </div>
        <div>
          <Link href={'sobremesa'}>
            <HoverItem imageUrl="/sobremesa.webp" title="Sobremesa" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Menu;
