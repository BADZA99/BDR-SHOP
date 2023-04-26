import React from 'react'
import Card from './Card'

export default function List(props) {
    const {data,category,addToCart,count}=props;


    // console.log(article);
  return (
    <div>
      <div className="col-sm">
        <div className="row">
          {data.map((item) => (
            <Card
              key={item.ref}
              item={item}
              addToCart={addToCart}
              count={count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
