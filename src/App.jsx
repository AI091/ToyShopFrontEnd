import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/cart"  element= {<Cart/> }/>
      <Route path="/productlist"  element= {<ProductList/> }/>
      <Route path="/login"  element= {<Login/> }/>
      <Route path="/register"  element= {<Register/> }/>
      <Route path="/product/:id"  element= {<Product/> }/>
      <Route path="/"  element= {<Home/> }/>
    </Routes>
  </Router>
  )
};

export default App;