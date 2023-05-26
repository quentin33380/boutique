import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import store from './store/store';
import Home from './pages/Home';
import Header from './pages/Header';
import Basket from './pages/Basket';
import './App.css'

function App() {


  return (
    <>
      <Provider store={store}>
        <Router>
          <div>
            <h1>Ma boutique</h1>
            <nav>
            <ul >
              <li><Header /></li>
              <li class="btn">
                <Link to="/home">Accueil</Link>
              </li>
              <li class="btn"><Link to="/Basket">Panier</Link></li>
            </ul>
          </nav>
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/basket" element={<Basket />} /> {/* Affichage du panier */}
          </Routes>
        </Router>
      </Provider>
    </>
  )
}

export default App
