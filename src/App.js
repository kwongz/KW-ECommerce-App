import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogue from './components/Catalogue';
import Nav from './components/Nav';
import { useState } from 'react';


function App() {
  const [productType, setProductType] = useState("foundation")
  console.log('render')

  // usestate that pass to NAV

  // function that has setState(cartitem)
    // above function is passed down catalogue 
  return (
    <>
      <header>
        <Nav navProductType={ navProductType => setProductType(navProductType)}/>
      </header>

      <main>
        <div className="wrapper">
          {/* <SideFilter productType={productType}/> */}
          <Catalogue callProduct={productType}/>
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
