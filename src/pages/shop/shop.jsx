import { PRODUCTS } from "../../Products";
import { Product } from "./Product";
import "./shop.css"

export const Shop=()=>{
  return(
    <div className="shop">
            <div className="shopTitle">
                <h1>Shopping App</h1>
            </div>
            <div className="products">
              {/*rendering list for home  */}
             {PRODUCTS.map((product)=>(
              <Product data={product}/>
             ))}
            </div>
        </div>
  )
};
