import './App.css';
import Catalogue from './components/Catalogue';
import Nav from './components/Nav';
import { useState} from 'react';


function App() {
  const [productType, setProductType] = useState("foundation")
  const [allCartQuantity, setAllCartQuantity] = useState();

  return (
    <>
      <header>
        <Nav navProductType={ navProductType => setProductType(navProductType)} totalCartItems={allCartQuantity} />
      </header>

      <main>
        <div className="wrapper">
          <Catalogue callProduct={productType} checkCartQuantity={(cartQuantity) => setAllCartQuantity(cartQuantity)}/>
        </div>
      </main>

      <footer>
        <p>Made by Tasnia Nabila and Kyle Wong 2021</p>
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
