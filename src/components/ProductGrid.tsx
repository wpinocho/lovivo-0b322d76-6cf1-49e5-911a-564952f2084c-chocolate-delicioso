import { ProductCard } from './ProductCard';
import { Product } from '@/pages/Index';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: 1,
    name: "Chocolate Negro 70%",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
    description: "Intenso chocolate negro con 70% de cacao",
    category: "Negro"
  },
  {
    id: 2,
    name: "Chocolate con Leche",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=400&fit=crop",
    description: "Suave y cremoso chocolate con leche",
    category: "Con Leche"
  },
  {
    id: 3,
    name: "Chocolate Blanco",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=400&fit=crop",
    description: "Delicado chocolate blanco premium",
    category: "Blanco"
  },
  {
    id: 4,
    name: "Trufas Artesanales",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571197119282-7c4e2b2d7b4d?w=400&h=400&fit=crop",
    description: "Caja de 12 trufas artesanales variadas",
    category: "Trufas"
  },
  {
    id: 5,
    name: "Chocolate con Almendras",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
    description: "Chocolate negro con almendras tostadas",
    category: "Con Frutos Secos"
  },
  {
    id: 6,
    name: "Bombones Gourmet",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    description: "Selección de bombones gourmet premium",
    category: "Bombones"
  }
];

export const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  console.log('ProductGrid rendered with', products.length, 'products');

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-900">
          Nuestros Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};