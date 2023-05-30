// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Navbar }from "./Components/navbar";
import {Cart} from "./pages/cart/cart";
import {Shop} from "./pages/shop/shop";
import { ShopContextProvider } from './Context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Shop />}/>
            <Route path='/cart' exact element={<Cart />}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
