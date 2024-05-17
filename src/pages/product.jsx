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

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <main>
      <div className="flex flex-wrap justify-evenly bg-teal">
        <Purchase productId={productId} />
        <img
          className="w-1/3 h-1/3 my-10 rounded-md shadow-2xl"
          src={product.imageSrc}
          alt={product.imageAlt}
        />
      </div>
    </main>
  );
}

export default Product;
