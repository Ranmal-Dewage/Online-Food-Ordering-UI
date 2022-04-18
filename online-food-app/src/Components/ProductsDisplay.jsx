import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import ProductCard from "./ProductCard";

import "../CSS/ProductsDisplay.css";
import { useLocation } from "react-router-dom";

function withLocation(Component) {
    return props => <Component {...props} location={useLocation()} />;
}

class ProductsDisplay extends React.Component {

    state = {
        products: []
    }

    // put the url in a config file
    componentDidMount() {

        if (this.props.product) {
            fetch("http://localhost:8081/api/v1/products/categories/" + this.props.product.toLowerCase())
                .then(res => res.json())
                .then(data => {
                    this.setState({ products: data })
                });
        } else {
            fetch("http://localhost:8081/api/v1/products/search?value=" + this.props.location.state.value)
                .then(res => res.json())
                .then(data => {
                    this.setState({ products: data })
                });
        }

    }

    displayProductsFetched = () => {
        return this.state.products.map(product => {
            return <ProductCard
                key={product.productId}
                productName={product.productName}
                quantity={product.quantity}
                price={product.productPrice}
                productImg={product.imageUrl}
                category={this.props.product} />
        })
    }

    render() {
        return (
            <div>
                <MDBContainer className="product-overall-alignment">
                    {this.props.product ?
                        <h6 className="display-6 product-heading">{this.props.product} Category</h6> :
                        <h6 className="display-6 product-heading">Products for Search Value : {this.props.location.state.value}</h6>}
                    {this.displayProductsFetched()}
                </MDBContainer>

            </div>
        );
    }

}

export default withLocation(ProductsDisplay);