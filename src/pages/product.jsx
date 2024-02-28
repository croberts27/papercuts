import { useParams } from "react-router-dom";
import { products } from "./shop";
import Purchase from "../components/purchase";

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
      <div className="flex flex-wrap  justify-evenly bg-pink-50">
        <Purchase productId={productId} />
        <img
          className="w-1/3 h-1/3 my-10 "
          src={product.imageSrc}
          alt={product.imageAlt}
        />
      </div>
    </main>
  );
}

export default Product;
