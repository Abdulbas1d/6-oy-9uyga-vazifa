import React, { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { api } from '../../axios'

function Products() {
    const [products, setProduts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        api.get("api/products")
            .then(response => {
                if (response.status == 200) {
                    setProduts(response.data.data)
                }
            })

            .catch(error => {
                console.log(error);
            })
    }, [])

    function handleId(id) {
        navigate(`/products/${id}`)
    }

    return (
        <div className="containerProducts">
            {
                products.length > 0 && products.map(function (product, index) {
                    return (
                        <div onClick={() => { handleId(product.id) }} key={index} className="card">
                            <img src={product.attributes.image} alt="" />
                            <h4>{product.attributes.title}</h4>
                            <h5>${product.attributes.price}</h5>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
