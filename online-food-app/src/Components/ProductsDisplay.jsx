import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import ProductCard from "./ProductCard";

import "../CSS/ProductsDisplay.css";

class ProductsDisplay extends React.Component {

    state = {
        products: []
    }

    // put the url in a config file
    componentDidMount() {
        fetch("http://localhost:8080/products/" + this.props.product.toLowerCase())
            .then(res => res.json())
            .then(data => {
                this.setState({ products: data })
            })
    }

    displayProductsFetched = () => {
        return this.state.products.map(product => {
            return <ProductCard
                key={product.productId}
                productName={product.productName}
                quantity={product.quantity}
                price={product.productPrice}
                productImg={product.imageUrl} 
                category={this.props.product}/>
        })
    }

    render() {
        return (
            <div>
                <MDBContainer className="product-overall-alignment">
                    <h6 className="display-6 product-heading">{this.props.product} Category</h6>
                    {this.displayProductsFetched()}
                </MDBContainer>

            </div>
        );
    }

}

export default ProductsDisplay;