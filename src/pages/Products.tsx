import React from 'react';
import ProductCard from '../components/ProductCard'; // Adjust path if needed
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import product3 from '../assets/product3.jpeg';

const Products: React.FC = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Diamonds</h2>

      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <ProductCard 
            title="Brilliant Blue Diamond" 
            image={product1} 
            description="Our advanced HPHT process brings out intense blue hues in natural diamonds."
          />
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <ProductCard 
            title="Vivid Yellow Diamond" 
            image={product2} 
            description="Our HPHT technology creates stunning yellow diamonds with exceptional brilliance."
          />
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4 d-flex justify-content-center">
          <ProductCard 
            title="Fancy Pink Diamond" 
            image={product3} 
            description="Experience the rare beauty of enhanced pink diamonds, achieved through HPHT."
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
