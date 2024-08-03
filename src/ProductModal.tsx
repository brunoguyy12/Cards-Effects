// ProductModal.tsx
import React, { useEffect, useState } from "react";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
  } | null;
  position: { top: number; left: number } | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  position,
  onClose,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (product && position) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [product, position]);

  if (!product || !position) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`absolute bg-white p-4 rounded-lg shadow-lg transition-transform duration-500 ${
          isAnimating ? "transform translate-x-0 translate-y-0 scale-100" : ""
        }`}
        style={{
          top: position.top,
          left: position.left,
          transformOrigin: "top left",
          transform: isAnimating
            ? "translate(-50%, -50%) scale(1)"
            : "translate(0, 0) scale(0.1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="w-full h-auto rounded-lg"
          src={product.image}
          alt={product.name}
        />
        <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{product.description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
