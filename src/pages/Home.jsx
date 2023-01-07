import React, { useEffect } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useState } from "react";

const Home = () => {
  const [products , setProducts] = useState(null); 

  useEffect(()=> {
    fetch("http://localhost:3000/items")
    .then(res =>{ 
      return res.json();
    })
    .then(data => {
      console.log(data);
      setProducts(data);  
     })
     .catch(e=> console.log(e.message));  
  }, []
  )

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      {/* <Categories /> */}
      {products && <Products products = {products} />}
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
