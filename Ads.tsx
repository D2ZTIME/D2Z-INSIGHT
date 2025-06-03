import React from 'react';

const Ads: React.FC = () => {
  return (
    <section id="anuncios" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Espaço para Anúncios</h2>
          <p className="text-gray-600">Conheça nossos parceiros e ofertas especiais</p>
        </div>

        {/* Banner principal - editável */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 p-8">
                <span className="inline-block bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold mb-4">Parceiro em Destaque</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Título do Anúncio Principal</h3>
                <p className="mb-4">Descrição do anúncio com detalhes sobre a oferta especial ou produto em destaque. Este espaço é totalmente editável.</p>
                <a href="#" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition">
                  Saiba Mais
                </a>
              </div>
              <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-8">
                <div className="text-gray-500 text-center">
                  <p className="font-bold">Imagem do Anúncio</p>
                  <p className="text-sm">(300 x 250px)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Anúncios menores em grid - editáveis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <p className="font-bold">Anúncio {item}</p>
                  <p className="text-sm">(300 x 250px)</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Título do Anúncio {item}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Breve descrição do anúncio ou oferta especial. Este espaço é totalmente editável.
                </p>
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Ver Oferta →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner horizontal - editável */}
        <div className="mt-8 bg-gray-100 rounded-lg p-4 flex items-center justify-between">
          <div className="flex-1">
            <p className="font-bold">Banner Horizontal - 728x90</p>
            <p className="text-sm text-gray-500">Este espaço é reservado para anúncios de parceiros</p>
          </div>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm transition">
            Anuncie Aqui
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ads;
