import React from 'react';
import HoverItem from '../components/hover-item';

const Menu: React.FC = () => {
  return (
    <main className="grid md:grid-cols-2 gap-4 p-8">
      <div className="flex items-center">
        <h2 className="text-6xl font-bold leading-16">ENCONTRE O QUÊ VOCÊ DESEJA.</h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <HoverItem imageUrl="/entrada.webp" title="Entrada" />
        </div>
        <div>
          <HoverItem imageUrl="/prato-principal.webp" title="Prato Principal" />
        </div>
        <div>
          <HoverItem imageUrl="/bebidas.webp" title="Bebidas" />
        </div>
        <div>
          <HoverItem imageUrl="/sobremesa.webp" title="Sobremesa" />
        </div>
      </div>
    </main>
  );
};

export default Menu;
