import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { add_product } from "../actions/add";

const Home = ({ products, add_product }) => {
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);

    const productsPerPage = 12;

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${productsPerPage}&page=${currentPage}`, {
            headers: {
                'app-id': 'Ma super boutique' // Remplacez "your-app-id" par votre ID d'application
            }
        })
        .then(response => response.json())
        .then(data => {
            setProductData(data.products);
            setTotalProducts(data.total);
        })
        .catch(error => console.log(error));
    }, [currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    
    return (
        <div>
            <h1>Produits</h1>
            <ul className="products">
                {productData && productData.map(product => (
                    <li key={product.id}>
                        {product.title} - {product.price}€ <br />
                        <img src={product.thumbnail} alt={product.title} /> <br/>
                        <button onClick={() => add_product(product)}>Ajouter</button>
                    </li>
                ))}
            </ul>
    
            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Page précédente</button>
                <button onClick={handleNextPage} disabled={currentPage * productsPerPage >= totalProducts}>Page suivante</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_product: (product) => dispatch(add_product(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
