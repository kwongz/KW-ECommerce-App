import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogue from './components/Catalogue';
import Nav from './components/Nav';

function App() {


  return (
    <Router>
      <header>
        <h1>Hello, world</h1>
        <Nav />
      </header>
      <main>
        <Route exact path="/">
          <Catalogue />
        </Route>
      </main>
    </Router>
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
