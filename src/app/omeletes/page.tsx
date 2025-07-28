import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Omeletes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu
            title="Omelete Tradicional"
            description="Recheado com queijo, presunto, tomate e cebola."
            photoUrl="/omelete.webp"
          />
          <ItemMenu
            title="Omelete Fit"
            description="Preparado com claras, frango desfiado e ervas finas."
            photoUrl="/omeletfit.webp"
          />
        </div>
      </section>
    </main>
  );
};

export default entrada;
