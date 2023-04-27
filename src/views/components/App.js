import { Fragment, useState, useEffect } from "react";
import "../../App.css";
import Navbar from "../../components/Navbar";
import { Route, Routes } from "react-router-dom";
import { list } from "../../data";
import CartPage from "./Cart";
import Home from "./Home";
import Checkout from "./Checkout";
import UserProfileContextProvider from "../../lib/UserProfileContext"

function App(props) {
  const { items, saveLocalStorage } = props
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
    saveLocalStorage(items);
  }, [items]);



  return (
    <Fragment>
      <Navbar filter={filterResult} setFiltering={setFiltering} count={count} />
      {/* Routes */}

      <UserProfileContextProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                category={Category}
                loadCategory={loadCategory}
                // updateCart={update}
                list={list}
                isFiltering={isFiltering}
                filtered={Filtered}

              // setcount={setcount}
              />
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>
      </UserProfileContextProvider>
    </Fragment>
  );
}

export default App;
