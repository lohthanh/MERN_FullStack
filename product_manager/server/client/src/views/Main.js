import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// export default () => {
//     const [message, setMessage] = useState("Loading...")
//     useEffect(() => {
//         axios.get("http://localhost:8000/api/")
//             .then(res => setMessage(res.data.message))
//             .catch(err => console.log(err))
//     }, []);
//     return (
//         <div>
//             <h2>Message from the backend: {message}</h2>
//         </div>
//     )
// }
const Main = (props) => {
    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
              
            })
            .catch(err => console.error(err));
    }, []);

    const removeProduct = productId => {
        axios.delete('http://localhost:8000/api/product/' + productId)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
    setProducts(products.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProducts([...products, res.data])
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle='' initialPrice='' initialDescription='' />
            <hr />
            <ProductList products={products} removeProduct={removeProduct} />
        </div>
    )

}

export default Main;