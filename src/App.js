import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayMakeup from './components/DisplayMakeup';

function App() {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    axios({
      url: 'http://makeup-api.herokuapp.com/api/v1/products.json',
      params: {
        product_type: 'foundation'
      }
    }).then((res) => {
      setMakeup(res.data);
    })
  }, []);

  return (
    <div className="App">
      <h1>Hello, world</h1>

      <DisplayMakeup number="100" />
    </div>
  );
}

export default App;

  // MVPS
// Make api call to get all foundations
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
