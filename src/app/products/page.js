"use client";

import Link from "next/link";
import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

export default function Products() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupProductName, setPopupProductName] = useState("");

  const handleAddToCart = (product) => {
    //TODO: Add to cart
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ul className="space-y-4">
        {products.map((product) => (
          <li key={product.id} className="flex justify-between items-center">
            <span className="text-lg">
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
          {popupProductName} added to cart!
        </div>
      )}
      <div className="mt-8">
        <Link href="/cart" className="text-blue-500 hover:underline text-lg">
          Go to Cart
        </Link>
      </div>
    </div>
  );
}
