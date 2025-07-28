import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Entradas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu
            title="TOAST TRADICIONAL"
            description="Pão ciabatta, queijo muçarela, peito de peru e catupiry."
            photoUrl="/prato-exemplo.webp"
            price="R$55"
          />
          <ItemMenu
            title="TOAST TRADICIONAL"
            description="Pão ciabatta, queijo muçarela, peito de peru e catupiry."
            photoUrl="/prato-exemplo.webp"
            price="R$55"
          />
          <ItemMenu
            title="TOAST TRADICIONAL"
            description="Pão ciabatta, queijo muçarela, peito de peru e catupiry."
            photoUrl="/prato-exemplo.webp"
            price="R$55"
          />
        </div>
      </section>
    </main>
  );
};

export default entrada;
