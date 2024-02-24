// export default Checkout;
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./shop";

function Product() {
  // Access the product ID from the URL params
  let { productId } = useParams();

  // Find the product object from the products array based on the ID
  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  // Check if product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main>
      <div className="flex flex-wrap items-end align-middle justify-evenly bg-pink-50">
        <h2 className="font-bold">Title: {product.name}</h2>
        <img
          className="w-1/3 h-1/3 my-10 "
          src={product.imageSrc}
          alt={product.imageAlt}
        />
        <p className="font-bold">Price: {product.price}</p>
        {/* Additional product details or purchase options can be added here */}
      </div>
    </main>
  );
}

export default Product;
