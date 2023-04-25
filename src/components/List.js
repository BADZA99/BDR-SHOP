import React from 'react'
import Card from './Card'

export default function List(props) {
    const {data}=props;


    // console.log(article);
  return (
    <div>
      <div className="col-sm">
        <div className="row">
             {
               data.map(item => <Card key={item.ref} item={item}/>) 

            } 
        </div>
      </div>
    </div>
  )
}
