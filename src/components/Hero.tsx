export const Hero = () => {
  console.log('Hero component rendered');

  return (
    <section className="bg-gradient-to-r from-amber-800 to-amber-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Los Mejores Chocolates del Mundo
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descubre nuestra exquisita selección de chocolates artesanales, 
          elaborados con los mejores ingredientes y mucho amor.
        </p>
        <button className="bg-white text-amber-800 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 transition-colors">
          Explorar Productos
        </button>
      </div>
    </section>
  );
};