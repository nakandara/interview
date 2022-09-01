import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import ProductComponent from './ProductComponent'
import { setProducts } from '../redux/actions/productActions'
import axios from 'axios'

const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Erre", err)
            });
        console.log(response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    console.log(products);
    return (
        <div className='ui grid container' style={{ margin: 20 }}>
            <ProductComponent />
        </div>
    )
}

export default ProductListing
