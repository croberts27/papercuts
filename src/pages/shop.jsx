/* eslint-disable react-refresh/only-export-components */
// imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
export const products = [
  {
    id: 1,
    name: "apocalypse at the state",
    href: "#",
    price: "$48",
    imageSrc: "/images/apocalypse-at-the-state.JPG",
    imageAlt:
      "apocalypse at the state is collage of donald trump with small hands and a tiny penis.",
  },
  {
    id: 2,
    name: "butterfly eyes",
    href: "#",
    price: "$35",
    imageSrc: "/images/butterfly-eyes.JPG",
    imageAlt: "butterfly with human eyes",
  },
  {
    id: 3,
    name: "crazy legs",
    href: "#",
    price: "$89",
    imageSrc: "/images/crazy-legs.PNG",
    imageAlt: "crazy legs smoking cig",
  },
  {
    id: 4,
    name: "dont talk to me",
    href: "#",
    price: "$35",
    imageSrc: "/images/dont-talk-to-me.JPG",
    imageAlt: "dont talk to me cactus",
  },
  {
    id: 5,
    name: "flower ladies",
    href: "#",
    price: "$35",
    imageSrc: "/images/flower-ladies.JPG",
    imageAlt: "flower ladies",
  },
  {
    id: 6,
    name: "lady-one-eye",
    href: "#",
    price: "$35",
    imageSrc: "/images/lady-one-eye-bw.PNG",
    imageAlt: "one eyed lady in b&w",
  },
  {
    id: 7,
    name: "no",
    href: "#",
    price: "$35",
    imageSrc: "/images/no.JPG",
    imageAlt: "no",
  },
  {
    id: 8,
    name: "seashell lady",
    href: "#",
    price: "$35",
    imageSrc: "/images/seashell-lady.JPG",
    imageAlt: "seashell lady",
  },
  {
    id: 9,
    name: "smokes",
    href: "#",
    price: "$35",
    imageSrc: "/images/smokes.JPG",
    imageAlt: "man smoking 5 cigs at once",
  },
  {
    id: 10,
    name: "space towel",
    href: "#",
    price: "$35",
    imageSrc: "/images/space-towel.JPG",
    imageAlt: "lady in space in a towel",
  },
  {
    id: 11,
    name: "tiddy ski",
    href: "#",
    price: "$35",
    imageSrc: "/images/tiddy-ski.JPG",
    imageAlt: "lady with tits out holding a pair of ski's",
  },
  {
    id: 12,
    name: "trippy screens",
    href: "#",
    price: "$39",
    imageSrc: "/images/trippy-screens.JPG",
    imageAlt: "crazy tv screens",
  },
];

function Shop() {
  const { addToCart } = useCart();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  return (
    <div className="bg-pink">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onMouseEnter={() => setHoveredProductId(product.id)}
              onMouseLeave={() => setHoveredProductId(null)}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-pink xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </Link>
              {hoveredProductId === product.id && (
                <button
                  onClick={() => addToCart(product)}
                  className="relative inset-0 flex items-center p-1 justify-center bg-dpurp rounded-sm bg-opacity-100 text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
