import React from 'react'

export default function Navbar({filter,setFiltering}) {
    return (
        <nav className="navbar navbar-light navbar-expand-lg bg-info justify-content-between fixed ">
          <a className="navbar-brand text-white text-uppercase font-weight-bold">
            BDR SHOP
          </a>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e)=>{
                setFiltering(e.target.value.length >0);
                filter(e.target.value);
              }
            }
            />
          </form>
          <div className="menu-right">
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </div>
        </nav>
    );
}
