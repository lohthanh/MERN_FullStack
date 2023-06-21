import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

const Update = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, [])

    const updateProduct = (product) => {
        axios.patch('http://localhost:8000/api/product/' + id, product)
            .then(res => {console.log(res)
                navigate('/product')})
            .catch(err => console.error(err));
    }


  return (
    <div>
        <h1>Update a Product</h1>
    {loaded && (<ProductForm onSubmitProp={updateProduct} initialTitle={product.title} initialPrice={product.price} initialDescription={product.description} />)}
    </div>
  )
}

export default Update