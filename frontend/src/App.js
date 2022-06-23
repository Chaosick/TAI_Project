import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import HookCounterOne from './components/HookCounterOne';
import Mainbar from './components/Mainbar';
import Navbar from './components/Navbar'


function App() {

  const [category, setCategory] = useState(0);
  const [search, setSearch] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  return (
    <div className="App">
      <Navbar category = {category} setCategory={setCategory} search={search} setSearch={setSearch} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
      <Mainbar category = {category} search={search} minPrice={minPrice} maxPrice={maxPrice}/>
    </div>
  );
}

export default App;
