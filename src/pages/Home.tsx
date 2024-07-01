import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;