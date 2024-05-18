import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartIcon() {
  const { cartItems, isCartOpen, toggleCart, removeFromCart } = useCart();

  return (
    <div className="relative">
      <button onClick={toggleCart} className="relative">
        <svg
          className="w-8 h-8 text-black"
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

      {isCartOpen && (
        <div className="absolute right-0 mt-5 w-64 bg-dpurp border border-black rounded-lg shadow-lg">
          <div className="p-4">
            {cartItems.length > 0 ? (
              <ul>
                {cartItems.map((item) => (
                  <li
                    key={item.cartItemId}
                    className="flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty</p>
            )}
            <Link
              to="/checkout"
              className="block mt-4 text-center border-black bg-teal text-black py-2 hover:bg-mgreen shadow-2xl rounded-lg"
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
