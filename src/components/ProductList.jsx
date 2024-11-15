import React from 'react';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product 1', price: '$20', img: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: '$30', img: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: '$40', img: 'https://via.placeholder.com/200' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-semibold mb-6">Latest Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded" />
              <h4 className="mt-2 text-xl font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;