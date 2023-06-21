import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
  const { products, removeProduct } = props;

  // const deleteProduct = (productId) => {
  //   axios.delete('http://localhost:8000/api/product/' + productId)
  //     .then(res => {
  //       removeProduct(productId)
  //     })
  //     .catch(err => console.error(err))
  // }

  return (
    <div>
      {products.map((product, i) => {
        return <p key={i}>
          <Link to={`/product/${product._id}`}>Title: {product.title}</Link>
          <br />
          {/* <button onClick={(e) => deleteProduct(product._id)}>Delete</button> */}
          <DeleteButton successCallback = { () => removeProduct(product._id)} />
        </p>
      })}
    </div>
  )
}

export default ProductList;