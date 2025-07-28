import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Lanches quentes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu
            title="Torta de Frango Cremosa"
            description="Torta recheada com frango desfiado, temperos e requeijão."
            photoUrl="/frango-cremoso.webp"
          />
        </div>
      </section>
    </main>
  );
};

export default entrada;
