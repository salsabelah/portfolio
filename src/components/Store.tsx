
import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Botanical Art Print Set",
      description: "Collection of 4 minimalist botanical illustrations",
      price: "$35",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      rating: 5,
      category: "Prints"
    },
    {
      id: 2,
      name: "Abstract Geometric Poster",
      description: "Modern geometric art for contemporary spaces",
      price: "$25",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      rating: 5,
      category: "Prints"
    },
    {
      id: 3,
      name: "Custom Brand Package",
      description: "Complete branding solution for your business",
      price: "$299",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
      rating: 5,
      category: "Services"
    },
    {
      id: 4,
      name: "Typography Poster Collection",
      description: "Inspirational quotes in beautiful typography",
      price: "$45",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
      rating: 5,
      category: "Prints"
    }
  ];

  return (
    <section id="store" className="py-32 bg-gradient-to-br from-violet-50/30 to-slate-50">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="text-5xl lg:text-6xl font-extralight text-slate-800 mb-8 tracking-tight">
            Art Store
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Beautiful prints and design services to bring creativity into your space and brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden group border border-slate-100"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-600 px-3 py-1 rounded-full text-xs font-light tracking-wide">
                    {product.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-violet-300 text-violet-300" />
                  ))}
                </div>
                
                <h3 className="text-lg font-light text-slate-800 tracking-wide">
                  {product.name}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-xl font-light text-slate-800 tracking-wide">
                    {product.price}
                  </span>
                  <button className="bg-violet-100 hover:bg-violet-200 text-violet-600 p-2 rounded-full transition-colors duration-300">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="bg-violet-200 hover:bg-violet-300 text-violet-700 px-12 py-4 rounded-full transition-all duration-500 transform hover:scale-[1.02] font-light shadow-sm hover:shadow-md tracking-wide">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Store;
