import { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/shop-context";
import {ItemsInCart} from "./cartItems"
import { useNavigate } from "react-router-dom";
import "./cart.css"


export const Cart=()=>{
    const {cartItems,getTotalAmount} =useContext(ShopContext)

    const totalAmount=getTotalAmount();
      {/* used for navigation to shop page */}
    const navigate=useNavigate(); 


   return(
        <div className="cart">
            <div >
                <h1>Your Cart Items</h1>
            </div>
            <div className="cart">
                {/* rendering list in cart */}
                {PRODUCTS.map((product)=>{
                    if(cartItems[product.id]!==0){
                       return <ItemsInCart data={product} /> 
                    }
                })}
            </div>
     {totalAmount>0 ?
            <div className="checkout">
                <p>SubTotal: ₹{totalAmount}</p>
                <button onClick={()=>navigate("/")}>Continue Shopping</button>
                <button>CheckOut</button>
            </div>
        :<h1 className="emptyCart">Your Cart is Empty <small>add some Products</small> </h1> }
        </div>
    )
};

