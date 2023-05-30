// holds links to route through different pages..

import {Link} from 'react-router-dom';  // these are used instead of link tags 
import{BsCart3} from "react-icons/bs" ;
import "../styles/navbar.css";

export const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/">Shop</Link>
                <Link to="/cart"><BsCart3/></Link>
            </div>
        </div>
    )
};