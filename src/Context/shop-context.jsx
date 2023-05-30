// context is used for replacing prop drilling , (keeping global states/functions/props here and to use them where ever we want in the code)

import React,{createContext,useState} from "react";
import { PRODUCTS } from "../Products";

export const ShopContext=createContext();  // create context is intialized here

// used to make default objects for products 
const getDefaultItems=()=>{
    let cart ={}
    for (let i = 1; i < PRODUCTS.length+1; i++) {
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider=(props)=>{

    {/*state for product count  */}
    const [cartItems,setCartItems]=useState(getDefaultItems()); 

    {/*function to calculate total amount*/}
    const getTotalAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=PRODUCTS.find((product)=>product.id===Number(item));
                totalAmount+=cartItems[item]*itemInfo.price;
            }
        }
        return totalAmount;
    }

    {/*functions to mainpluate cart items */}
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }

    const updateCartCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:newAmount}))
    }

    
    const contextValue={
        cartItems,
        addToCart,
        removeFromCart,
        updateCartCount,
        getTotalAmount
    }


    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
