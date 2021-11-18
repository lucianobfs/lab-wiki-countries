import './App.js';
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from './components/Navbar.js';

import CountriesList from './components/CountriesList.js';

import countries from "./countries.json"

import CountryDetails from './components/CountryDetails.js';

function App() {
  return (

  <div>
      <Navbar />

    <div className="container">

    <div className="row">

    
        <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <CountriesList countries={countries}/>
        </div>

        <div className="col-7">

          <Routes>


            <Route path="/:country/" element={<CountryDetails />} />

          </Routes>

        </div>


      </div>
  
      
    </div>

    </div>
  );
}

export default App;
