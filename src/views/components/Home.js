import React from 'react';
import SideMenu from '../../components/SideMenu';
import List from '../../components/List';
// import { list } from '../../data';


export default function Home(props) {
    const {isFiltering,filtered,list,category,loadCategory,updateCart}=props
  return (
    <div className="container mt-5">
      <div className="row">
        <SideMenu loadCategory={loadCategory} />
        <div className="col-sm">
          <div className="row">
            <List
              data={isFiltering ? filtered : list[category]}
              category={category}
              // addToCart={addToCart}
              updateCart={updateCart}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}
