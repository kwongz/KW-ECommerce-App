import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogue from './components/Catalogue';
import Nav from './components/Nav';
import { useState } from 'react';
import TotalCartItem from './components/TotalCartItem';


function App() {
  const [productType, setProductType] = useState("foundation")
  const [allCartQuantity, setAllCartQuantity] = useState();

  // usestate that pass to NAV

  // function that has setState(cartitem)
    // above function is passed down catalogue
    
  console.log(allCartQuantity);
  return (
    <>
      <header>
        <Nav navProductType={ navProductType => setProductType(navProductType)} />
        <TotalCartItem totalCartItems={allCartQuantity}/>
      </header>

      <main>
        <div className="wrapper">
          {/* <SideFilter productType={productType}/> */}
          <Catalogue callProduct={productType} checkCartQuantity={(cartQuantity) => setAllCartQuantity(cartQuantity)}/>
        </div>
      </main>

      <footer>
        <p>Made by Tasnia Nabila and Kyle Is Stupid 2021</p>
      </footer>
    </>
  );
}

export default App;

  // MVPS
// Make api call to get all foundations check
// clicking on a product will display more information
// have a cart where user can add the products

  // Stretch goals
// add more options to the store
// add filtering for products
// add routing
// portals for pop-ups
// shipping option
// add to wishlist 
  // auth (firebase)
  // guest login (local storage)
// process card (maybe)
