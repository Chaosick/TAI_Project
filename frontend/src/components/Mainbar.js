import React, { useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/Mainbar.css'


const Mainbar = () => {


    const [products, setProducts] = useState([]);
    const [showMe, setShowMe] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get('http://localhost:8000/items')
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className='item-container bg-dark'>
                {!showMe && products.map((product) => (
                    <div className='card' key={product.p_id}>
                        <img className='img-fix' src={product.preview} />
                        <h4>{product.name}</h4>
                        <h5>Cena: {product.price}zł</h5>
                        <div>
                            <button key={product.p_id} className="btn btn-outline-success" type="podglad" onClick={() => setShowMe(true)}>Podgląd</button>
                        </div>
                        {
                            showMe &&
                            <div className='product' onClick={() => setShowMe(false)}>
                                <img className='img-fix' src={product.preview} />
                                <h4>{product.name}</h4>
                                <h5>Cena: {product.price}zł</h5>
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mainbar;