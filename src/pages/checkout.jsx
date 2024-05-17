import { useCart } from "../context/CartContext";

function Checkout() {
  const { cartItems } = useCart();

  return (
    <div className="bg-pink min-h-screen mx-auto">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Checkout
        </h1>

        <div className="mt-12">
          <h2 className="sr-only">Items in your cart</h2>

          <ul
            role="list"
            className="divide-y divide-gray-200 border-b border-t border-black"
          >
            {cartItems.map((product) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
                  />
                </div>

                <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div>
                    <div className="flex justify-between sm:grid sm:grid-cols-2">
                      <div className="pr-6">
                        <h3 className="text-sm">
                          <a
                            href={product.href}
                            className="font-medium text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                        {product.size ? (
                          <p className="mt-1 text-sm text-gray-500">
                            {product.size}
                          </p>
                        ) : null}
                      </div>

                      <p className="text-right text-sm font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="w-full mt-3 rounded-md border border-transparent bg-teal px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-dpurp focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2 focus:ring-offset-pink"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
