'use client';

import Link from 'next/link';

export default function Cart() {

  const handleUpdateQuantity = (productId, quantity) => {
    //TODO: Update quantity
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {[1, 2, 3].map((product) => (
          <li key={product} className="flex justify-between items-center">
            <span className="text-lg">Product - $100</span>
            <div className="flex items-center">
              <button
                onClick={() => handleUpdateQuantity()}
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
              >
                -
              </button>
              <span className="mx-2">0</span>
              <button
                onClick={() => handleUpdateQuantity()}
                className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {}}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link href="/products" className="text-blue-500 hover:underline text-lg">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
