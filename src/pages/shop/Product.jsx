import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";


export const Product=(props)=>{
    const {id,productName,price,productImage}=props.data;

    const {addToCart, cartItems}=useContext(ShopContext);

    const noOfItems=cartItems[id];
    
    return(
        <div className="product">
            <img src={productImage} alt="Imagine an image here" />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>₹{price}</p>
                <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to Cart 
                {noOfItems>0 && <>({noOfItems})</>}</button>
            </div>
        </div>
    )
}