import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, description }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', width: '100%', maxWidth: '300px', margin: 'auto' }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }} />
      <h3 style={{ fontSize: '20px', margin: '16px 0 8px', textAlign: 'center' }}>{title}</h3>
      <p style={{ fontSize: '14px', color: '#555', textAlign: 'center' }}>{description}</p>
    </div>
  );
};

export default ProductCard;
