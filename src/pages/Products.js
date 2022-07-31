import { Link } from 'react-router-dom';
import products from '../data';

const Products = () => {
  return (
    <>
      <section className="section">
        {products.map((product) => {
          const { id, name } = product;
          return (
            <article>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Products;
