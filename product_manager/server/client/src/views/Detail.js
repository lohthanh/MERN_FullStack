import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';

const Detail = (props) => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const {removeProduct} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err))
    }, [])

    // const deleteProduct = (productId) => {
    //   axios.delete('http://localhost:8000/api/product/' + productId)
    //     .then(res => {
    //       navigate('/product')
    //     })
    //     .catch(err => console.error(err))
    // }

  return (
    <div>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p><Link to={`/product/${product._id}/edit`}>Edit</Link></p>
        <p><Link to={`/product`}>Home</Link></p>
        {/* <button onClick={() => deleteProduct(product._id)}>Delete</button> */}
        <DeleteButton successCallback={removeProduct} />
    </div>
  )
}

export default Detail;