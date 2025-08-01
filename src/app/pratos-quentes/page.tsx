import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Pratos quentes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu title="Medalhão de Mignon com risoto cremoso" photoUrl="/risoto-ia.webp" price="R$108" />
          <ItemMenu
            title="Fettuccine na manteiga e ervas com frango ou mignon"
            photoUrl="/fetutine-mignon.webp"
            price="105"
          />
          <ItemMenu
            title="Frango grelhado ao limão siciliano com risoto leve"
            photoUrl="/frango-grelhado-limao.webp"
            price="R$105"
          />
          <ItemMenu
            title="Frango grelhado ou mignon com arroz branco e feijão"
            photoUrl="/frango-grelhado-ia.webp"
            price="R$105"
          />
        </div>
      </section>
    </main>
  );
};

export default entrada;
