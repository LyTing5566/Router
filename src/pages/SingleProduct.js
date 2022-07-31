import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  // productId 需要跟app.js設定的一致才會有用

  const product = products.find((product) => product.id === productId);
  const { image, name } = product;

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <Link to="/products">back to product</Link>
    </section>
  );
};

export default SingleProduct;

// const { image, name, id } = products.map((product) => {
//   return (
//     <div>
//       <p>{image}</p>
//     </div>
//   );
// });
// console.log(id, name, image);
// console.log(products);
// console.log(products[1]);
