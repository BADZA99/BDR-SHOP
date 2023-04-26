import { Fragment, useState, useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
// import SideMenu from "../components/SideMenu";
// import List from "../components/List";
import {  Route, Routes } from "react-router-dom";
import { list } from "../data";
import Cart from "./Cart";
import Home from "./Home";
// eslint-disable-next-line
function App() {
  const [Category, setCategory] = useState(0);
  const [isFiltering, setFiltering] = useState(false);
  const [Filtered, setFiltered] = useState(false);
  const [count, setcount] = useState(1);
  const loadCategory = (i) => {
    setCategory(i);
  };

  const filterResult = (input) => {
    let fullList = list.flat();
    // console.log(fullList);
    let results = fullList.filter((item) => {
      const name = item.name.toLowerCase();
      const term = input.toLowerCase();
      return name.indexOf(term) > -1;
    });
    setFiltered(results);
  };

  useEffect(() => {
    console.log(isFiltering);
  });

  return (
    <Fragment>
        <Navbar filter={filterResult} setFiltering={setFiltering} count={count} />
        {/* Routes */}
       
         
          <Routes>
            <Route exact path="/" element={<Home
              Category={Category}
              loadCategory={loadCategory}
              addToCart={setcount}
              list={list}
              isFiltering={isFiltering}
              Filtered={Filtered}
              count={count}
              // setcount={setcount}
            />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        
    </Fragment>
  );
}

export default App;
