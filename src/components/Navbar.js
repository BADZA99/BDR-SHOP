import React from 'react'
import { Link } from "react-router-dom";
// import usedispatch
import { useSelector } from "react-redux";

export default function Navbar({filter,setFiltering}) {
  const items=useSelector(state=>state.items)
    return (
      <nav className="navbar navbar-light navbar-expand-lg bg-info justify-content-between fixed ">
        <Link to={"/"}>
          <a className="navbar-brand text-white text-uppercase font-weight-bold" href='#'>
            BDR SHOP
          </a>
        </Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setFiltering(e.target.value.length > 0);
              filter(e.target.value);
            }}
          />
        </form>
        <div className="menu-right">
          <Link to={"/cart"} className='panier'><i class="fa-solid fa-bag-shopping fa-2xl"></i></Link>
          <span class="badge badge-danger Badge">{items.length > 0 && items.length}</span>
        </div>
      </nav>
    );
}
