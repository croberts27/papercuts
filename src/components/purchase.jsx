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

  return (
    <>
      <div className="bg-pink-50">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
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
              <button
                type="button"
                onClick={() => addToCart(product)}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-400 px-8 py-3 text-base font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Add to cart
              </button>
            </section>
          </div>
          {/* Product image */}
          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Purchase;
