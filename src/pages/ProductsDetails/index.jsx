import React, { useEffect, useState } from 'react'
import './index.css'
import tableOne from '../../assets/images/tableOne.webp'
import { useParams } from 'react-router-dom'
import { api } from '../../axios'

function ProductsDetails() {
    const [products, setProducts] = useState({})
    const { id } = useParams()

    useEffect(() => {
        api.get(`api/products/${id}`)
            .then(response => {
                if (response.status == 200) {
                    setProducts(response.data.data)
                }
            })

            .catch(error => {
                console.log(error);
            })
    }, [id])

    return (
        products.id && (
            <div className='wrapper'>
                <div className="top">
                    <button>Home</button>
                    <p>{'>'}</p>
                    <button>Products</button>
                </div>

                <div className="wrapperData">
                    <img src={products.attributes.image} alt="" />

                    <div className="wrapper-right">
                        <h3>{products.attributes.title}</h3>
                        <h5>{products.attributes.brand}</h5>
                        <p className='price'>${products.attributes.price}</p>

                        <p className='desc'>{products.attributes.description}</p>

                        <h5 className='color'>Colors</h5>

                        <div className="btns">
                            <button className='blueB'></button>
                            <button className='yellowB'></button>
                            <button className='redB'></button>
                            <button className='greenB'></button>
                        </div>

                        <label htmlFor="amount">
                            Amount
                            <select name='amount' id="amount">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                            </select>
                        </label>
                        <button className='add'>ADD TO BAG</button>
                    </div>
                </div>
            </div>
        )
    )
}

export default ProductsDetails
