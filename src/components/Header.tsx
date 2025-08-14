import { ShoppingBag, Heart } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header = ({ cartItemsCount, onCartClick }: HeaderProps) => {
  console.log('Header rendered with cart items:', cartItemsCount);

  return (
    <header className="bg-amber-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🍫</div>
            <h1 className="text-2xl font-bold">ChocolateDeluxe</h1>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-amber-200 transition-colors">Inicio</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Productos</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Sobre Nosotros</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Contacto</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="hover:text-amber-200 transition-colors">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={onCartClick}
              className="relative hover:text-amber-200 transition-colors"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};