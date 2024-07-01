import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((product) => product.id === Number(id))
  );

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;