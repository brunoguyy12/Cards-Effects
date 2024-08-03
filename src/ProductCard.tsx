// ProductCard.tsx
import React from "react";

interface ProductCardProps {
  product: { id: number; name: string; description: string; image: string };
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div
      className="product-card w-52 p-5 border border-gray-300 rounded-lg text-center cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="mt-1 text-sm text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductCard;
