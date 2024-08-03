// App.tsx
import React, { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description 1",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description 2",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Description 3",
    image: "https://via.placeholder.com/150",
  },
];

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<{
    id: number;
    name: string;
    description: string;
    image: string;
  } | null>(null);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    product: { id: number; name: string; description: string; image: string }
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalPosition(null);
  };

  return (
    <div
      className="relative flex flex-wrap justify-center items-center gap-5 h-screen"
      ref={containerRef}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onClick={(e) => handleCardClick(e, product)}
        />
      ))}
      <ProductModal
        product={selectedProduct}
        position={modalPosition}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;
