import React from 'react'
import Card from './Card'
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/actions";

export default function List(props) {
    const {data,category,updateCart}=props;


    // console.log(article);
  return (
    <div>
      <div className="col-sm">
        <div className="row">
          {data.map((item) => (
            <Card
              key={item.ref}
              item={item}
              // addToCart={addToCart}
              updateCart={updateCart}
              // count={count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
