import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  console.log('Footer component rendered');

  return (
    <footer className="bg-amber-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🍫</div>
              <h3 className="text-xl font-bold">ChocolateDeluxe</h3>
            </div>
            <p className="text-amber-200 mb-4">
              Los mejores chocolates artesanales, elaborados con pasión y los ingredientes más finos.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 hover:text-amber-200 cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-amber-200 cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-amber-200 cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white">Inicio</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Productos</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-white">Chocolate Negro</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Chocolate con Leche</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Trufas</a></li>
              <li><a href="#" className="text-amber-200 hover:text-white">Bombones</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-amber-200">123 Calle del Chocolate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-amber-200">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-amber-200">info@chocolatedeluxe.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 ChocolateDeluxe. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};