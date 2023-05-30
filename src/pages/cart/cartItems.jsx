import { ShopContext } from "../../Context/shop-context";
import { useContext } from "react";

export const ItemsInCart=(props)=>{

    const {id,productName, price,productImage}=props.data;

    const {cartItems,addToCart,removeFromCart,updateCartCount}=useContext(ShopContext);
    
    return(
        <div className="cartItem"> 
            <img src= {productImage} alt="alternate Image here"/>
            <div className="description">
                <p> <b>{productName}</b> </p>
                <p>₹{price}</p>
                <div className="countHandler">
                    <button onClick={()=>removeFromCart(id)}> - </button>
                    <input type="text" value={cartItems[id]} onChange={(e)=>updateCartCount(Number(e.target.value),id)} />
                    <button onClick={()=>addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};