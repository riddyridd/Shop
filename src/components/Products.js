import React, {useContext} from "react";
import {ProductsContext} from "../Global/ProductsContext";
import {CartContext} from "../Global/CartContext";
import Banner from "./Banner"
const Products = () => {
    const {products} = useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    return(
        <div className="container">
        <Banner />    
        <div className="products">
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <div className="cover">
                    <div className="product-image">
                        <img src={product.image} alt="not found" />
                    </div>
                    <div className="product-details">
                        <div className="product-name">
                          {product.name}
                        </div>
                        <div className="product-price">
                            ${product.price}.00
                        </div>
                    </div>
                    <div className="proButton" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>
                 <button className="buyNow" >add to cart</button>
               </div>
                {product.status === 'trending' ? <div className="trending">Trending</div> : ''}
            </div>
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;
