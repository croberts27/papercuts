import Cart from "../components/cart";

function Checkout() {
  return (
    <div className="bg-pink-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        <div className="">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
