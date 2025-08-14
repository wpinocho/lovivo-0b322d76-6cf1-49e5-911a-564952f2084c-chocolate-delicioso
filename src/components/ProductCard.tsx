import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/pages/Index';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  console.log('ProductCard rendered for:', product.name);

  const handleAddToCart = () => {
    console.log('Add to cart clicked for:', product.name);
    onAddToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
        <div className="absolute top-4 left-4 bg-amber-600 text-white px-2 py-1 rounded text-sm">
          {product.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            ${product.price}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>
  );
};