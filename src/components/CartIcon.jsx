// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartIcon() {
  const { cartItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="relative">
        <svg
          className="w-8 h-8 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L6.6 15H17m-1 4h-4m0 0h-4m4 0v-4m0 4v-4M7 7h.01M7 7h.01M7 7h.01M7 7h.01M7 7h.01"
          />
        </svg>
        {cartItems.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg bg-dpurp shadow-lg">
          <div className="p-4">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty</p>
            )}
            <Link
              to="/checkout"
              className="block mt-4 text-center bg-teal text-white py-2 rounded-lg"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartIcon;
