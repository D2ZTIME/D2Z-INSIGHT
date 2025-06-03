import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  // Imagens baseadas nos produtos reais do blog
  const images = [
    {
      id: 1,
      src: 'https://via.placeholder.com/800x500?text=Maleta+de+Ferramentas',
      alt: 'Maleta de Ferramentas Com Alça Grande',
      caption: 'Organização e Praticidade para Profissionais e Amantes do "Faça Você Mesmo"'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/800x500?text=Mochila+Executiva',
      alt: 'Mochila Expansível Executiva de Nylon',
      caption: 'Funcionalidade, Conforto e Estilo em Um Só Produto'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/800x500?text=Smartwatch+Xiaomi',
      alt: 'Smartwatch Xiaomi Mi Band 9 Active',
      caption: 'O Companheiro Perfeito para um Estilo de Vida Ativo'
    }
  ];

  return (
    <section id="galeria" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria de Produtos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira imagens dos nossos produtos mais populares e veja como eles podem transformar seu dia a dia.
          </p>
        </div>

        {/* Galeria com controles de navegação */}
        <div className="relative">
          {/* Controles de navegação */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full">
            <ChevronLeft size={24} />
          </button>
          
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full">
            <ChevronRight size={24} />
          </button>

          {/* Imagem principal */}
          <div className="relative">
            <img 
              src={images[0].src} 
              alt={images[0].alt} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
              <p className="text-lg font-semibold">{images[0].caption}</p>
            </div>
          </div>

          {/* Miniaturas */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className={`w-20 h-20 rounded-md overflow-hidden cursor-pointer border-2 ${index === 0 ? 'border-green-500' : 'border-transparent'}`}
              >
                <img 
                  src={image.src} 
                  alt={`Miniatura ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Grade de imagens adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-auto transition-transform hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
