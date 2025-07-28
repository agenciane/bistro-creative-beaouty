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
          <Link href={'salada'}>
            <HoverItem imageUrl="/salada.webp" title="Salada" />
          </Link>
        </div>
        <div>
          <Link href={'omeletes'}>
            <HoverItem imageUrl="/omelete.webp" title="Omeletes" />
          </Link>
        </div>
        <div>
          <Link href={'lanches-quentes'}>
            <HoverItem imageUrl="/frango-cremoso.webp" title="Lanches Quentes" />
          </Link>
        </div>
        <div>
          <Link href={'pratos-quentes'}>
            <HoverItem imageUrl="/pratos-quentes.webp" title="Pratos quentes" />
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
