import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <main>
        <section className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 p-8">
            <h2 className="text-5xl font-thin leading-16">
              Elegância nos detalhes. Uma curadoria leve e autoral, assinada pelo nosso chef. Aproveite a experiência
              Creative.
            </h2>
            <div className="max-w=[300px] w-[300px] mt-4">
              <a href="#" className="text-center">
                <div className="bg-white text-black p-4 uppercase">Visualizar Menu</div>
              </a>
            </div>
          </div>
          <div className="w-1/2">
            <Image src="/bife-capa.webp" alt="Prato do bistro" width={800} height={300} className="w-full" />
          </div>
        </section>
      </main>
    </div>
  );
}
