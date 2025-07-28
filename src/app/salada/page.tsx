import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Salada</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu
            title="Salada de Frango Grelhado"
            description="Mix de folhas frescas, frango grelhado, tomatinhos, lascas de parmesão e molho de mostarda e mel."
            photoUrl="/frango-grelhado.webp"
          />
          <ItemMenu
            title="Salada Caesar"
            description="Folhas nobres, frango desfiado, croutons, parmesão e molho caesar artesanal."
            photoUrl="/salada-ceaser.webp"
          />
        </div>
      </section>
    </main>
  );
};

export default entrada;
