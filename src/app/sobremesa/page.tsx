import React from 'react';
import ItemMenu from '../components/item-menu';

const entrada: React.FC = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        <div className="flex items-center">
          <h2 className="text-5xl uppercase leading-16">Sobremesa</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ItemMenu title="Bolo de cenoura com calda cremosa de chocolate" photoUrl="/bolo-de-cenoura.webp" />
          <ItemMenu title="Brownie caseiro" photoUrl="/brownie.webp" />
          <ItemMenu title="Petit gâteau" photoUrl="/petit-gateou.webp" price="R$50" />
          <ItemMenu title="Mini cheesecake de frutas vermelhas" photoUrl="/cheecacke.webp" />
          <ItemMenu title="Salada de frutas na taça" photoUrl="/salada-de-fruta.webp" />
        </div>
      </section>
    </main>
  );
};

export default entrada;
