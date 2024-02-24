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
    <div>
      <h2>{product.name}</h2>
      <img src={product.imageSrc} alt={product.imageAlt} />
      <p>{product.price}</p>
      {/* Additional product details or purchase options can be added here */}
    </div>
  );
}

export default Product;

// function Checkout() {
//   return (
//     <main>
//       <section className="relative block" style={{ height: "500px" }}>
//         <div className="absolute top-0 w-full h-full bg-center bg-cover bg-pink-50"></div>
//       </section>
//       <section className="relative py-16 bg-pink-50">
//         <div className="container mx-auto">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-80">
//             <div className="px-6">
//               <div className="flex flex-wrap justify-center">
//                 <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
//                 <div className="w-full lg:w-4/12 xl:w-1/6 px-4 lg:order-3 lg:text-right lg:self-center">
//                   <div className="py-6 px-3 mt-32 sm:mt-0"></div>
//                 </div>
//                 <div>
//                   <div className="wrapper">
//                     <div className="product-info">
//                       <div className="product-text"></div>
//                       <div className="product-price-btn">
//                         <br></br>
//                         <button
//                           className="add-btn border-none bg-logo-pink rounded-lg text-black font-[700] py-6 px-6 mb-8 md:text-[14px] transition-all btn-shadow hover:opacity-50"
//                           type="submit"
//                         >
//                           Buy now
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <br></br>
//                 </div>

//                 <div className="w-full flex justify-center text-center items-center">
//                   <div className="flex justify-center py-4 lg:pt-4 pt-8 flex-wrap items-center text-center">
//                     <div className="mr-4 p-3 text-center">
//                       <div className="flex  justify-center">
//                         <div className="w-full lg:w-9/12 px-4">
//                           <div className="text-center mt-12">
//                             <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2"></h3>

//                             <div className="mb-2 text-logo-black mt-10"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
