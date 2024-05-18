/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { products } from "../pages/shop";
import { useCart } from "../context/CartContext";

function Purchase({ productId }) {
  const { addToCart } = useCart();
  
  // Find the product object from the products array based on the ID
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  // Function to handle adding to cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="bg-teal min-h-screen flex justify-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2"></ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {product.price}
              </p>
            </div>

            <div className="mt-6 flex items-center">
              <p className="text-center text-md text-gray-800">
                In stock and ready to ship!
              </p>
            </div>
            <br></br>
            {/* Pass handleAddToCart as onClick handler */}
            <button
              type="button"
              onClick={() => handleAddToCart(product)}
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-dpurp px-8 py-3 text-base font-medium text-white hover:bg-pinker focus:outline-none focus:ring-2 focus:ring-pinker focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Add to cart
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
