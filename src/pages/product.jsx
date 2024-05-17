import { useParams } from 'react-router-dom';
import { products } from './shop';
import Purchase from '../components/purchase';
import { useCart } from '../context/CartContext';

function Product() {
  let { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main>
      <div className="flex flex-wrap justify-evenly bg-pink-50">
        <Purchase productId={productId} />
        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-pink-400 px-8 py-3 text-base font-medium text-white hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Add to cart
        </button>
        <img
          className="w-1/3 h-1/3 my-10 rounded-md"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
      </div>
    </main>
  );
}

export default Product;
